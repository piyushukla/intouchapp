import React, { useState } from "react";

function Left(props) {
  return (
    <ul className="mt-2" style={{ paddingTop: "100px" }}>
      {props.user.map((data, id) => {
        return (
          <div
            class="card mt-3"
            style={{ width: "70%" }}
            onClick={() => {
              props.display(data["E-mail Address"]);
            }}
          >
            {data.gender.toLowerCase() === "male" ? (
              <img
                class="card-img-top"
                src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
                alt="Contact Image"
              />
            ) : (
              <img
                class="card-img-top"
                src="https://www.w3schools.com/howto/img_avatar2.png"
                alt="Contact Image"
              />
            )}

            <div class="card-body">
              <h5 class="card-title" style={{ fontSize: "2vw" }}>
                {data["First Name"]}
              </h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{data["Home Phone"]}</li>
              <li class="list-group-item">{data["E-mail Address"]}</li>
              <li class="list-group-item">{data["Country"]}</li>
            </ul>
          </div>
        );
      })}
    </ul>
  );
}
export default Left;
