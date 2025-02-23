import React from "react";
import { Button } from "react-bootstrap";
import './ModeSelect.css';
const ModeSelect = () => {
    return (
        <div className="modeSelectionDiv">
        <Button className="modeButton">
            Addition
        </Button>

        <Button className="modeButton">
            Subtraction   
        </Button>
        <Button className="modeButton">
            Multiplication  
        </Button>
        </div>
    );
};

export default ModeSelect;