import { Component, OnInit } from '@angular/core';
import { AbstractSubscriber } from 'src/app/abstract/abstract-subscriber';
import { EventBusService } from 'src/app/common-service/event-bus.service';
import { AppEvent } from 'src/app/model/model';
// ==================================================================================
@Component({
    selector: 'app-transaction-list',
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.scss']
})
// ==================================================================================
export class TransactionListComponent extends AbstractSubscriber implements OnInit {
	// ==============================================================================
	//
	// Variables
	//
	// ==============================================================================
	showLessData: Boolean = false;
	// ==============================================================================
	//
	// Constructor
	//
	// ==============================================================================
	constructor(eventBusService: EventBusService) { 
		super(eventBusService)
		super.subscribeToApp(AppEvent.HEADER_BALANCE_PROFILE_TOGGLE, (event) => this.start(event.params));
		
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

	

	public start(e){
		console.log('e value get from to HEADER_BALANCE_PROFILE_TOGGLE = > ', e);
		this.showLessData = !this.showLessData;
	}
}
