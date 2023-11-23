import React from "react";
import { RootState } from "../../app/store"
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface ButtonProps {
  item: {
    id: string;
    value: string;
    clicked: boolean;
    image: string;
    name: {
      en: {
        text: string;
        audio: string;
      };
      es: {
        text: string;
        audio: string;
      };
    };
    tiles: {
      en: string[];
      es: string[];
    };
    syllables: {
      en: {
        text: string[];
        audio: Record<string, string>;
      };
      es: {
        text: string[];
        audio: Record<string, string>;
      };
    };
    soundEffect: string[];
    funFacts: string[];
    isLiked: boolean;
    category: string;
    background: string;
  };
};

const Button: React.FC<ButtonProps> = ({ item: { id, value, image, name, isLiked, category } }) => {
  const language = useSelector((state: RootState) => state.language.value);

  const newLang = (language !== 'en') ? 'en' : 'es';

  return (
    <Link to={`/${category}/${id}`} className="decoration-none">
      <div className="flex flex-col w-24 h-24 text-lg border border-[#3d674c] rounded-lg transition-all ease-out delay-150 text-[#3d674c] drop-shadow-md bg-[#e3dac9] p-1 hover:drop-shadow-lg hover:text-xl hover:text-[#558f69] focus:drop-shadow-xl lg:w-48 lg:flex-row lg:justify-between lg:p-2">
        <div className="flex flex-row items-start justify-between lg:flex-col">
          <div className="flex items-start -mt-1 text-2xl lg:text-4xl">
            {value}
          </div>
          {isLiked && (
            <div className="flex items-start">
              <FontAwesomeIcon
                className="w-4 h-4 lg:w-6 lg:h-6"
                icon={faHeart}
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-center self-end w-14 h-14 lg:w-20 lg:h-20">
          <img
            className="w-full lg:w-fit"
            src={image}
            alt={name[newLang].text}
          />
        </div>
      </div>
    </Link>
  );
};

export default Button;
