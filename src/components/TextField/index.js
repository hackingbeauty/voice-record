/**
 * Text Field - A common Text Field
 */

import React, { Component } from 'react';

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
        <input {...this.props}
          type="text"
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