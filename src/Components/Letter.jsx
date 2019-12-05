import React from "react";

const Letter = ({ letter, index, updateLetter, checkWord }) => {
  return (
    <button
      className="letter"
      disabled={letter.isUsed}
      onClick={event => {
        updateLetter(index);
        checkWord(letter.value);
      }}
    >
      {letter.value}
    </button>
  );
};

export default Letter;
