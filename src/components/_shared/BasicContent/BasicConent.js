import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import PagePoster from "../PagePoster/PagePoster";

export default function BasicContent({ movie, isFrontCard }) {
  return (
    <>
      <PagePoster
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        {...(!isFrontCard && { width: "50px" })}
      />
      <div className={isFrontCard ? "container" : "title-rating"}>
        <PageTitle>
          <b>{movie.title}</b>
        </PageTitle>
        <span>Rating: {movie.vote_average}</span>
      </div>
    </>
  );
}
