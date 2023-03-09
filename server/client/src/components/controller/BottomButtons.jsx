import { IconButton } from "@mui/material"
import axios from 'axios';
import { useState } from "react";

export const BottomButton = ({icon, label, number, color}) => {
    const [isOn, toggleOn] = useState(false);

    const toggleLight = () => {
        axios.post('http://localhost:3001/v1/led', {
            data: {
                id: number,
                toggle: isOn ? 'off' : 'on'
            }
        });
        toggleOn(!isOn);
    };

    return (
        <div className="mic-container flex">
            <div className="bottom-button-container">
                <IconButton color={isOn ? color : 'primary'} aria-label={label} onClick={toggleLight}>
                    {icon}
                </IconButton> 
            </div>
        </div>
    )
}