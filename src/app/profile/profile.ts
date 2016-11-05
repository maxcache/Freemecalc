export class Loan {
    public LoanAmount: number;
    public LoanStartDate: Date;
    public TotalTermYears: number;
    public Terms: Term[]

}

export class Term {


    constructor(_RevolvingCredit: number,
        _TermLength: number,
        _PayInterestOnly: boolean,
        _MainLoanInterest: number,
        _PaymentFrequency: TimeFrame,
        _RevolvingCreditInterest?: number
    ) {
        this.Id = Date.now().toString();
        this.RevolvingCredit = _RevolvingCredit;
        this.TermLength = _TermLength;
        this.PayInterestOnly = _PayInterestOnly;
        this.MainLoanInterest = _MainLoanInterest;
        this.RevolvingCreditInterest = _RevolvingCreditInterest;
        this.PaymentFrequency = _PaymentFrequency;
    }



    public Id: string;
    public RevolvingCredit: number;
    //in years
    public TermLength: number;
    public PayInterestOnly: boolean;
    public MainLoanInterest: number;
    public RevolvingCreditInterest: number;
    public PaymentFrequency: TimeFrame;
}

export enum TimeFrame {
    Yearly = 1,
    Monthly = 2,
    Fortnightly = 3
}

export const TimeFramesList = [
    { display: 'Yearly', id: 1 },
    { display: 'Monthly', id: 2 },
    { display: 'Fortnightly', id: 3 }
];









export class Profile {
    public LoanAmount: number;
    public LoanStartDate: Date;
    public TotalTermYears: number;
    public IncludePrincipal: boolean;
    public PaymentFrequency: TimeFrame;
    public Interest: Rates[]

}



export class Rates {
    constructor(_amount: number, _ratesTerm: number, _timeframe: TimeFrame) {
        this.Id = Date.now().toString();
        this.Amount = _amount;
        this.Frequency = _timeframe;
        this.RatesTerm = _ratesTerm;
    }
    public Id: string;
    public Amount: number;
    public RatesTerm: number;
    public Frequency: TimeFrame;
}

