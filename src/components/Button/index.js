/**
 * Button - A common button
 */

import React                                              from 'react';
import { FlatButton as MaterialFlatButton,
         RaisedButton as MaterialRaisedButton,
         FloatingActionButton as MaterialFloatingButton } from 'material-ui';

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
    buttonElem = <MaterialFloatingButton {...props} secondary={true} primary={false}>
                  {props.icon}
                 </MaterialFloatingButton>
  } else if(props.floating && props.secondary) {
    buttonElem = <MaterialFloatingdButton {...props} secondary={true} primary={false} />
  } else if(props.raised && props.secondary) {
    buttonElem = <MaterialRaisedButton {...props} secondary={true} primary={false} />
  } else if(props.raised) {
    buttonElem = <MaterialRaisedButton {...props} />
  } else {
    buttonElem = <MaterialFlatButton {...props} />
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