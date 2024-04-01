import React, { useContext } from "react";
import { createContext } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const [anmationIndex, setAnimationIndex] = React.useState(0);
  const [animations, setAnimations] = React.useState([]);

  return (
    <CharacterAnimationsContext.Provider
      value={{
        anmationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
      }}
    >
      {props.children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};
