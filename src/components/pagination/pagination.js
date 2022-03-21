import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";





export default function PaginatedItems({ itemsPerPage, item, setpages }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentpage ,setCurrenPage] = useState(0);
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(item.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(item.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
    const handlePageClick = (event) => {
      setpages(event.selected);
      setCurrenPage(event.selected);
      const newOffset = (event.selected * itemsPerPage) % item.length;
      setItemOffset(newOffset);
    };
    
  
    return (
      <>
        <div className="d-flex align-items-start justify-content-center  ">
          <div className="page__arrow" onClick={() => setCurrenPage(0)}>
            &lt;&lt;
          </div>
          <ReactPaginate
            breakLabel=""
            nextLabel="> "
            onPageChange={handlePageClick}
            marginPagesDisplayed={0}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel=" <"
            pageClassName="page"
            pageLinkClassName="page"
            previousClassName="page"
            previousLinkClassName="page"
            nextClassName="page"
            nextLinkClassName="page"
            renderOnZeroPageCount={null}
            forcePage={currentpage}
          />
          <div className="page__arrow" onClick={() => setCurrenPage(pageCount)}>
            &gt;&gt;
          </div>
        </div>
      </>
    );
  }
  