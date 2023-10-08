import React from "react";
import { animalSyllables } from "zebrAPI";
import { useSelector } from "react-redux";

export default function SyllableTile(props) {
  const language = useSelector((state) => state.language.value);
  const playAudio = (syl) => {
    const syllable = syl.toLowerCase();
    new Audio(animalSyllables[props.value][language][syllable]).play();
  };


  const last = props.syllableTiles[language].length - 1;

  return props.syllableTiles[language].map((syllable, idx) => {
    return Array.isArray(syllable) ? (
      syllable.map((syl, idx) => {
        return idx === 0 ? (
          <div key={idx + syl} className="flex flex-row">
            <div
              className="h-12 tracking-wide px-5 leading-10 text-4xl border-2 border-solid border-[#ff6347] rounded cursor-pointer hover:border-[#0e6e79] hover:text-[#0e6e79]"
              onClick={() => playAudio(syl)}
            >
              {syl}
            </div>
            <div className="w-1.5 h-10 leading-12 cursor-auto border-none">-</div>
          </div>
        ) : (
          <div
            key={idx + syl}
            onClick={() => playAudio(syl)}
            className="h-12 tracking-wide px-5 leading-12 text-4xl border-2 border-solid border-[#ff6347] rounded cursor-pointer hover:border-[#0e6e79] hover:text-[#0e6e79]"
          >
            {syl}
          </div>
        );
      })
    ) : idx !== last ? (
      <div key={syllable + idx} className="flex flex-row">
        <div
          className="h-12 tracking-wide px-5 leading-12 text-4xl border-2 border-solid border-[#ff6347] rounded cursor-pointer hover:border-[#0e6e79] hover:text-[#0e6e79]"
          onClick={() => playAudio(syllable)}
        >
          {syllable}
        </div>
        <div className="w-1.5 h-10 leading-12 cursor-auto border-none">-</div>
      </div>
    ) : (
      <div
        key={idx + syllable}
        onClick={() => playAudio(syllable)}
        className="h-12 tracking-wide px-5 leading-10 text-4xl border-2 border-solid border-[#ff6347] rounded cursor-pointer hover:border-[#0e6e79] hover:text-[#0e6e79]"
      >
        {syllable}
      </div>
    );
  });
}
