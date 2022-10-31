import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { format } from 'date-fns';
import RowView from '../RowView';
import Text from '../Text';
import styles from './reviewItemStyles';

ReviewItem.propTypes = {
  text: PropTypes.string,
  rating: PropTypes.number,
  createdAt: PropTypes.string,
  title: PropTypes.string,
};
ReviewItem.defaultProps = {
  text: undefined,
  rating: undefined,
  createAt: undefined,
  title: undefined,
};

function ReviewItem({ text, rating, createdAt, title }) {
  return (
    <View style={styles.container}>
      <RowView>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating} fontWeight="bold">{rating}</Text>
        </View>
        <View style={styles.fullWidth}>
          <Text fontWeight="bold">{title}</Text>
          <Text color="secondary">{format(new Date(createdAt), 'dd.MM.yyyy')}</Text>
          <Text>{text}</Text>
        </View>
      </RowView>
    </View>
  );
}

export default ReviewItem;
