import React, { Component } from "react";
import Letter from "./Letter";
import Word from "./Word";
import Image from './Image'
import Input from './Input'

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
    word: "",
    endGame: false,
    result: null,
    count: 9,
    wholeBop: [
      {img:'/images/9.jpg', isVisible: false},
      {img:'/images/8.jpg', isVisible: false},
      {img:'/images/7.jpg', isVisible: false},
      {img:'/images/6.jpg', isVisible: false},
      {img:'/images/5.jpg', isVisible: false},
      {img:'/images/4.jpg', isVisible: false},
      {img:'/images/3.jpg', isVisible: false},
      {img:'/images/2.jpg', isVisible: false},
      {img:'/images/1.jpg', isVisible: false}
    ]
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

  handleSubmit = (event) => {
    event.preventDefault()
    const {value} = event.target[0]
    this.setState(currentState => {
        return {word: value}
    }, () => {
      console.log(this.state)
    })
   
}

  updateLetter = index => {
    this.setState(currentState => {
      const newLetters = [...currentState.letters];
      newLetters[index].isUsed = true;
      return { letters: newLetters };
    });
  };

  incorrectGuess = () => {
    this.setState(currentState => {
      const newBop = [...currentState.wholeBop]
      newBop[currentState.count-1].isVisible = true
      return {
        wholeBop: newBop,
        count: currentState.count -1}
    }, () => {
      console.log(this.state)
      if(this.state.count === 0) {
        this.setState(currentState => {
          return {endGame: true, result: 'Lost'}
        })
      }
    })
  }

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
    } else {
      this.incorrectGuess()
    }
    
  };

  render() {
    const {word, correctGuesses, letters, endGame} = this.state

    if (this.state.word.length === 0) {
      return (
        <Input handleSubmit={this.handleSubmit}/>
      )
    }
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
          <h2>Remaining Guesses:{this.state.count}</h2>
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
       <div className='image-Grid'>
          {this.state.wholeBop.map(smallBop => {
            return <Image image={smallBop.img} isVisible={smallBop.isVisible} key={smallBop.img}/>
          })}
       </div>
        </main>
       
      );
    }
  }
}

export default Board;
