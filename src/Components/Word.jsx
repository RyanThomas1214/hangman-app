import React from 'react';

const Word = ({letter,correctGuesses}) => {
    let guess = ''
    // if letter clicked declare variable containing letter
    // if letter not clicked declare empty string variable
    // pass variable into p tag
    if(correctGuesses.includes(letter)) guess = letter
    return (
        <div>
        <p>{guess}</p>
        <p className = 'word'>
            ___
        </p>

        </div>
    );
};

export default Word;