import React from "react";

export default function Images(props) {
  if (props.images) {
    return (
      <div className="Images">
        <section>
          {props.images.map(function (images, index) {
            return (
              <div key={index}>
                {" "}
                <img src={images.src.original} alt={images.alt} />
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
