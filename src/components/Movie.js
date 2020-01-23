import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Movie({ data, onClick }) {
  return (
    <Container onClick={onClick}>
      <Image src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
      <TitleContainer>
        <Link href={`/movies?id=${data.id}`}>
          <Title className="movieTitle">{data.title}</Title>
        </Link>
      </TitleContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 33.333%;
  min-width: 250px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
`;

const TitleContainer = styled.div`
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  height: 38px;
  margin-top: -38px;
`;

const Title = styled.a`
  color: #fff;
  font-size: 18px;
`;
