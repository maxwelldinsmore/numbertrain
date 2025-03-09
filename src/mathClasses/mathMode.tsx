import { divisionCheck, additionCheck, subtractionCheck, multiplicationCheck } from "./mathFunctions";

export default class MathMode {
    private _num1: number;
    private _num2: number;
    private _operationSymbol: string;
    private _scalingAmount: number;

    private static operationChecks: { [key: string]: (num1: number, num2: number, answer: number) => boolean } = {
        "+": additionCheck,
        "-": subtractionCheck,
        "*": multiplicationCheck,
        "/": divisionCheck
    };

    constructor(operationSymbol: string) {
        this._num1 = 0;
        this._num2 = 0;
        this.generateNumbers();
        this._operationSymbol = operationSymbol;
        this._scalingAmount = 1;
    }

    
    get num1(): number {
        return this._num1;
    }

    set num1(value: number) {
        this._num1 = value;
    }

    get num2(): number {
        return this._num2;
    }

    set num2(value: number) {
        this._num2 = value;
    }

    get operationSymbol(): string {
        return this._operationSymbol;
    }

    set operationSymbol(value: string) {
        this._operationSymbol = value;
    }

    get scalingAmount(): number {
        return this._scalingAmount;
    }

    set scalingAmount(value: number) {
        this._scalingAmount = value;
    }

    randomizeSymbol(): void {
        const symbols = ["+", "-", "*", "/"];
        this._operationSymbol = symbols[Math.floor(Math.random() * symbols.length)];   
    }

    generateNumbers(): void {
        this._num1 = Math.floor(Math.random() * this._scalingAmount + 1);
        this._num2 = Math.floor(Math.random() * this._scalingAmount + 1);
        if (this._num1 < this._num2) {
            let temp = this._num1;
            this._num1 = this._num2;
            this._num2 = temp;
        }
    }

    getQuestion(): string {
        this._scalingAmount = this._scalingAmount + 2;
        return `${this._num1} ${this._operationSymbol} ${this._num2}`;
    }

    checkAnswer(answer: number): boolean {
        const checkFunction = MathMode.operationChecks[this._operationSymbol];
        if (!checkFunction) {
            throw new Error(`No check function defined for operation '${this._operationSymbol}'`);
        }
        return checkFunction(this._num1, this._num2, answer);
    }
}