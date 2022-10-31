import { useMutation } from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../graphql/mutations';

function useReview() {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    return await mutate({ variables: { input: { ownerName, repositoryName, text, rating: Number(rating) } } });
  };

  return [createReview, result];
}

export default useReview;
