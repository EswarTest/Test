import React from "react";
import BasicContent from "../BasicContent/BasicConent";
import Info from "../Info/Info";

function BackCard({ movie, isFrontCard }) {
  return (
    <>
      <div className="title-content">
        <BasicContent movie={movie} isFrontCard={isFrontCard} />
      </div>
      <Info movie={movie} />
    </>
  );
}

export default function FlipCard({ isFrontCard = false, movie }) {
  return (
    <div className={isFrontCard ? "flip-card-front" : "flip-card-back"}>
      {isFrontCard ? (
        <BasicContent movie={movie} isFrontCard={isFrontCard} />
      ) : (
        <BackCard movie={movie} isFrontCard={isFrontCard} />
      )}
    </div>
  );
}
