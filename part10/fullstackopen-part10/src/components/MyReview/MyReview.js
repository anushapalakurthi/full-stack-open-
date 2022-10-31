import React from 'react';
import { FlatList } from 'react-native';
import useAuthorized from '../../hooks/useAuthorized';
import ReviewItemWithActions from './ReviewItemWithActions';
import Loader from '../Loader';
import ItemSeparator from '../ItemSeparator';

function MyReviews() {
  const { data, loading, fetchMore } = useAuthorized(true);
  const reviewNodes = data ? data.reviews.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItemWithActions {...item}/>}
      ListFooterComponent={() => <Loader loading={loading}/>}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
  );
}

export default MyReviews;
