// Input component to change the app's state 
// into whatever is typed into the input.

import React from 'react';

const stringInput = (props) => {
    return (
        <div>
            {/* When the input changes, runs the function in the "changed" prop. */}
            <input type='text' onChange={props.changed} />
        </div>
    )
};

export default stringInput;