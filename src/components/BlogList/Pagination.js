import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  const paginationRange = () => {
    const totalNumbers = 3; // Pages to show before and after current page
    const totalBlocks = totalNumbers + 2; // Including ellipses

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      const pages = [];
      pages.push(1); // First page

      if (startPage > 2) {
        pages.push("..."); // Left ellipsis
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) {
        pages.push("..."); // Right ellipsis
      }

      pages.push(totalPages); // Last page

      return pages;
    }
    const validTotalPages = Number.isInteger(totalPages) && totalPages > 0 ? totalPages : 1;

    return [...Array(validTotalPages).keys()].map((i) => i + 1);
  };

  return (
    <div className="pagination-container">
      {paginationRange().map((page, index) => (
        <button
          key={index}
          className={`pagination-button ${page === currentPage ? "active" : ""}`}
          onClick={() => typeof page === "number" && handlePageChange(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default Pagination;
