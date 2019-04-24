import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-ripple',
  templateUrl: './main-ripple.component.html',
  styleUrls: ['./main-ripple.component.scss']
})
export class MainRippleComponent implements OnInit {
	// ==============================================================================
	//
	// Variables
	//
	// ==============================================================================
	public sizeReducer: boolean = false;
	public services = [
		{
			icon: `fa-house-damage`,
			percent : `9.35 %`,
			title :`Personal Loan`,
			description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`
		},
		{
			icon: `fa-graduation-cap`,
			percent : `3.95 %`,
			title :`Education Loan`,
			description: `Printing and typesetting industry simply dummy text of the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`
		},
		{
			icon: `fa-car`,
			percent : `12.75 %`,
			title :`Car Loan`,
			description: `Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`
		},
		{
			icon: `fa-first-aid`,
			percent : `7.45 %`,
			title :`Medical Loan`,
			description: `Printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`
		},
		{
			icon: `fa-briefcase`,
			percent : `17.45 %`,
			title :`Business Loan`,
			description: `Printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`
		},
		{
			icon: `fa-plane-departure`,
			percent : `11.05 %`,
			title :`Travel Loan`,
			description: `Printing and typesetting industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen`
		},
	]
	// ==============================================================================
	//
	// Constructor
	//
	// ==============================================================================

  	constructor() { }
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

}
