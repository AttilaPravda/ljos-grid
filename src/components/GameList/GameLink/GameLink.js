import React from "react";
import styled from "styled-components";
import { returnColor } from "../../../utils/helpers";

function GameLink({ index, item }) {
  return (
    <Thumbnail
      isFavorite={item.favorite}
      style={{ background: returnColor(index) }}
    >
      <GameImage
        src={item.gameImageSmall}
        srcSet={`${item.gameImageSmall} 300w, ${item.gameImageBig} 768w`}
        alt={item.title}
      />
      <GameLogo
        isFavorite={item.favorite}
        src={item.logoImage}
        alt={item.title}
      />
      <GameBackground
        src={item.backImageSmall}
        srcSet={`${item.backImageSmall} 300w, ${item.backImageBig} 768w`}
        alt={item.title}
      />
      <Subtitle isFavorite={item.favorite}>{item.Provider}</Subtitle>
      <Title isFavorite={item.favorite}>{item.title}</Title>
    </Thumbnail>
  );
}

const Thumbnail = styled.li`
  position: relative;
  height: ${(props) => (props.isFavorite ? "370px" : "180px")};
  border-radius: 5px;
  grid-column-end: ${(props) => (props.isFavorite ? "span 2" : null)};
  grid-row-end: ${(props) => (props.isFavorite ? "span 2" : null)};
  @media (max-width: 768px) {
    height: 180px;
    grid-column-end: unset;
    grid-row-end: unset;
  }
`;
const Title = styled.h4`
  position: absolute;
  bottom: ${(props) => (props.isFavorite ? "20px" : "10px")};
  left: ${(props) => (props.isFavorite ? "20px" : "10px")};
  color: #ffffff;
  font-size: ${(props) => (props.isFavorite ? "30px" : "18px")};
  line-height: ${(props) => (props.isFavorite ? "38px" : "24px")};
`;
const Subtitle = styled.h5`
  position: absolute;
  opacity: 0.6;
  bottom: ${(props) => (props.isFavorite ? "50px" : "30px")};
  left: ${(props) => (props.isFavorite ? "20px" : "10px")};
  color: #ffffff;
  font-size: ${(props) => (props.isFavorite ? "20px" : "12px")};
  line-height: ${(props) => (props.isFavorite ? "30px" : "20px")};
`;
const GameImage = styled.img`
  z-index: 1;
  position: absolute;
  height: 100%;
  right: 0;
`;
const GameLogo = styled.img`
  position: absolute;
  z-index: 1;
  height: ${(props) => (props.isFavorite ? "120px" : "40px")};
  left: 10px;
  top: 10px;
`;
const GameBackground = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default GameLink;
