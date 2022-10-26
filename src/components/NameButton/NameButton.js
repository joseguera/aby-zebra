import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";

export default class NameButton extends React.Component {
  state = {
    audio: this.props.animalNameSound
  };

  playAudio = () => {
    new Audio(this.state.audio).play();
  }

  render() {
    return (
      <div className="icon">
        <FontAwesomeIcon icon={faVolumeLow} onClick={this.playAudio}/>
      </div>
    );
  }
}