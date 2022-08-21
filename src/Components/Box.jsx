import React from 'react'

export default function Box(props) {
    return (
    <div className="m-1" style={{ width: props.int+'px', height: props.int+'px', backgroundColor: props.color }}>
        <div className='d-flex px-2' onClick={props.onClick} >x</div>
    </div>)
}

