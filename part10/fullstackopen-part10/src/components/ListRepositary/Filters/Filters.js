import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import theme from '../../../theme';
import styles from './filtersStyles';

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  searchKeyword: PropTypes.string,
  onFiltersChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};
Filters.defaultProps = {
  searchKeyword: '',
};

const ITEMS = [
  { label: 'Latest repositories', value: { orderBy: 'CREATED_AT' } },
  { label: 'Highest rated repositories', value: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' } },
  { label: 'Lowest rated repositories', value: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' } },
];

function Filters({ filters, searchKeyword, onFiltersChange, onSearchChange }) {
  return (
    <View style={styles.container}>
      <Searchbar placeholder="Search" value={searchKeyword} onChangeText={onSearchChange}/>
      <RNPickerSelect
        placeholder={{ label: 'Select filter', color: theme.colors.textSecondary }}
        onValueChange={onFiltersChange}
        items={ITEMS}
        value={filters}
      />
    </View>
  );
}

export default Filters;
