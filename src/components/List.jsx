import React from 'react';

import "../App.css";

const List = ({ list }) => {
    return (
        <div className="article">
            <div className="article-heading">
                <h1 className="heading"> {list.header} </h1>
            </div>
            <div className="article-heading">
                <h3 className="author">{list.author}</h3>
            </div>
            <div className="article-description">
                <p className="description"> {list.description}</p>
            </div>
            <div className="button-div">
                <button className="button"> I am a button </button>
            </div>
        </div>
    );
};

export default List;