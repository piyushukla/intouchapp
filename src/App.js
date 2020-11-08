import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Left from "./components/Left";
import Pagination from "./components/Pagination";
import Right from "./components/Right";
import { Contact } from "./components/contact_list";

function App() {
  const [contact, setContact] = useState(Contact);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchoutput, setsearchoutput] = useState("");
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [display, setDisplay] = useState();

  function update(e) {
    console.log("update", { ...e });
    var temp = [...contact];
    temp[display] = { ...e };
    console.log("upval", temp[display]);
    setContact([...temp]);
  }

  const item = Contact.filter((data) => {
    if (searchoutput === null) {
      return data;
    } else if (
      data["First Name"].toLowerCase().includes(searchoutput.toLowerCase()) ||
      data["Country"].toLowerCase().includes(searchoutput.toLowerCase()) ||
      data["Home Phone"].toLowerCase().includes(searchoutput.toLowerCase())
    ) {
      return data;
    }
  });

  console.log("item", item);
  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUser = item.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log("current", currentUser.length);
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          width: "30%",
          float: "left",
          height: "100%",
          border: "2px solid 	#808080",
        }}
      >
        <div
          className="fixed-top "
          style={{
            marginTop: "30px",
            textAlign: "center",
            backgroundColor: "white",
            height: "90px",
            width: "27%",
            marginLeft: "2.5%",
          }}
        >
          <input
            type="text"
            className="form-control form-control-sm ml-3 w-75"
            aria-label="Search"
            placeholder="Search Data"
            onChange={(e) => {
              setsearchoutput(e.target.value);
            }}
            style={{ marginTop: "20px" }}
          />
        </div>
        {currentUser.length === 0 ? (
          <h5 style={{ marginTop: "30%", textAlign: "center" }}>
            No data found
          </h5>
        ) : null}
        <Left
          user={item}
          display={(e) => {
            setDisplay(e);
          }}
        />
        {currentUser.length !== 0 ? (
          <Pagination
            usersPerPage={usersPerPage}
            totalusers={contact.length}
            paginate={paginate}
            data={currentPage}
            num={currentUser}
          />
        ) : null}
      </div>
      <div
        style={{
          width: "70%",
          float: "left",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Contact Details</h1>
        {display === undefined ? null : (
          <Right
            data={contact[display]}
            update={(e) => {
              update(e);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
