import React, { useState } from "react";
import GameLink from "./GameLink/GameLink";
import styled from "styled-components";
import { mockData } from "../../mockData/mockData";

function GameList() {
  const [data, setdata] = useState(mockData.slice(0, 7));

  const showAll = () => {
    setdata(mockData);
  };

  return (
    <>
      <TitleWrapper>
        <Title>Top picks</Title>
        <ActionText onClick={() => showAll()}>Show all</ActionText>
      </TitleWrapper>

      <ListWrapper>
        {data.map((item, index) => (
          <GameLink key={index} index={index} item={item} />
        ))}
      </ListWrapper>
    </>
  );
}

const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  grid-auto-flow: dense;
  list-style: none;
  margin: 10px auto;
  padding: 0 30px;
`;
const TitleWrapper = styled.h4`
  display: flex;
  padding: 10px 40px;
`;
const Title = styled.h4`
  color: #000000;
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  flex-grow: 1;
`;
const ActionText = styled.h5`
  cursor: pointer;
  color: #000000;
  font-weight: bold;
  font-size: 14px;
  line-height: 40px;
`;

export default GameList;
