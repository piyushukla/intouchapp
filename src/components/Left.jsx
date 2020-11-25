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
            {data.gender === "Male" || data.gender === "male" ? (
              <img
                class="card-img-top"
                src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
                alt="Card image cap"
              />
            ) : (
              <img
                class="card-img-top"
                src="https://www.w3schools.com/howto/img_avatar2.png"
                alt="Card image cap"
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

          // <div className="mt-2 mr-5 ">
          //   <div
          //     className="card"
          //     style={{ marginTop: "10px" }}
          //     onClick={() => {
          //       props.display(id);
          //     }}
          //   >
          //     <div className="card-header">
          //       <li style={{ listStyle: "none" }}>
          //         First Name : {data["First Name"]}
          //       </li>
          //     </div>
          //     <div className="card-body">
          //       <ol className="card-title">Home Phone: {data["Home Phone"]}</ol>
          //       <ol className="card-title">Email: {data["E-mail Address"]}</ol>
          //     </div>
          //   </div>
          // </div>
        );
      })}
    </ul>
  );
}
export default Left;
