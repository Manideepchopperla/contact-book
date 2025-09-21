import './Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="page-btn"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      
      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>
      
      <button
        className="page-btn"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;