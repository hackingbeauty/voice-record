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
  const { onTouchTap, className, icon } = props;
  let buttonElem;

  if(props.floating) {
    buttonElem = <FloatingActionButton
                  onTouchTap={onTouchTap}
                  className={className}
                  icon={icon}
                  secondary={true}>
                  {props.icon}
                 </FloatingActionButton>

  } else if(props.floating && props.secondary) {
    buttonElem = <FloatingActionButton
                  onTouchTap={onTouchTap}
                  className={className}
                  icon={icon}
                  secondary={true} />

  } else if(props.iconOnly){
    buttonElem= <IconButton
                  onTouchTap={onTouchTap}
                  className={className}
                  icon={icon}>{props.icon}</IconButton>;

  } else if(props.raised && props.secondary) {
    buttonElem = <RaisedButton
                  onTouchTap={onTouchTap}
                  className={className}
                  icon={icon}
                  secondary={true} />

  } else if(props.raised) {
    buttonElem = <RaisedButton
                  onTouchTap={onTouchTap}
                  className={className}
                  icon={icon} />

  } else {
    buttonElem = <FlatButton
                  onTouchTap={onTouchTap}
                  className={className}
                  icon={icon} />

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