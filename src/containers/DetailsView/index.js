import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter }         from 'react-router';
import { IconButton }         from 'material-ui';
import Button                 from 'components/Button';
import Drawer                 from 'components/Drawer';
import AppBar                 from 'components/AppBar';
import TextField              from 'components/TextField';
import NavigationClose        from 'material-ui/svg-icons/navigation/close';
import Delete                 from 'material-ui/svg-icons/action/delete';
import Edit                   from 'material-ui/svg-icons/editor/mode-edit';
import Download               from 'material-ui/svg-icons/file/file-download';
import PlayButton             from 'material-ui/svg-icons/av/play-arrow';
import Checkmark              from 'material-ui/svg-icons/action/check-circle';
import { saveRecording }      from 'react-mic';

/* actions */
import * as uiActionCreators    from 'core/actions/actions-ui';

/* component styles */
import { styles } from './styles.scss';

class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.closeNav = this.closeNav.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.saveAudio = this.saveAudio.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.state = {
      idExists  : false,
      title     : '',
      blobURL   : '',
      currentID : null
    }
  }

  componentWillReceiveProps() {
    const self = this;
    this.setState({
      currentID: self.props.location.pathname.split('/')[2]
    }, () => {
      this.checkIfAudioAlreadyExists();
    });
  }

  checkIfAudioAlreadyExists() {
    const currentID = this.state.currentID;
    const audioList = this.props.audio.list;

    for(let i=0;i<audioList.length;i++) {
      let audioItem = audioList[i];

      if(audioItem.id.includes(currentID)) {
        this.setState({
          idExists : true,
          id       : audioItem.id,
          title    : audioItem.title || audioItem.value.title,
          blob     : audioItem.blob || audioItem.value.blob
        });
      }
    }
  }

  closeNav() {
    this.props.router.push('/recordings');
  }



  onKeyPress(event) {
    if(event.key === 'Enter') {
      this.saveAudio();
    }
  }

  saveAudio(){
    const inputValue = this.refs.textField.state.value;
    const id = this.props.location.pathname.split('/')[2];

    if(this.state.blob) {
      this.saveAudioWithTitle(id, inputValue, this.state.blob);
      this.props.actions.ui.openNotification('Label changed');
    } else {
      const recordedBlob = saveRecording();
      this.saveAudioWithTitle(id, inputValue, recordedBlob);
      this.props.actions.ui.openNotification('Recording saved');
    }
  }

  playAudio() {
    this.refs.audioSource.play();
  }

  getSubHeader() {
    if (this.state.idExists) {
      const blob = URL.createObjectURL(this.state.blob);

      return (
        <ul>
          <IconButton onTouchTap={this.delete}><Delete color="white" /></IconButton>
          <IconButton>
            <a ref="downloadLink" href={blob} download={`${this.state.currentID}.webm`}>
              <Download color="white" />
            </a>
          </IconButton>
        </ul>
      );
    } else {
      return (
        <ul>
          <IconButton><Checkmark color="white"/></IconButton>
        </ul>
      );
    }
  }

  getContent() {
    if(!this.state.idExists) {
      return(
        <div>
          <header>
            <IconButton className="btn" onTouchTap={this.closeNav}><NavigationClose/></IconButton>
          </header>
          <div className="details-view-body">
            <TextField
              ref="textField"
              onKeyPress={this.onKeyPress}
              autoFocus
              value={this.state.title} />
          </div>
        </div>
      );
    } else if(this.state.idExists && this.state.blob) {
      const blob = URL.createObjectURL(this.state.blob);
      return(
        <div>
          <header>
            <IconButton className="btn" onTouchTap={this.closeNav}><NavigationClose /></IconButton>
          </header>
          <div className="details-view-body">
            <span>{this.state.title}</span>
          </div>
          <Button
            floating={true}
            icon={<PlayButton />}
            onTouchTap={this.playAudio}
            secondary={true} />
          <audio ref="audioSource" controls="controls">
            <source src={blob} type="audio/webm" />
          </audio>
        </div>
      );
    }
  }

  render() {
    const content = this.getContent();
    return (
      <div className={styles}>
        <Drawer
          width={500}
          open={this.props.ui.rightNavOpen}
          containerClassName="right-drawer"
          openSecondary={true}
          onRequestChange={this.closeNav}
          content={content} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ui   : state.ui,
    audio: state.audio
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailsView));