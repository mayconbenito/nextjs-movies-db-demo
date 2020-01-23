import Movie from "../components/Movie";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import styled from "styled-components";

import GlobalStyles from "../GlobalStyles";

function Index({ movies }) {
  const router = useRouter();

  return (
    <>
      <GlobalStyles />
      <Container>
        <Title>Trending Movies</Title>
        <List>
          {movies.map(movie => (
            <Movie
              key={movie.id}
              data={movie}
              onClick={() => router.push(`/movies?id=${movie.id}`)}
            />
          ))}
        </List>
      </Container>
    </>
  );
}

Index.getInitialProps = async function() {
  const apiKey = "0abd9ec7a12966f566468092ca316441";
  const response = await fetch(`
  https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
  const data = await response.json();

  return {
    movies: data.results
  };
};

const Container = styled.div`
  padding: 30px;
`;

const Title = styled.h1`
  color: #fff;
  margin-left: 15px;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Index;
