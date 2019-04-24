import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractSubscriber } from 'src/app/abstract/abstract-subscriber';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EventBusService } from 'src/app/common-service/event-bus.service';
import { AppEvent } from 'src/app/model/model';



@Component({
	selector: 'add-project-component',
	templateUrl: './add-project-component.html',
	styleUrls: ['./add-project-component.scss']
})

export class AddProjectComponentDialog extends  AbstractSubscriber   {

	// ==============================================================================
	//---
	//--- Variables
	//---
	// ==============================================================================
	public status = null;
	public projectName = null;
	public projectDiscription = null;
	public projectAmount = null;
	public projectTransiction = null;
	public projectBankbranch = null;
	public payType = null;
	// ==============================================================================
	//
	// Constructor
	//
	// ==============================================================================
	constructor(public dialog: MatDialog,
				eventBusService: EventBusService,
				private dialogRef: MatDialogRef<AddProjectComponentDialog>) {

			super(eventBusService);
			

	}
	// ==============================================================================
	//---
	//--- Protected methods
	//---
	// ==============================================================================

	ngOnInit(): void {
		
	}

	// ==============================================================================
	//---
	//--- private methods
	//---
	// ==============================================================================
	submit() {
		console.log(this.status);
		let c = new addProject();
		c.name = (this.projectName) ?this.projectName : 'Easy Pay';
		c.discription =  (this.projectDiscription)? this.projectDiscription : 'Lorem ipsum table easy pay';
		c.status = (this.status) ? this.status : 'active';
		c.amount = (this.projectAmount)? this.projectAmount : '3000';
		c.transiction = (this.projectTransiction)? this.projectTransiction: 'lorem ipsum';
		c.bacnkbranch = (this.projectBankbranch)? this.projectBankbranch:'Mobile easy pay';
		c.payType =  (this.payType)? this.payType: 'bankPay';

		
		super.emitToApp(new AppEvent(AppEvent.ADD_PROJECT_DIALOG_ClOSE,c));
		this.close();
	}
	clear() {
		this.status = null;
		this.projectName = null;
		this.projectDiscription = null;
		this.projectAmount = null;
		this.projectTransiction = null;
		this.projectBankbranch = null;
		this.payType = null;

	}
	public close(){
		this.dialogRef.close();
	}
}

export class addProject {
	name : String = '';
	discription : String ='';
	status : String ='';
	amount : String ='';
	transiction : String ='';
	bacnkbranch : String ='';
	payType : String ='';
}

