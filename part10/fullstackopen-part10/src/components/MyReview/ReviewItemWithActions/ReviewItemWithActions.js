import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, View } from 'react-native';
import { Link } from 'react-router-native';
import useDeleteReview from '../../../hooks/useDeleteReview';
import ReviewItem from '../../ReviewItem';
import RowView from '../../RowView';
import theme from '../../../theme';
import styles from './reviewItemWithActionsStyles';
ReviewItemWithActions.propTypes = {
  id: PropTypes.string,
  repository: PropTypes.shape({
    fullName: PropTypes.string,
  }),
};
ReviewItemWithActions.defaultProps = {
  id: undefined,
  repository: {},
};
function ReviewItemWithActions({ id, repository, ...props}) {
  const [deleteReview] = useDeleteReview();

  const onDelete = useCallback(() => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        { text: 'Cancel' },
        {
          text: 'Delete',
          onPress: () => deleteReview(id)
        }
      ],
      { cancelable: false }
    );
  }, [deleteReview])

  return (
    <View style={styles.container}>
      <ReviewItem {...props} title={repository.fullName}/>
      <RowView>
        <View style={styles.buttonContainer}>
          <Link
            to={`/repo/${repository.id}`}
            component={Button}
            title="View repository"
            color={theme.colors.primary}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Delete review" color={theme.colors.error} onPress={onDelete}/>
        </View>
      </RowView>
    </View>
  );
}
export default ReviewItemWithActions;
