import { Component, OnInit, Input } from '@angular/core';
import {CalculateLoanComponentDialog} from '../../dialog/calculate-loan/calculate-loan-component';
import { MatDialog } from '@angular/material';
// ==================================================================================
@Component({
  selector: 'app-loan-box',
  templateUrl: './loan-box.component.html',
  styleUrls: ['./loan-box.component.scss']
})
// ==================================================================================
export class LoanBoxComponent implements OnInit {
	// ==============================================================================
	//
	// Variables
	//
	// ==============================================================================
	showLessData: Boolean = false;
	@Input() data;
	
	// ==============================================================================
	//
	// Constructor
	//
	// ==============================================================================
  	constructor(public dialog: MatDialog) { }
	// ==============================================================================
	//
	// Life Hooks
	//
	// ==============================================================================
	ngOnInit() {
	}
	
	// ==============================================================================
	//
	// Custom Method
	//
	// ==============================================================================
	addCalculationDailog(){
		this.dialog.open(CalculateLoanComponentDialog, {
			data: this. data
		});
	}
}
