import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AddProjectComponentDialog} from '../../dialog/add-project/add-project-component'
import { AbstractSubscriber } from 'src/app/abstract/abstract-subscriber';
import { EventBusService } from 'src/app/common-service/event-bus.service';
import { AppEvent } from 'src/app/model/model';
// ==================================================================================
@Component({
	selector: 'app-project-activity',
	templateUrl: './project-activity.component.html',
	styleUrls: ['./project-activity.component.scss']
})
// ==================================================================================
export class ProjectActivityComponent extends AbstractSubscriber  implements OnInit {
	// ==============================================================================
	//
	// Variables
	//
	// ==============================================================================
	paymentType = {
		bankPay:'fa-atlassian',
		amazonPay: 'fa-amazon-pay',
		pocketPay: 'fa-paypal',
		ebayPay:'fa-google-wallet',
	};
	public projects = [
		{
			name: 'AnyPay',
			discription: 'Lorem ipsum table',
			status: 'active',
			payType : 'bankPay',
			amount:'5000',
			bacnkbranch: 'lorem ipsum',
			transiction: 'lorem ipsum'
		},
		{
			name: 'Amazon Pay',
			discription: 'Pay ipsum decoder',
			status: 'active',
			payType : 'amazonPay',
			amount:'1000',
			bacnkbranch: 'lorem ipsum',
			transiction: 'lorem ipsum'
		},
		{
			name: 'PayPal',
			discription: 'Lorem ipsum table',
			status: 'error',
			payType : 'pocketPay',
			amount:'2000',
			bacnkbranch: 'lorem ipsum',
			transiction: 'lorem ipsum'
		},
		{
			name: 'Google pay',
			discription: 'Pay ipsum google',
			status: 'active',
			payType : 'ebayPay',
			amount:'5000',
			bacnkbranch: 'lorem ipsum',
			transiction: 'lorem ipsum'
		},
		{
			name: 'Amazon Pay',
			discription: 'Pay ipsum decoder',
			status: 'active',
			payType : 'amazonPay',
			amount:'7000',
			bacnkbranch: 'lorem ipsum',
			transiction: 'lorem ipsum'
		}
	];
	// ==============================================================================
	//
	// Constructor
	//
	// ==============================================================================
	constructor(eventBusService: EventBusService,public dialog: MatDialog) { 
		super(eventBusService)
		super.subscribeToApp(AppEvent.ADD_PROJECT_DIALOG_ClOSE, (event) => this.projectAdd(event.params));
	}

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

	public projectAdd(param){
		console.log(param);
		this.projects.push(param);
	}

	public addProjectDailog() {
		this.dialog.open(AddProjectComponentDialog, {
			data: {
				animal: 'panda'
			}
		});
	  }

}
