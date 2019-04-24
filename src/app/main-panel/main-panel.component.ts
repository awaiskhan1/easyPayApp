import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../common-service/event-bus.service';
import { AppEvent } from '../model/model';
import { AbstractSubscriber } from '../abstract/abstract-subscriber';
// ==============================================================================
@Component({
	selector: 'app-main-panel',
	templateUrl: './main-panel.component.html',
	styleUrls: ['./main-panel.component.scss']
})
// ==============================================================================
export class MainPanelComponent extends AbstractSubscriber  implements OnInit {
	// ==============================================================================
	//
	// Variables
	//
	// ==============================================================================
	public sizeReducer: boolean = false;
	// ==============================================================================
	//
	// Constructor
	//
	// ==============================================================================

	constructor(eventBusService:EventBusService) {
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
		this.sizeReducer = !this.sizeReducer;
		console.log(this.sizeReducer);
	}
}
