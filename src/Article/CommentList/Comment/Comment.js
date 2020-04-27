import React from 'react';

export function Comment (props){
    return(
        <div>
            {props.author} {props.date} <p>{props.content}</p>
        </div>
    )
}
