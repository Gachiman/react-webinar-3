import React from 'react';
import PropTypes from 'prop-types';
import { usePagination, DOTS } from './use-pagination';
import './style.css';

function Pagination ({
    onPageChange,
    totalCount,
    currentPage,
    pageSize,
    siblingCount = 1,
  }) {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className='pagination-container'
    >
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item">{DOTS}</li>;
        }

        return (
          <li
            className={pageNumber === currentPage ?
               'pagination-item selected' : 'pagination-item available'}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
    </ul>
  );
}

Pagination.PropTypes = {
  onPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  siblingCount: PropTypes.number,
}

export default Pagination;