import React from 'react';

const Word = ({letter,correctGuesses}) => {
    let guess = ''
    // if letter clicked declare variable containing letter
    // if letter not clicked declare empty string variable
    // pass variable into p tag
    guess = correctGuesses.includes(letter) ? letter : '___'

    
    return (
        <div className='guesses'>
        
        <p className = 'word'>
            {guess}
        </p>

        </div>
    );
};

export default Word;