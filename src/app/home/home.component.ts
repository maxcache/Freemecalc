import { Component, OnInit } from '@angular/core';
import { ICalculator } from '../calculator/icalculator';
import { IntrestCalc } from '../calculator/intrestcalc';

@Component({
    selector: 'home',
    styleUrls: ['home.css'],
    templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {
    calculators = [];
    public FinalResult: number;
    ngOnInit() {
        this.FinalResult = 0;
        this.calculators.push(new IntrestCalc());
        this.calculate();
        console.log('Home loaded!!');
    }

    calculate() {

        this.FinalResult = 0;

        this.calculators.forEach(element => {
            let e1 = (element as ICalculator);
            e1.Calculate();
        });


    }
}
