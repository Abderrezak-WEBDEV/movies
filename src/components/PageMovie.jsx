import React from 'react';

import ReactPaginate from 'react-paginate';
// pour faciliter , j'utilise la librairie react-pagination
const PageMovie = ({getPage}) => {
    console.log(getPage.selected + 1)
    const handlePageClick =(data)=>{
        console.log(data.selected + 1)
         getPage(data.selected + 1)
    } 
    const pageCount = 500;
    return (
        <ReactPaginate 
        nextLabel=">"
        breakLabel="..."
        breakClassName={"page-link"}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName={'pagination justify-content-center p-3'}
        pageClassName={"page-item"}
        nextClassName={'page-item'}
        previousClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
    

      />
    );
};

export default PageMovie;