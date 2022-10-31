import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Image, View } from 'react-native';
import * as Linking from 'expo-linking';
import RowView from '../RowView';
import Text from '../Text';
import preciseNumber from './utils/preciseNumber';
import theme from '../../theme';
import styles from './repositoryItemStyles';

RepositoryItem.propTypes = {
  fullName: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  stargazersCount: PropTypes.number,
  forksCount: PropTypes.number,
  reviewCount: PropTypes.number,
  ratingAverage: PropTypes.number,
  ownerAvatarUrl: PropTypes.string,
  url: PropTypes.string,
  singleView: PropTypes.bool,
};
RepositoryItem.defaultProps = {
  fullName: '',
  description: '',
  language: '',
  stargazersCount: undefined,
  forksCount: undefined,
  reviewCount: undefined,
  ratingAverage: undefined,
  ownerAvatarUrl: undefined,
  url: undefined,
  singleView: false,
}

function RepositoryItem({
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
  ownerAvatarUrl,
  url,
  singleView,
}) {
  const onClick = useCallback(() => {
    Linking.openURL(url);
  }, [url]);

  return (
    <View style={styles.container}>
      <RowView>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }}/>
        <View style={styles.fullWidth}>
          <Text fontWeight="bold" fontSize="subheading" testID="fullName">{fullName}</Text>
          <Text color="secondary" testID="description">{description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.language} testID="language">{language}</Text>
          </View>
        </View>
      </RowView>
      <RowView style={styles.numbersContainer}>
        <View>
          <Text fontWeight="bold" textAlign="center" testID="stars">{preciseNumber(stargazersCount)}</Text>
          <Text color="secondary">Stars</Text>
        </View>
        <View>
          <Text fontWeight="bold" textAlign="center" testID="forks">{preciseNumber(forksCount)}</Text>
          <Text color="secondary">Forks</Text>
        </View>
        <View>
          <Text fontWeight="bold" textAlign="center" testID="reviews">{preciseNumber(reviewCount)}</Text>
          <Text color="secondary">Reviews</Text>
        </View>
        <View>
          <Text fontWeight="bold" textAlign="center" testID="rating">{ratingAverage}</Text>
          <Text color="secondary">Rating</Text>
        </View>
      </RowView>
      {singleView && <Button title="Open in Github" onPress={onClick} color={theme.colors.primary}/>}
    </View>
  )
}

export default RepositoryItem;
