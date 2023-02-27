import React from "react";
import PageTitle from "../../_shared/PageTitle/PageTitle";
import FlipCard from "../../_shared/FlipCard/FlipCard";
import useFetchData from "../../hooks/useFetchData";

const Index = () => {
  const { response, error, loading } = useFetchData("/movies/nowPlaying");

  if (error) {
    return <PageTitle>Error</PageTitle>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <h1>Movies List</h1>
      <div className="moviesList">
        {response?.results.map((movie) => {
          return (
            <div key={movie.id} className="flip-card">
              <div className="flip-card-inner">
                <FlipCard isFrontCard={true} movie={movie} />
                <FlipCard movie={movie} />
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Index;
