import React, { useState } from 'react';
import styles from '../Style/Checkbox.module.css';

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="toggler-wrapper style-13">
            <input type="checkbox"/>
                <div className="toggler-slider">
                    <div className="toggler-knob"></div>
                </div>

        </label>
    );
};

export default Checkbox;
