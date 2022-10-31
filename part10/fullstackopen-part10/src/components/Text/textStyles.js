import { StyleSheet } from 'react-native';
import theme from '../../theme';

const textStyles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    textAlign: theme.textAlign.left,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  textLeft: {
    textAlign: theme.textAlign.left,
  },
  textCenter: {
    textAlign: theme.textAlign.center,
  },
  textRight: {
    textAlign: theme.textAlign.right,
  },
});

export default textStyles;
