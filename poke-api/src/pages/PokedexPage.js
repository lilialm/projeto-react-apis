import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Card } from "../components/Card/Card";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 160px - 120px);
  width: 100vw;
  position: relative;
  background-color: white;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 1275px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;

  > h1 {
    color: black;
    font-size: 44px;
    margin-bottom: 50px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 20px;
  }
`;
export const PokedexPage = (props) => {
  const context = useContext(GlobalContext);
  const { listPokedex, deletePokemon } = context;

  return (
    <>
      <Header isAllPokemons={true} />
      <Main>
        <Container>
          <h1>Meus Pokémons</h1>
          <div>
            {listPokedex.map((item) => {
              return (
                <div key={item.name}>
                  <Card
                    pokemon={item}
                    deletePokemon={deletePokemon}
                    isPokedexPage={true}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </Main>
    </>
  );
};
