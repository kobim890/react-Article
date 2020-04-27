import React from 'react';

export function Article(props){
    return(
        <div>
            <h1>{props.title}</h1> <p>{props.content}</p> <img src={props.image} />
        </div>
    )
}