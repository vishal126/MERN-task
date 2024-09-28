import React from 'react'

function Task1({img, text}) {
    return (
        <div className="h-80 m-4 p-4 rounded-sm w-64 shadow-lg">
            <div>
                <img className="w-full" src={img}/>
                <h1 className="text-3xl font-bold text-orange-500 p-4 text-center">{text}</h1>
                <p></p>
            </div>
        </div>
    );
}

export default Task1;