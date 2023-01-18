import React from 'react';
import styles from './style.module.css'
import {TextField} from "@mui/material";

const Input = (props) => {
    const {
        value,
        onChange,
        type = 'text'
    } = props
    return (
        <div>
                <TextField
                    fullWidth label=""
                    id="fullWidth"
                    className={styles.Input_style}
                    value={value}
                    onChange={onChange}
                    type={type}
                />
        </div>
    );
};

export default Input;