import React from 'react';
import { useParams } from 'react-router-native';
import { FlatList } from 'react-native';
import useRepository from '../../hooks/useRepository';
import RepositoryItem from '../ItemRepositary';
import Loader from '../Loader';
import ItemSeparator from '../ItemSeparator';
import ReviewItem from '../ReviewItem';

function RepositoryView() {
  const { id } = useParams();
  const { repository, loading, fetchMore } = useRepository(id);
  const reviewNodes = repository ? repository.reviews.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem {...item} title={item.user.username}/>}
      ListHeaderComponent={() => repository ? <RepositoryItem singleView {...repository}/> : null}
      ListFooterComponent={() => <Loader loading={loading}/>}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
  );
}

export default RepositoryView;
