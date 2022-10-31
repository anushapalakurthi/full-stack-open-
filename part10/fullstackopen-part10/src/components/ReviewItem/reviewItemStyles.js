import { StyleSheet } from 'react-native';
import theme from '../../theme';

const reviewItemStyles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  ratingContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 25,
  },
  rating: {
    color: theme.colors.primary,
    fontSize: 20,
  },
  fullWidth: {
    flex: 1,
  },
});

export default reviewItemStyles;
