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
    buttonElem = <FloatingActionButton secondary={true} >
                  {props.icon}
                 </FloatingActionButton>
  } else if(props.floating && props.secondary) {
    buttonElem = <FloatingActionButton secondary={true} />
  } else if(props.iconOnly){
    buttonElem= <IconButton>{props.icon}</IconButton>;
  } else if(props.raised && props.secondary) {
    buttonElem = <RaisedButton secondary={true} />
  } else if(props.raised) {
    buttonElem = <RaisedButton />
  } else {
    buttonElem = <FlatButton />
  }
  return buttonElem;
}

Button.propTypes = {
  raised : React.PropTypes.bool,
  floating : React.PropTypes.bool
};

Button.defaultProps = {
  type      : 'button',
  raised    : false,
  label     : '',
  className : 'btn'
}