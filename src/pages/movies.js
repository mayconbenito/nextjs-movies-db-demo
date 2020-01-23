import React from "react";
import fetch from "isomorphic-unfetch";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";

function Movie({ movie }) {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <Details>
          <Title>{movie.title}</Title>
          <Overview>{movie.overview}</Overview>
        </Details>
      </Container>
    </>
  );
}

Movie.getInitialProps = async function(context) {
  const { id } = context.query;
  const apiKey = "0abd9ec7a12966f566468092ca316441";
  const response = await fetch(`
  https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
  const data = await response.json();

  return {
    movie: data
  };
};

const Container = styled.div`
  display: flex;
  margin: 50px;
`;

const Poster = styled.img`
  width: 400px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 34px;
`;

const Overview = styled.span`
  color: #fff;
`;

export default Movie;
