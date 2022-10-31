import { useMutation } from '@apollo/react-hooks';
import { DELETE_REVIEW } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';

function useDeleteReview() {
  const [mutate, result] = useMutation(DELETE_REVIEW);
  const apolloClient = useApolloClient();

  const deleteReview = async id => {
    const result = await mutate({ variables: { id } });
    apolloClient.resetStore();

    return result;
  };

  return [deleteReview, result];
}

export default useDeleteReview;
