import React from 'react'


export const Button = (props) => {
    return (
        <>
            <button className={props.btnClass}>{props.btnText}</button>
        </>
    )
}

