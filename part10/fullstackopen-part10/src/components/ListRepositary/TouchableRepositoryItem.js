import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-native';
import { TouchableOpacity } from 'react-native';
import RepositoryItem from '../ItemRepositary';

TouchableRepositoryItem.propTypes = {
  id: PropTypes.string.isRequired,
};

function TouchableRepositoryItem({ id, ...props }) {
  const history = useHistory();

  const onPress = useCallback(() => {
    history.push(`/repo/${id}`);
  }, [history.push, id]);

  return (
    <TouchableOpacity onPress={onPress}>
      <RepositoryItem {...props}/>
    </TouchableOpacity>
  );
}

export default TouchableRepositoryItem;
