import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import Filters from './Filters';
import Loader from '../Loader';
import ItemSeparator from '../ItemSeparator';
import TouchableRepositoryItem from './TouchableRepositoryItem';

const propTypes = {
  repositories: PropTypes.shape({
    edges: PropTypes.array.isRequired,
  }),
  loading: PropTypes.bool,
  filters: PropTypes.object.isRequired,
  searchKeyword: PropTypes.string,
  onFiltersChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};
const defaultProps = {
  repositories: undefined,
  loading: false,
  searchKeyword: '',
};

class RepositoryListContainer extends Component {
  renderHeader = () => {
    return <Filters {...this.props}/>;
  }

  render() {
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map(edge => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={() => <Loader loading={this.props.loading}/>}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <TouchableRepositoryItem {...item}/>}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

RepositoryListContainer.propTypes = propTypes;
RepositoryListContainer.defaultProps = defaultProps;

export default RepositoryListContainer;
