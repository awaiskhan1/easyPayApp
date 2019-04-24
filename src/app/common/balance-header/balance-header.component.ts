import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/common-service/event-bus.service';
import { AbstractSubscriber } from 'src/app/abstract/abstract-subscriber';
import { AppEvent } from 'src/app/model/model';
// ==================================================================================
@Component({
	selector: 'app-balance-header',
	templateUrl: './balance-header.component.html',
	styleUrls: ['./balance-header.component.scss']
})
// ==================================================================================
export class BalanceHeaderComponent extends AbstractSubscriber  implements OnInit {
	// ==============================================================================
	//
	// Variables
	//
	// ==============================================================================
	showLessData: Boolean =false;

	// ==============================================================================
	//
	// Constructor
	//
	// ==============================================================================
  	constructor(eventBusService: EventBusService) { 
		super(eventBusService);
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

	public collapse(){
		// let appEvent = new AppEvent(AppEvent.REQUEST_EDIT,);
		let c = {
			name:'awais',
		};
		super.emitToApp(new AppEvent(AppEvent.HEADER_BALANCE_PROFILE_TOGGLE,c));
		this.showLessData = !this.showLessData;
	}
}
