import { Component, OnInit } from '@angular/core';
import * as ProfileMod from '../profile/profile';
import { ProfileService } from '../profile/profile.service';

@Component({
    providers: [ProfileService],
    selector: 'settings',
    templateUrl: 'settings.html'
})
export class SettingsComponent implements OnInit {

    profile: ProfileMod.Profile;
    loan: ProfileMod.Loan;

    constructor(private profileService: ProfileService) { }
    emptyRate: ProfileMod.Rates;
    timeFrames = ProfileMod.TimeFramesList;
    emptyTerm: ProfileMod.Term;




    ngOnInit() {
        //this.profile = this.profileService.getProfile();//.then(u =>  = u)
        this.loan = this.profileService.getLoan();
        this.resetTerm();
        console.log('Settings loaded!!');

    }


    private addTerm() {
        this.profileService.addTerm(this.emptyTerm);
        this.resetRate();
    }
    private deleteTerm(child: ProfileMod.Term) {
        this.profileService.deleteTerm(child.Id);

    } private resetTerm() {
        this.emptyTerm = new ProfileMod.Term(0, 0, false, 0, 3, 0);
    }















    private addRate() {
        this.profileService.addRate(this.emptyRate);
        this.resetRate();
    }
    private deleteRate(child: ProfileMod.Rates) {
        this.profileService.deleteRate(child.Id);

    } private resetRate() {
        this.emptyRate = new ProfileMod.Rates(0, 0, 1);
    }
    private save() {
        // this.profileService.updateProfile(this.profile);
        this.profileService.updateLoan(this.loan);
    }

}
