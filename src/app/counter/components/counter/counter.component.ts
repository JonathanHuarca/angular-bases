import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h1>Hola Counter</h1>
    <p>
     Counter: {{counter}}
    </p>
    <button (click)="increaseBy(counter)">+1</button>
    <button (click)="diminishedBy(counter)">-1</button>
    <button (click)="reset()">reset</button>
    `
})

export class CounterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    public counter: number = 10;

    increaseBy(value:number):void{
        this.counter +=1;
    }

    diminishedBy(value:number):void{
        this.counter -=1;
    }

    reset():void{
        this.counter = 10;
  }
}