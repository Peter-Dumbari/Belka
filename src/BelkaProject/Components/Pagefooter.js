import React from "react";
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
              <a
                className="page-link"
                onClick={(pageNumber) => PreviousPage(pageNumber)}>
                <CDBIcon icon="angle-left" />
              </a>
            </li>
            {pageNumber.map((number) => (
              <li className="page-item" key={number}>
                <a
                  className={
                    currentPage === number ? "page-link active" : "page-link"
                  }
                  onClick={() => paginate(number)}
                  href="#">
                  {number}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a
                className="page-link"
                onClick={(pageNumber) => NextPage(pageNumber)}>
                <CDBIcon icon="angle-right" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
