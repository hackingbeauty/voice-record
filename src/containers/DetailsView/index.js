import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter }         from 'react-router-dom';
import { IconButton }         from 'material-ui';
import Button                 from 'components/Button';
import { Drawer  }            from 'material-ui';
import NavigationBack         from 'material-ui/svg-icons/navigation/arrow-back';
import PlayButton             from 'material-ui/svg-icons/av/play-arrow';
import PauseButton            from 'material-ui/svg-icons/av/pause';

/* actions */
import * as uiActionCreators    from 'core/actions/actions-ui';
import * as audioActionCreators from 'core/actions/actions-audio';

/* component styles */
import { styles } from './styles.scss';

class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open       : false,
      audioBlob  : null,
      isPlaying  : false
    }
  }

  componentWillReceiveProps(nextProps) {
    const { list } = nextProps.audio;
    const { pathname } = nextProps.location;
    const audioId = this.getCurrentId(pathname);
    this.findRecordId(list, audioId);
  }

  findRecordId= (list, audioId) => {
    if(list && list.length){
      const audioBlob = list.find((item)=> {
        return item.id === audioId;
      });
      this.setState({
        audioBlob: audioBlob
      });
    } else {
      this.setState({
        audioBlob: undefined
      });
    }
  }

  getCurrentId(pathname) {
    return pathname.split('/')[2];
  }

  closeNav= () => {
    const { actions, history } = this.props;
    this.setState({
      open     : false,
      isPlaying: false
    });
    actions.ui.closeRightNav();
    history.push('/recordings');
  }

  playAudio= () => {
    this.refs.audioSource.play();
    this.setState({
      isPlaying: true
    });
  }

  pauseAudio=() => {
    this.refs.audioSource.pause();
    this.setState({
      isPlaying: false
    });
  }

  onEnded=() => {
    this.setState({
      isPlaying: false
    });
  }

  getContent() {
    const { audioBlob, isPlaying } = this.state;
    let body;

    if(audioBlob) {
      const { title } = this.state.audioBlob;
      const { blob } = this.state.audioBlob;
      const buttonIcon = isPlaying ? <PauseButton /> : <PlayButton />;
      const buttonMode = isPlaying ? this.pauseAudio : this.playAudio;

      body= (<div>
              <span className="audio-title">{title}</span>
              <Button
                className="play"
                floating={true}
                icon={buttonIcon}
                onTouchTap={buttonMode}
                secondary={true} />
              <div className="audio-controls">
                <audio ref="audioSource" controls="controls" onEnded={this.onEnded}>
                  <source src={URL.createObjectURL(blob)} type="audio/webm" />
                </audio>
              </div>
            </div>);

    } else {
      body=(<div>No recording was found</div>);
    }

    return (
      <div>
        <header>
          <IconButton className="btn close" onTouchTap={this.closeNav}>
            <NavigationBack />
          </IconButton>
        </header>
        <div className="details-view-body">
          {body}
        </div>
      </div>
    );
  }

  render() {
    const { ui } = this.props;
    const content = this.getContent();

    return (
      <div className={styles}>
        <Drawer
          docked={false}
          width={500}
          open={ui.rightNavOpen || this.state.open}
          containerClassName="right-drawer"
          openSecondary={true}
          onRequestChange={this.closeNav}
          swipeAreaWidth={10} >
          {content}
          </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ui    : state.ui,
    audio : state.audio
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui    : bindActionCreators(uiActionCreators, dispatch),
      audio : bindActionCreators(audioActionCreators, dispatch)
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsView));
