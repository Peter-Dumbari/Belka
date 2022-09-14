import React, { useEffect } from "react";
import { CDBIcon } from "cdbreact";

export default function Pagefooter({
  postPerPage,
  totalPosts,
  paginate,
  NextPage,
  minPageNumberLimit,
  maxPageNumberLimit,
  PreviousPage,
  currentPage,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  useEffect(() => {
    console.warn();
  });

  return (
    <div className="row pagination-container">
      <div className="col-sm-8 col-md-8 col-lg-7 offset-lg-1">
        <span style={{ fontWeight: "bold" }}>
          Showing 1 to 12 of 2,000 Users
        </span>
      </div>
      <div className="col-sm-2 col-md-4 col-lg-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button
                className="page-link"
                onClick={(pageNumber) => PreviousPage(pageNumber)}
                disabled={currentPage == pageNumber[0] ? true : false}>
                <CDBIcon icon="angle-left" />
              </button>
            </li>
            {pageNumber.map((number) => {
              if (
                number < maxPageNumberLimit + 1 &&
                number > minPageNumberLimit
              )
                return (
                  <li className="page-item" key={number}>
                    <a
                      className={
                        currentPage === number
                          ? "page-link active"
                          : "page-link"
                      }
                      onClick={() => paginate(number)}>
                      {number}
                    </a>
                  </li>
                );
              else {
                return null;
              }
            })}
            <li className="page-item">
              <button
                className="page-link"
                onClick={(pageNumber) => NextPage(pageNumber)}
                disabled={
                  currentPage == pageNumber[pageNumber.length - 1]
                    ? true
                    : false
                }>
                <CDBIcon icon="angle-right" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
