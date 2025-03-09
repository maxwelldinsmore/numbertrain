import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BiMath } from "react-icons/bi";
import { CgMathPercent } from "react-icons/cg";
import { TbMathXMinusY } from "react-icons/tb";
import { TbMathXPlusY } from "react-icons/tb";
import MathMode from "../mathClasses/mathMode";
import '../css/ModeSelect.css';

interface ModeSelectProps {
    mathMode: MathMode;
    handleModeSelect: (mode: string) => void;
}

const ModeSelect: React.FC<ModeSelectProps> = ({ mathMode}) => {

    const [selectedMode, setSelectedMode] = useState<string>("");

    const handleModeChange = (mode: string) => {
        setSelectedMode(mode);
        mathMode.operationSymbol = mode;

    };


    return (
        <div className="modeSelectionDiv">
            <Button
                className={`modeButton ${selectedMode === "?" ? "selected" : ""}`}
                onClick={(e) => handleModeChange("?")}
            >
                <BiMath fontSize={25} />
            </Button>
            <Button
                className={`modeButton ${selectedMode === "+" ? "selected" : ""}`}
                onClick={() => handleModeChange("+")}
            >
                <TbMathXPlusY fontSize={25} />
            </Button>
            <Button
                className={`modeButton ${selectedMode === "-" ? "selected" : ""}`}
                onClick={() => handleModeChange("-")}
            >
                <TbMathXMinusY fontSize={25} />
            </Button>
            <Button
                className={`modeButton ${selectedMode === "/" ? "selected" : ""}`}
                onClick={() => handleModeChange("/")}
            >
                <CgMathPercent fontSize={25} />
            </Button>
        </div>
    );
};

export default ModeSelect;