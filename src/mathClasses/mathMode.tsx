export default class MathMode {
    num1: number;
    num2: number;
    operationSymbol: string;

    constructor(num1: number, num2: number, operationSymbol: string) {
        this.num1 = num1;
        this.num2 = num2;
        this.operationSymbol = operationSymbol;
    }

    generateNumbers(): void {
        this.num1 = Math.floor(Math.random() * 98 + 1);
        this.num2 = Math.floor(Math.random() * 98 + 1);
    }

    getQuestion(): string {
        return `${this.num1} ${this.operationSymbol} ${this.num2}`;
    }

    checkAnswer(answer: number): boolean {
        throw new Error("Method 'checkAnswer()' must be implemented.");
    }
}