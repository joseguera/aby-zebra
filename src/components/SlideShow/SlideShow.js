import React, { useState } from "react";
import { ShowContainer, SlideHolder, Slide, Fact, CloseIcon } from "./SlideShow.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function SlideShow({ xSectionCloser }) {
  const [slide, setSlide] = useState(0);

  const slideContent = [
    <Fact>Place of Origin: Africa<br />Flag: [FLAG]</Fact>,
    <Fact>Instrument Type: Wind<br />Made of Material: Wood
    </Fact>,
    <Fact>YouTube video of a musician playing the instrument.</Fact>,
  ];

  const decrementFact = () => {
    setSlide((prevFact) => prevFact - 1);
    slide <= 0 && setSlide(2);
  };

  const incrementFact = () => {
    setSlide((prevFact) => prevFact + 1);
    slide >= 2 && setSlide(0);
  };

  return (
    <ShowContainer>
      <SlideHolder>
        <FontAwesomeIcon
          className="arrow-icon"
          icon={faAngleLeft}
          onClick={() => decrementFact()}
        />
        <Slide>{slideContent[slide]}</Slide>
        <FontAwesomeIcon
          className="arrow-icon"
          icon={faAngleRight}
          onClick={() => incrementFact()}
        />
      </SlideHolder>
      <CloseIcon onClick={() => xSectionCloser()}>
        <FontAwesomeIcon icon={faRectangleXmark} />
      </CloseIcon>
    </ShowContainer>
  );
}