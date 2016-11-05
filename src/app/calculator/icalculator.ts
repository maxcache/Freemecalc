export interface ICalculator {
    Results: CalcResult[];
    PaymentPerPeriod : number;
    TotalPayments : number;
    AnnualInterest : number;
    Calculate();
}

export class CalcResult {

    constructor(
        _desc?: string,
        _amountToPay?: number,
        _principal?: number,
        _interest?: number,
        _opening?: number,
        _closing?: number
    ) {
        this.Description = _desc;
        this.AmountToPay = _amountToPay;
        this.Closing = _closing;
        this.Opening = _opening;
        this.Interest = _interest;
        this.Principal = _principal;
    }
    Description: string;
    AmountToPay: number;
    Interest: number;
    Principal: number;
    Opening: number;
    Closing: number;

}