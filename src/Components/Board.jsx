import React, { Component } from "react";
import Letter from "./Letter";
import Word from "./Word"

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
    correctGuesses: [],
    word: "jazz",
    endGame: false,
    result: null
  };

  renderLetter(num) {
    for (let i = 0; i < num; i++) {
      Letter(this.state.letters[i]);
    }
  }

  renderWord(num) {
    for (let i = 0; i < num; i++) {
      Word();
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
    if(this.state.word.match(letterPattern)) {
      this.setState(currentState => {
        return {correctGuesses:[...currentState.correctGuesses, ...this.state.word.match(letterPattern)]}
      }, () => {
        if(this.state.correctGuesses.length === this.state.word.length) {
          this.setState(currentState => {
            return {endGame: true, result: 'Won'}
          })
        }
      })
    }
    
  };

  render() {
    const {word, correctGuesses, letters, endGame} = this.state
    if(endGame) {
      return (
        <div>
          <h1>You Have {this.state.result}</h1>
          <img src='https://www.thesun.co.uk/wp-content/uploads/2019/03/NINTCHDBPICT000476179320.jpg' alt='Bopper The Whopper'/>
        </div>
      )
    } else {
      return (
        <main>
          <div className='word'>
          {word.split('').map((letter,i) => (
            <Word
            correctGuesses={correctGuesses}
            letter={letter}
            key={`letter_${i}`}
            />
          )
          )}
          </div>
        <div>
          {letters.map((letter, index) => (
            <Letter
              letter={letter}
              index={index}
              key={letter.value}
              updateLetter={this.updateLetter}
              checkWord={this.checkWord}
            />
          ))}
        </div>
        </main>
       
      );
    }
  }
}

export default Board;
