import React, { useState, useEffect } from "react";
import "../style.css";

function Right({ data, update }) {
  const [flag, setFlag] = useState(true);
  var [obj, setObj] = useState({
    "First Name": data["First Name"],
    "Last Name": data["Last Name"],
    "E-mail Address": data["E-mail Address"],
    City: data["City"],
    Country: data["Country"],
    Department: data["Department"],
    "Home Phone": data["Home Phone"],
    gender: data["gender"],
  });

  useEffect(() => {
    setObj({ ...data });
  }, [data]);

  function change(e) {
    setObj({
      ...obj,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div
      onChange={() => {
        setFlag(false);
      }}
      className="details"
    >
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationTooltip01">First name</label>
          <input
            type="text"
            class="form-control"
            name="First Name"
            id="validationTooltip01"
            placeholder="First name"
            value={obj["First Name"]}
            onChange={(e) => {
              change(e);
            }}
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationTooltip02">Last name</label>
          <input
            type="text"
            name="Last name"
            class="form-control"
            id="validationTooltip02"
            placeholder="Last name"
            value={obj["Last Name"]}
            onChange={(e) => {
              change(e);
            }}
            required
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationTooltipUsername">Email</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span
                class="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                @
              </span>
            </div>
            <input
              type="text"
              disabled
              class="form-control"
              id="validationTooltipUsername"
              placeholder="Username"
              aria-describedby="validationTooltipUsernamePrepend"
              value={obj["E-mail Address"]}
              name="E-mail Address"
              onChange={(e) => {
                change(e);
              }}
              required
            />
            <div class="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationTooltip03">City</label>
          <input
            type="text"
            name="City"
            class="form-control"
            id="validationTooltip03"
            placeholder="City"
            value={obj["City"]}
            onChange={(e) => {
              change(e);
            }}
            required
          />
          <div class="invalid-tooltip">Please provide a valid city.</div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationTooltip04">Country</label>
          <input
            type="text"
            class="form-control"
            id="validationTooltip04"
            placeholder="State"
            name="Country"
            value={obj["Country"]}
            onChange={(e) => {
              change(e);
            }}
            required
          />
          <div class="invalid-tooltip">Please provide a valid state.</div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationTooltip05">Department Name</label>
          <input
            type="text"
            class="form-control"
            id="validationTooltip05"
            placeholder="Zip"
            value={obj["Department"]}
            name="Department"
            onChange={(e) => {
              change(e);
            }}
            required
          />
          <div class="invalid-tooltip">Please provide a valid zip.</div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationTooltip05">Home Phone</label>
          <input
            type="text"
            class="form-control"
            id="validationTooltip05"
            placeholder="Zip"
            value={obj["Home Phone"]}
            name="Home Phone"
            onChange={(e) => {
              change(e);
            }}
            required
          />
          <div class="invalid-tooltip">Please provide a valid zip.</div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationTooltip05">Gender</label>
          <input
            type="text"
            class="form-control"
            id="validationTooltip05"
            placeholder="Zip"
            value={obj["gender"]}
            name="gender"
            onChange={(e) => {
              change(e);
            }}
            required
          />
          <div class="invalid-tooltip">Please provide a valid zip.</div>
        </div>
      </div>
      <button
        class="btn btn-primary"
        disabled={flag === true ? true : false}
        onClick={() => {
          update(obj);
          setObj({
            "First Name": "",
            "Last Name": "",
            "E-mail Address": "",
            City: "",
            Country: "",
            Department: "",
            "Home Phone": "",
            gender: "",
          });
        }}
      >
        Update
      </button>
    </div>
  );
}
export default Right;
