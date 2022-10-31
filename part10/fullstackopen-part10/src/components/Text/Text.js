import React from 'react';
import PropTypes from 'prop-types';
import { Text as NativeText } from 'react-native';
import styles from './textStyles';

Text.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  fontSize: PropTypes.oneOf(['body', 'subheading']),
  fontWeight: PropTypes.oneOf(['normal', 'bold']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  style: PropTypes.object,
};
Text.defaultProps = {
  color: 'primary',
  fontSize: 'body',
  fontWeight: 'normal',
  textAlign: 'left',
  style: undefined,
};

function Text({ color, fontSize, fontWeight, textAlign, style, ...props }) {
  const textStyle = [
    styles.text,
    color === 'secondary' && styles.colorSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    textAlign === 'left' ? styles.textLeft : textAlign === 'right' ? styles.textRight : styles.textCenter,
    style,
  ];

  return <NativeText style={textStyle} {...props}/>;
}

export default Text;
