/**
 * Button - A common button
 */

import React                    from 'react';
import { FlatButton,
         RaisedButton,
         FloatingActionButton,
         IconButton }           from 'material-ui';

/* component styles */
import { styles } from './styles.scss';

export default function Button(props) {
  const buttonElem = createButton(props);
  return (
    <div className={styles}>
      {buttonElem}
    </div>
  );
}

function createButton(props) {
  let buttonElem;
  if(props.floating) {
    buttonElem = <FloatingActionButton {...props} secondary={true} primary={false}>
                  {props.icon}
                 </FloatingActionButton>
  } else if(props.floating && props.secondary) {
    buttonElem = <FloatingActionButton {...props} secondary={true} primary={false} />
  } else if(props.iconOnly){
    buttonElem= <IconButton {...props}>{props.icon}</IconButton>;
  } else if(props.raised && props.secondary) {
    buttonElem = <RaisedButton {...props} secondary={true} primary={false} />
  } else if(props.raised) {
    buttonElem = <RaisedButton {...props} />
  } else {
    buttonElem = <FlatButton {...props} />
  }
  return buttonElem;
}

Button.propTypes = {
  raised : React.PropTypes.bool,
  floating : React.PropTypes.string
};

Button.defaultProps = {
  type      : 'button',
  primary   : true,
  raised    : false,
  label     : '',
  className : 'btn'
}