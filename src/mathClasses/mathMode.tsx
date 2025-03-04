export default  class MathMode {
    num1: number;
    num2: number;
    operationSymbol: string;
    scalingAmount: number;
    constructor(num1: number, num2: number, operationSymbol: string, scalingAmount: number) {
        this.num1 = num1;
        this.num2 = num2;
        this.operationSymbol = operationSymbol;
        this.scalingAmount = scalingAmount;
    }

    generateNumbers(): void {
        this.num1 = Math.floor(Math.random() * this.scalingAmount + 1);
        this.num2 = Math.floor(Math.random() * this.scalingAmount + 1);
        if (this.num1 < this.num2) {
            let temp = this.num1;
            this.num1 = this.num2;
            this.num2 = temp;
        }
    }

    getQuestion(): string {
        this.scalingAmount = this.scalingAmount + 2;
        return `${this.num1} ${this.operationSymbol} ${this.num2}`;
    }

    checkAnswer(answer: number): boolean {
        throw new Error("Method 'checkAnswer()' must be implemented.");
    }

    

}