import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import theme from '../../theme';
import styles from './LoadMakerStyles';
LoadMaker.propTypes = {
  loading: PropTypes.bool,
};
LoadMaker.defaultProps = {
  loading: false,
};
function LoadMaker({ loading }) {
  return loading
    ? <ActivityIndicator style={styles.LoadMaker} size="large" color={theme.colors.primary}/>
    : null;
}
export default LoadMaker;
