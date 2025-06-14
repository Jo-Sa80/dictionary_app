import React from "react";

export default function Images(props) {
  console.log(props.images);
  if (props.images) {
    return (
      <div className="Images">
        <section>
          {props.images.map(function (images, index) {
            return (
              <div key={index}>
                {" "}
                <img src={images.url} alt="foto" />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
