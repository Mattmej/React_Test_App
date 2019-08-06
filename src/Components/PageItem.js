import React from 'react';

const pageItem = (props) => {
    return (
        <div>
            {/* <p>This is an item.</p> */}
            <p>{props.item}</p>
        </div>
    )
}

export default pageItem;