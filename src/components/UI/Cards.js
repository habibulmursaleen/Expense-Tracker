import React from 'react';

import '../Expenses.css';

const Cards = (props) => {
    const classes= 'cards ' + props.className; //wide space is important
    return (
        <div className={classes}>{props.children}</div>
    );
};

export default Cards;