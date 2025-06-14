import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <div className="Images">
        <section>
          <div className="pictureBox">
            {props.images.map(function (images, index) {
              return (
                <div key={index}>
                  {" "}
                  <img
                    src={images.src.landscape}
                    alt={images.alt}
                    className="img-fluid App-logo"
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
