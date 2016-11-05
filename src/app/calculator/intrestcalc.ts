import { ICalculator, CalcResult } from './icalculator';
import { ProfileService } from '../profile/profile.service';

export class IntrestCalc implements ICalculator {


    constructor() {
        this.Results = [];
    }
    public Results: CalcResult[];
    public PaymentPerPeriod: number;
    public TotalPayments: number;
    public AnnualInterest: number;
    private profileService = new ProfileService();
    Calculate() {
        this.Results = [];
        this.PaymentPerPeriod = 0;
        this.TotalPayments = 0;
        this.AnnualInterest = 0;
        this.pmt()
    }


    private pmt() {

        let profile = this.profileService.getProfile();
        let tempCalc: CalcResult;
        //assume years
        this.TotalPayments = profile.TotalTermYears * 12
        let loanAmt = 0;
        let totalP = 0;
        for (var j = 0; j < profile.Interest.length; j++) {

            let intRate = profile.Interest[j];

            this.AnnualInterest = (profile.Interest[j].Amount);
            let i = (profile.Interest[j].Amount / 100.00) / 12;

            if (j == 0) {
                //Assume Annual
                loanAmt = profile.LoanAmount;
                this.PaymentPerPeriod = profile.LoanAmount * (i / (1 - Math.pow((1 + i), -  this.TotalPayments)));
            } else {
                this.TotalPayments = (profile.TotalTermYears * 12) - (profile.Interest[j - 1].RatesTerm * 12);
                this.PaymentPerPeriod = loanAmt * (i / (1 - Math.pow((1 + i), -  this.TotalPayments)));
            }

            for (let x = 0; x < (intRate.RatesTerm * 12); x++) {
                tempCalc = new CalcResult();
                if (x == 0) {
                    tempCalc.Opening = loanAmt;
                } else {
                    tempCalc.Opening = this.Results[totalP - 1].Closing;
                }
                tempCalc.AmountToPay = this.PaymentPerPeriod;
                tempCalc.Interest = (tempCalc.Opening * i);
                tempCalc.Principal = this.PaymentPerPeriod - tempCalc.Interest;
                tempCalc.Description = "PMT  : " + (totalP + 1) + " Int :" + this.AnnualInterest;
                tempCalc.Closing = tempCalc.Opening - tempCalc.Principal;
                this.Results.push(tempCalc);
                loanAmt = tempCalc.Closing;
                totalP++;
            }
        }

        let totalAvailRates = profile.Interest.reduce((a, b) => a + b.RatesTerm, 0);
        console.log(totalAvailRates);

        if ((totalAvailRates * 12) < (profile.TotalTermYears * 12)) {


            let remainingPayments = (profile.TotalTermYears * 12) - (totalAvailRates * 12);
           
            let intRate = profile.Interest[profile.Interest.length - 1];
            this.AnnualInterest = (intRate.Amount);
            let i = (intRate.Amount / 100.00) / 12; 
            let loanAmt = this.Results[this.Results.length - 1].Closing; 
            for (let x = (totalAvailRates * 12); x < (profile.TotalTermYears * 12); x++) { 
                tempCalc = new CalcResult();
                tempCalc.Opening = this.Results[x - 1].Closing;
                tempCalc.AmountToPay = this.PaymentPerPeriod;
                tempCalc.Interest = (tempCalc.Opening * i);
                tempCalc.Principal = this.PaymentPerPeriod - tempCalc.Interest;
                tempCalc.Description = "--PMT  : " + (totalP + 1) + " Int :" + this.AnnualInterest;
                tempCalc.Closing = tempCalc.Opening - tempCalc.Principal;
                this.Results.push(tempCalc);
                loanAmt = tempCalc.Closing;
                totalP++;
            } 
        }














    }
}