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

const mainClassName = 'btn';

export default function Button(props) {
  const buttonElem = createButton(props);
  return (
    <div className={styles}>
      {buttonElem}
    </div>
  );
}

function createButton(props) {
  const {
    label,
    className,
    onTouchTap,
    icon,
    disabled,
    primary,
    secondary } = props;

  let buttonElem;

  if(props.floating) {
    buttonElem = <FloatingActionButton
                  label={label}
                  onTouchTap={onTouchTap}
                  className={`${mainClassName} ${className}`}
                  icon={icon}
                  disabled={disabled}
                  secondary={true}>
                  {props.icon}
                 </FloatingActionButton>

  } else if(props.floating && props.secondary) {
    buttonElem = <FloatingActionButton
                  label={label}
                  onTouchTap={onTouchTap}
                  className={`${mainClassName} ${className}`}
                  icon={icon}
                  disabled={disabled}
                  secondary={true} />

  } else if(props.iconOnly){
    buttonElem= <IconButton
                  label={label}
                  onTouchTap={onTouchTap}
                  className={`${mainClassName} ${className}`}
                  disabled={disabled}
                  icon={icon}>{props.icon}</IconButton>;

  } else if(props.raised && props.secondary) {
    buttonElem = <RaisedButton
                  label={label}
                  onTouchTap={onTouchTap}
                  className={`${mainClassName} ${className}`}
                  icon={icon}
                  disabled={disabled}
                  secondary={true} />

  } else if(props.raised) {
    buttonElem = <RaisedButton
                  label={label}
                  className={`${mainClassName} ${className}`}
                  onTouchTap={onTouchTap}
                  primary={primary}
                  secondary={secondary}
                  disabled={disabled} />
  } else if(props.flat) {
    buttonElem = <FlatButton
                  onTouchTap={onTouchTap}
                  className={`${mainClassName} ${className}`}
                  icon={icon}
                  disabled={disabled} />
  } else {
    buttonElem = <FlatButton
                  onTouchTap={onTouchTap}
                  className={`${mainClassName} ${className}`}
                  icon={icon}
                  disabled={disabled} />
  }

  return buttonElem;
}

Button.propTypes = {
  raised   : React.PropTypes.bool,
  floating : React.PropTypes.bool,
  disabled : React.PropTypes.bool
};

Button.defaultProps = {
  type      : 'button',
  raised    : false,
  label     : '',
  className : mainClassName,
  disabled  : false,
  primary   : true,
  secondary : false
}