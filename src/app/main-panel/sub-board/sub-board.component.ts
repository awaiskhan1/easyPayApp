import { Component, OnInit } from '@angular/core';
import { AbstractSubscriber } from 'src/app/abstract/abstract-subscriber';
import { EventBusService } from 'src/app/common-service/event-bus.service';
import { AppEvent } from 'src/app/model/model';
// ==================================================================================
@Component({
	selector: 'app-sub-board',
	templateUrl: './sub-board.component.html',
	styleUrls: ['./sub-board.component.scss']
})
// ==================================================================================
export class SubBoardComponent extends AbstractSubscriber implements OnInit {
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
