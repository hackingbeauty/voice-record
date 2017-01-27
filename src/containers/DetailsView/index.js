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
import * as audioActionCreators from 'core/actions/actions-audio';


/* component styles */
import { styles } from './styles.scss';

class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.closeNav = this.closeNav.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.saveAudio = this.saveAudio.bind(this);
    this.state = {
      title   : '',
      blobURL : '',
      inputValue : ''
    }
  }

  closeNav() {
    this.props.router.push('/recordings');
  }

  onKeyPress(event) {
    if(event.key === 'Enter') {
      this.saveAudio();
    } else {
      this.setState({
        inputValue: event.target.value
      });
    }
  }

  saveAudio() {
    const inputValue = this.state.inputValue;
    const id = 123;
    const audioBlob ='';

    if(inputValue) {
      this.props.actions.audio.saveAudio(id,inputValue, audioBlob);
    } else {
      this.props.actions.audio.saveAudio(id,'Untitled', audioBlob);
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
              value={this.state.inputValue} />
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
      ui: bindActionCreators(uiActionCreators, dispatch),
      audio: bindActionCreators(audioActionCreators, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailsView));