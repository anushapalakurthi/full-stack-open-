import React from 'react';
import PropTypes from 'prop-types';
import { TextInput as NativeTextInput } from 'react-native';
import styles from './textInputStyles'

TextInput.propTypes = {
  style: PropTypes.object,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.object,
  ]),
};
TextInput.defaultProps = {
  style: undefined,
  error: undefined,
};

function TextInput({ style, error, ...props }) {
  const textInputStyle = [style, error && styles.error];

  return <NativeTextInput style={textInputStyle} {...props}/>;
}

export default TextInput;
