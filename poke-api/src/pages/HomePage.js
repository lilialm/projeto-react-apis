import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import axios from "axios";
import { CardHome } from "../components/Card/CardHome";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 160px -120px);
  width: 100vw;
  position: relative;
  background-color: #5d5d5d;
`;
export const Container = styled.div`
  position: relative;
  width: 94%;
  margin: 0 auto;
  max-width: 1275px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  /* border: 2px red solid; */

  > h1 {
    color: white;
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
export const HomePage = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    getPokemonData();
  }, []);

  const getPokemonData = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21"
      );
      setPokemonData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header isHomePage={true} />
      <Main>
        <Container>
          <h1>Todos os Pokémons</h1>
          <div>
            {pokemonData &&
              pokemonData.map((item) => {
                return (
                  <div key={item.name}>
                    <CardHome name={item.name} />
                  </div>
                );
              })}
          </div>
        </Container>
      </Main>
    </>
  );
};
