import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const formStyles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
  },
});

export default formStyles;
