import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import PaginatedItems from "../pagination/pagination";


export default function TableOne(props) {


    // const customTotal = (from, to, size) => (
    //     <span className="react-bootstrap-table-pagination-total">
    //         Showing {from} to {to} of {size} Results
    //     </span>
    // );

    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total page-btn">
          <button className="btn-1">&lt;&lt;</button>&nbsp;<button className="btn-1">&lt;</button>&nbsp;
          {from} <b>of</b> {to}
          &nbsp; <button className="btn-1">&gt;</button>&nbsp;<button className="btn-1">&gt;&gt;</button>
        </span>
    );

    const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: '<<',
        prePageText: '<',
        nextPageText: '>',
        lastPageText: '>>',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        },
        {
            text: '15', value: 15
        },] // A numeric array is also available. the purpose of above example is custom the text
    };


    const dummy = [
        {
            color: "red",
            value: "#f00",
        },
        {
            color: "green",
            value: "#0f0",
        },
        {
            color: "blue",
            value: "#00f",
        },
        {
            color: "cyan",
            value: "#0ff",
        },
        {
            color: "magenta",
            value: "#f0f",
        },
        {
            color: "yellow",
            value: "#ff0",
        },
        {
            color: "black",
            value: "#000",
        },
        {
            color: "red",
            value: "#f00",
        },
        {
            color: "green",
            value: "#0f0",
        },
        {
            color: "blue",
            value: "#00f",
        },
        {
            color: "cyan",
            value: "#0ff",
        },
        {
            color: "magenta",
            value: "#f0f",
        },
        {
            color: "yellow",
            value: "#ff0",
        },
        {
            color: "black",
            value: "#000",
        },
        {
            color: "red",
            value: "#f00",
        },
        {
            color: "green",
            value: "#0f0",
        },
        {
            color: "blue",
            value: "#00f",
        },
        {
            color: "cyan",
            value: "#0ff",
        },
        {
            color: "magenta",
            value: "#f0f",
        },
        {
            color: "yellow",
            value: "#ff0",
        },
        {
            color: "black",
            value: "#000",
        },
        {
            color: "black",
            value: "#000",
        },
        {
            color: "red",
            value: "#f00",
        },
        {
            color: "green",
            value: "#0f0",
        },
        {
            color: "blue",
            value: "#00f",
        },
        {
            color: "cyan",
            value: "#0ff",
        },
        {
            color: "magenta",
            value: "#f0f",
        },
        {
            color: "yellow",
            value: "#ff0",
        },
        {
            color: "black",
            value: "#000",
        },
        {
            color: "black",
            value: "#000",
        },
        {
            color: "red",
            value: "#f00",
        },
        {
            color: "green",
            value: "#0f0",
        },
        {
            color: "blue",
            value: "#00f",
        },
        {
            color: "cyan",
            value: "#0ff",
        },
        {
            color: "magenta",
            value: "#f0f",
        },
        {
            color: "yellow",
            value: "#ff0",
        },
        {
            color: "black",
            value: "#000",
        },
        {
            color: "black",
            value: "#000",
        },
        {
            color: "red",
            value: "#f00",
        },
        {
            color: "green",
            value: "#0f0",
        },
        {
            color: "blue",
            value: "#00f",
        },
        {
            color: "cyan",
            value: "#0ff",
        },
        {
            color: "magenta",
            value: "#f0f",
        },
        {
            color: "yellow",
            value: "#ff0",
        },
        {
            color: "black",
            value: "#000",
        },
        {
            color: "black",
            value: "#000",
        },
        {
            color: "red",
            value: "#f00",
        },
        {
            color: "green",
            value: "#0f0",
        },
        {
            color: "blue",
            value: "#00f",
        },
        {
            color: "cyan",
            value: "#0ff",
        },
        {
            color: "magenta",
            value: "#f0f",
        },
        {
            color: "yellow",
            value: "#ff0",
        },
        {
            color: "black",
            value: "#000",
        },
        {
            color: "black",
            value: "#000",
        },
        {
            color: "red",
            value: "#f00",
        },
        {
            color: "green",
            value: "#0f0",
        },
        {
            color: "blue",
            value: "#00f",
        },
        {
            color: "cyan",
            value: "#0ff",
        },
        {
            color: "magenta",
            value: "#f0f",
        },
        {
            color: "yellow",
            value: "#ff0",
        },
        {
            color: "black",
            value: "#000",
        },
    ];
    return (
        <>
            <div className="main-table">
                <BootstrapTable
                    keyField="id"
                    bordered={false}
                    data={props.data}
                    columns={props.columns}
                    bootstrap4={false}
                    wrapperClasses="table-responsive customScroll"
                    pagination={paginationFactory(options)}
                />

                {/* <div className="pagination">
                    <div className="pagenationwrapper d-flex ">
                        <div className="text-end p-2 mr-4 page"> 1-10 of 275</div>
                        <PaginatedItems
                            itemsPerPage={4}
                            item={dummy}
                            setpages={props.setPage}
                        />
                    </div>
                </div>
             */}


            </div>


        </>
    );


}