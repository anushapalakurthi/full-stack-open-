import { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';
import {AUTHORIZED_USER, GET_REPOSITORY} from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';
function useAuthorized(includeReviews = false) {
  const { data, loading, fetchMore, ...result } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews, first: 5 }
  })
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const LogOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };
  const FetchMoreHandles = () => {
    const canFetchMore = !loading && data && data.authorizedUser.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      query: AUTHORIZED_USER,
      variables: {
        after: data.authorizedUser.reviews.pageInfo.endCursor,
        first: 5,
        includeReviews,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          authorizedUser: {
            ...previousResult.authorizedUser,
            reviews: {
              ...fetchMoreResult.authorizedUser.reviews,
              edges: [
                ...previousResult.authorizedUser.reviews.edges,
                ...fetchMoreResult.authorizedUser.reviews.edges,
              ],
            },
          },
        };
      },
    });
  };
  return {
    isAuthorized: Boolean(data && data.authorizedUser),
    data: data && data.authorizedUser,
    loading,
    LogOut,
    fetchMore: FetchMoreHandles,
    ...result,
  };
}
export default useAuthorized;
