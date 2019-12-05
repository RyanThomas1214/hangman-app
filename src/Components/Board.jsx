import React, { Component } from "react";
import Letter from "./Letter";

class Board extends Component {
  state = {
    letters: [
      { value: "a", isUsed: false },
      { value: "b", isUsed: false },
      { value: "c", isUsed: false },
      { value: "d", isUsed: false },
      { value: "e", isUsed: false },
      { value: "f", isUsed: false },
      { value: "g", isUsed: false },
      { value: "h", isUsed: false },
      { value: "i", isUsed: false },
      { value: "j", isUsed: false },
      { value: "k", isUsed: false },
      { value: "l", isUsed: false },
      { value: "m", isUsed: false },
      { value: "n", isUsed: false },
      { value: "o", isUsed: false },
      { value: "p", isUsed: false },
      { value: "q", isUsed: false },
      { value: "r", isUsed: false },
      { value: "s", isUsed: false },
      { value: "t", isUsed: false },
      { value: "u", isUsed: false },
      { value: "v", isUsed: false },
      { value: "w", isUsed: false },
      { value: "x", isUsed: false },
      { value: "y", isUsed: false },
      { value: "z", isUsed: false }
    ],
    word: "jazz"
  };

  renderLetter(num) {
    for (let i = 0; i < num; i++) {
      Letter(this.state.letters[i]);
    }
  }

  updateLetter = index => {
    this.setState(currentState => {
      const newLetters = [...currentState.letters];
      newLetters[index].isUsed = true;
      return { letters: newLetters };
    });
  };

  checkWord = letter => {
    const letterPattern = new RegExp(letter, "gi");
    console.log(this.state.word.match(letterPattern));
  };

  render() {
    return (
      <div>
        {this.state.letters.map((letter, index) => (
          <Letter
            letter={letter}
            index={index}
            key={letter.value}
            updateLetter={this.updateLetter}
            checkWord={this.checkWord}
          />
        ))}
      </div>
    );
  }
}

export default Board;
