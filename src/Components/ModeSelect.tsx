import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BiMath } from "react-icons/bi";
import { CgMathPercent } from "react-icons/cg";
import { TbMathXMinusY } from "react-icons/tb";
import { TbMathXPlusY } from "react-icons/tb";

import './ModeSelect.css';

const ModeSelect = () => {
    const [selectedMode, setSelectedMode] = useState<string>("");

    const handleModeSelect = (mode: string) => {
        setSelectedMode(mode);
    };

    return (
        <div className="modeSelectionDiv">
            <Button
                className={`modeButton ${selectedMode === "addition" ? "selected" : ""}`}
                onClick={() => handleModeSelect("addition")}
            >
                <BiMath fontSize={25} />
            </Button>
            <Button
                className={`modeButton ${selectedMode === "multiplication" ? "selected" : ""}`}
                onClick={() => handleModeSelect("multiplication")}
            >
                <TbMathXPlusY fontSize={25} />
            </Button>
            <Button
                className={`modeButton ${selectedMode === "subtraction" ? "selected" : ""}`}
                onClick={() => handleModeSelect("subtraction")}
            >
                <TbMathXMinusY fontSize={25} />
            </Button>
            <Button
                className={`modeButton ${selectedMode === "percentage" ? "selected" : ""}`}
                onClick={() => handleModeSelect("percentage")}
            >
                <CgMathPercent fontSize={25} />
            </Button>
        </div>
    );
};

export default ModeSelect;