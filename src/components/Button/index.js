/**
 * Button - A common button
 */

import React                                    from 'react';
import { FlatButton as MaterialFlatButton}      from 'material-ui';
import { RaisedButton as MaterialRaisedButton } from 'material-ui';

/* component styles */
import { styles } from './styles.scss';

export default function Button(props) {
  var buttonElem = createButton(props);
  return (
    <div className={styles}>
      {buttonElem}
    </div>
  );
}

function createButton(props) {
  var buttonElem;
  if(props.raised && props.secondary) {
    buttonElem = <MaterialRaisedButton className="btn" {...props} secondary={true} primary={false} />;
  } else if(props.raised) {
    buttonElem = <MaterialRaisedButton className="btn" {...props} />
  } else if(props.secondary) {
    buttonElem = <MaterialFlatButton className="btn" {...props} secondary={true} primary={false} />
  } else {
    buttonElem = <MaterialFlatButton className="btn" {...props} />
  }
  return buttonElem;
}

Button.propTypes = {
  label  : React.PropTypes.string.isRequired,
  raised : React.PropTypes.bool
};

Button.defaultProps = {
  type    : 'button',
  primary : true,
  raised  : false
}