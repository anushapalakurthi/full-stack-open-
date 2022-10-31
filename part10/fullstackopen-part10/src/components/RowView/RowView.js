import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './rowViewStyles';

RowView.propTypes = {
  style: PropTypes.object,
};
RowView.defaultProps = {
  style: undefined,
};

function RowView({ style, ...props }) {
  return <View style={[styles.rowContainer, style]} {...props}/>;
}

export default RowView;
