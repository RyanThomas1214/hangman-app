import React from 'react';

const Image = ({image,isVisible}) => {
    return (
        <div>
            {isVisible && <img src={image} alt='Sad Bop'/>}
        </div>
       
    );
};

export default Image;