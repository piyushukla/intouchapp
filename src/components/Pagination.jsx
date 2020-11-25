import React from "react";

const Pagination = ({ usersPerPage, totalusers, paginate, data, num }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalusers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ float: "right", position: "relative", marginRight: "242px" }}>
      <nav>
        <ul
          className="pagination"
          style={{ alignContent: "center", marginLeft: "130%" }}
        >
          <li>
            <button
              onClick={() => paginate(data - 1)}
              style={{
                alignContent: "center",

                fontSize: "1vw",
              }}
              className="btn btn-primary"
              disabled={num.length < 5 || data === 1 ? true : false}
            >
              Prev
            </button>
          </li>
          <li key={data}>
            <button
              onClick={() => paginate(data + 1)}
              style={{ marginLeft: "130%", fontSize: "1vw" }}
              className="btn btn-primary "
              disabled={
                num.length < 5 || data === pageNumbers.length ? true : false
              }
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
