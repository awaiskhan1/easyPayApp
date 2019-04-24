import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { AbstractSubscriber } from 'src/app/abstract/abstract-subscriber';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventBusService } from 'src/app/common-service/event-bus.service';



@Component({
	selector: 'calculate-loan-component',
	templateUrl: './calculate-loan-component.html',
	styleUrls: ['./calculate-loan-component.scss']
})

export class CalculateLoanComponentDialog extends  AbstractSubscriber   {

	// ==============================================================================
	//---
	//--- Variables
	//---
	// ==============================================================================
	basicAmount
	basicRate
	basicYear
	price=1;
	inrestRate = `$ 3,400`;
	totalAmount = `$ 98,700`;
	instalment = `$ 7,600`;
	// ==============================================================================
	//
	// Constructor
	//
	// ==============================================================================
	constructor(public dialog: MatDialog,

				eventBusService: EventBusService,
				private dialogRef: MatDialogRef<CalculateLoanComponentDialog>,
				@Inject(MAT_DIALOG_DATA) public data) {

			super(eventBusService);
			

	}
	// ==============================================================================
	//---
	//--- Protected methods
	//---
	// ==============================================================================

	ngOnInit(): void {
		console.log(' @Inject(MAT_DIALOG_DATA) public data: DialogData = ', this.data);
		let [c]= this.data.percent.split(' ');
		this.basicRate =c;
	}

	// ==============================================================================
	//---
	//--- private methods
	//---
	// ==============================================================================
	submit() {
		this.close();
	}
	public calculate() {
		let a = +this.basicRate;
		let b = +this.price;
		let c = +this.basicAmount;
		let d = +this.basicYear;
		console.log(a,b,c);
		let res = (a/b)*c;
		let toAmount = (a*12)*d;
		this.totalAmount = `$ ${toAmount.toFixed(2)}`;
		this.inrestRate = `$ ${res.toFixed(2)}`;
	}
	public close(){
		this.dialogRef.close();
	}

	
}


