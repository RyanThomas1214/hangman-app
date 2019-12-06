import React from 'react';


const Input = ({handleSubmit}) => {
        return (
            <form onSubmit={handleSubmit}>
              <label> Enter Your Word: 
                <input type='text' name='inputWord'>
                </input>
                <button>Submit!</button>
              </label>
            </form>
        );
};

export default Input;
