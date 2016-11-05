import { Injectable } from '@angular/core';
import * as ProfileMod from '../profile/profile';

@Injectable()
export class ProfileService {
    constructor() { }
    loan = new ProfileMod.Loan();

    getLoan(): ProfileMod.Loan {
        var tempstore = localStorage.getItem("loan");
        if (tempstore == "" || tempstore == undefined) {
            this.loan.LoanAmount = 500000;
            this.loan.LoanStartDate = new Date(2017, 1, 1, 0, 0, 0, 0);
            this.loan.TotalTermYears = 30
            this.loan.Terms = [];
        } else {
            this.loan = JSON.parse(tempstore);
        }
        return this.loan;
    }
    updateLoan(_loan: ProfileMod.Loan) {
        this.loan = _loan;
        this.saveLoan()
    }
    saveLoan() {
        localStorage.setItem("loan", JSON.stringify(this.loan));
    }

    addTerm(_child: ProfileMod.Term) {
        this.loan.Terms.push(_child)
        this.saveLoan()
    }

    deleteTerm(_id: string) {
        var item = this.loan.Terms.findIndex(u => u.Id == _id)
        if (item > -1) {
            this.loan.Terms.splice(item, 1);
            this.saveLoan();
            console.log("Deleted term");
        }
    }










    profile = new ProfileMod.Profile();
    getProfile(): ProfileMod.Profile {

        var tempstore = localStorage.getItem("profile");
        if (tempstore == "" || tempstore == undefined) {
            this.profile.IncludePrincipal = false;
            this.profile.Interest = [];
            this.profile.LoanAmount = 220000;
            this.profile.LoanStartDate = new Date(2016, 1, 1);
            this.profile.PaymentFrequency = 3;
            this.profile.TotalTermYears = 30
        } else {
            this.profile = JSON.parse(tempstore);
        }
        return this.profile;
    }

    addRate(_child: ProfileMod.Rates) {
        this.profile.Interest.push(_child)
        this.saveProfile()
    }


    updateProfile(_profile: ProfileMod.Profile) {

        this.profile = _profile;
        this.saveProfile()
    }


    deleteRate(_id: string) {
        var item = this.profile.Interest.findIndex(u => u.Id == _id)
        if (item > -1) {
            this.profile.Interest.splice(item, 1);
            this.saveProfile();
            console.log("Deleted Interest");
        }
    }

    saveProfile() {
        localStorage.setItem("profile", JSON.stringify(this.profile));
    }

}
