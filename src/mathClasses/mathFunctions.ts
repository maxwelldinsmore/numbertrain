function divisionCheck (num1: number, num2: number, answer: number): boolean {
    if (parseInt(answer.toString()) === num1 / num2) {
        return true;
    } else {
        return false;
    }
}

function additionCheck (num1: number, num2: number, answer: number): boolean {
    if (answer === num1 + num2) {
        return true;
    } else {
        return false;
    }
}

function subtractionCheck (num1: number, num2: number, answer: number): boolean {
    if (answer === num1 - num2) {
        return true;
    } else {
        return false;
    }
}

function multiplicationCheck (num1: number, num2: number, answer: number): boolean {
    if (answer === num1 * num2) {
        return true;
    } else {
        return false;
    }
}

export { divisionCheck, additionCheck, subtractionCheck, multiplicationCheck };