import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

function useRepositories(filters, searchKeyword) {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { ...filters, searchKeyword, first: 8 },
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data && data.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        first: 8,
        searchKeyword,
        ...filters,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };
      },
    });
  };

  return {
    repositories: data && data.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result
  };
}

export default useRepositories;
