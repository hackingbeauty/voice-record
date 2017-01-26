/**
 * Text Field - A common Text Field
 */

import React, { Component }          from 'react';
import { TextField as MUITextField } from 'material-ui';

/* component styles */
import { styles } from './styles.scss';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      inputValue: ''
    }
  }

  onChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <div className={styles}>
        <MUITextField
          {...this.props}
          onChange={this.onChange}
          className="text-field"
          value={this.state.inputValue} />
      </div>
    );
  }

}


TextField.propTypes = {
  hintText: React.PropTypes.string,
  type    : React.PropTypes.string
};

TextField.defaultProps = {
  type: 'text'
}

export default TextField;