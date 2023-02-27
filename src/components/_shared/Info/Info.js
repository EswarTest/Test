import React from "react";
import Content from "../Content/Content";

export default function Info({ movie }) {
  return (
    <div className="info">
      <Content
        subHeader={"Description"}
        content={movie.overview}
        className="description"
      />
      <Content
        subHeader={"Cast"}
        content={"Lorem Ipsum, Lorem Ipsum, Lorem Ipsum."}
        className="cast"
      />
    </div>
  );
}
