import React from "react";
import { ButtonList } from "components";

export default function Math(props) {
  return <ButtonList list={props.numbers} category="math" />;
}