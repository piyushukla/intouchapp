import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Left from "./components/Left";
import Pagination from "./components/Pagination";
import Right from "./components/Right";
import "./style.css";
import { Contact } from "./components/contact_list";

function App() {
  const [contact, setContact] = useState(Contact);
  const [dumy, setDumy] = useState(Contact);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchoutput, setsearchoutput] = useState("");
  const [usersPerPage, setUsersPerPage] = useState(5);
  const [output, setOutput] = useState([]);
  const [display, setDisplay] = useState();

  function select(e) {
    var item = contact.filter((data) => {
      if (data["E-mail Address"].toLowerCase().includes(e.toLowerCase())) {
        return data;
      }
    });

    setDisplay(...item);
  }

  function update(e) {
    var data_id;
    var item = dumy.filter((data, id) => {
      if (
        data["E-mail Address"]
          .toLowerCase()
          .includes(e["E-mail Address"].toLowerCase())
      ) {
        data_id = id;
        return data;
      }
    });
    var temp = [...dumy];
    temp[data_id] = { ...e };
    //  temp[id] = { ...e };

    setContact([...temp]);
    setDumy([...temp]);
  }

  var currentUser;
  var indexOfLastPost;
  var indexOfFirstPost;

  useEffect(() => {
    if (searchoutput.length === 0) {
      return setContact([...dumy]);
    }
    var item = contact.filter((data) => {
      if (searchoutput.length === 0) {
        return setContact([...dumy]);
      } else if (
        data["First Name"].toLowerCase().includes(searchoutput.toLowerCase()) ||
        data["Country"].toLowerCase().includes(searchoutput.toLowerCase()) ||
        data["Home Phone"].toLowerCase().includes(searchoutput.toLowerCase())
      ) {
        return data;
      }
    });

    setCurrentPage(1);
    var temp = [...item];
    setContact([...temp]);
    setCurrentPage(1);
  }, [searchoutput]);

  indexOfLastPost = currentPage * usersPerPage;
  indexOfFirstPost = indexOfLastPost - usersPerPage;
  currentUser = contact.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ padding: "20px" }} className="row no-gutters">
      <div className="head col-md-4 no-gutters">
        <div
          className="leftside"
          style={{
            float: "left",
            height: "100%",
          }}
        >
          <div
            className="fixed-top "
            style={{
              marginTop: "25px",
              textAlign: "center",
              backgroundColor: "white",
              height: "100px",

              marginLeft: "25px",
            }}
          >
            <input
              type="text"
              className="search form-control form-control-sm ml-3 w-75"
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
            user={currentUser}
            display={(e) => {
              select(e);
            }}
          />
          {currentUser.length !== 0 || currentUser.length > 5 ? (
            <Pagination
              usersPerPage={usersPerPage}
              totalusers={contact.length}
              paginate={(e) => {
                paginate(e);
              }}
              data={currentPage}
              num={currentUser}
            />
          ) : null}
        </div>
      </div>

      <div className="col-md-6 no-gutters">
        <h1 style={{ marginLeft: "10%" }}>Contact Details</h1>
        <div
          className="rightside"
          style={{
            float: "left",
            padding: "20px",
            marginTop: "10%",
          }}
        >
          {display === undefined ? null : (
            <Right
              data={display}
              update={(e) => {
                update(e);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
