import React from "react";

import './Button.css'

const Button = ({ onChange }) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className='button'>
            <div className='box'>
                <select onChange={handleChange}>
                    <option>
                        За последний месяц
                    </option>
                    <option>
                        За последние 6 месяцев
                    </option>
                    <option>
                        За последний год
                    </option>
                </select>
            </div>
        </div>
    )
}

export default Button;