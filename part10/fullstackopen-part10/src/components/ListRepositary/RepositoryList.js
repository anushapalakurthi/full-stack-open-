import React, { useCallback, useState } from 'react';
import { useDebounce } from 'use-debounce';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

function RepositoryList() {
  const [filters, setFilters] = useState({ orderBy: 'CREATED_AT' });
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchKeywordDebounced] = useDebounce(searchKeyword, 500);
  const { repositories, loading, fetchMore } = useRepositories(filters, searchKeywordDebounced);

  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
      filters={filters}
      searchKeyword={searchKeyword}
      onFiltersChange={setFilters}
      onSearchChange={setSearchKeyword}
      onEndReach={fetchMore}
    />
  );
}

export default RepositoryList;
