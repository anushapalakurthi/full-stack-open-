import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';
function createApolloClient(authStorage) {
  return new ApolloClient({
    uri: Constants.manifest.extra.APOLLO_URI,
    request: async operation => {
      try {
        const tokenAccess = await authStorage.gettokenAccess();
        operation.setContext({
          headers: {
            authorization: tokenAccess ? `Bearer ${tokenAccess}` : '',
          },
        });
      } 
      catch (err) 
      {
        console.log(err);
      }
    },
  });
}
export default createApolloClient;
