import { StyleSheet } from 'react-native';
import theme from '../../theme';

const repositoryItemStyles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 5,
  },
  fullWidth: {
    flex: 1,
  },
  languageContainer: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  language: {
    flexGrow: 0,
    padding: 5,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    color: '#fff',
  },
  numbersContainer: {
    marginBottom: 10,
    justifyContent: 'space-around',
  },
});

export default repositoryItemStyles;
