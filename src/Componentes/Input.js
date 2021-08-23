import React from 'react'


function Input({ value, onChange}) {
    function handLeChange (event) {
        onChange (event.target.value);
    }

    return (
        <div className="Api">
            <input type="search" value ={value}
             onChange ={onChange}
             />

        </div>
    )
};

export default Input

