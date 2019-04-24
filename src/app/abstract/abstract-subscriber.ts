//=============================================================================

import {OnDestroy, OnInit, ErrorHandler} from '@angular/core';




import { appendNgContent } from '@angular/core/src/view/ng_content';
import { Subscription } from 'rxjs';
import { EventBusService } from '../common-service/event-bus.service';
import { EventHandler, AppEvent } from '../model/model';

//=============================================================================

export abstract class AbstractSubscriber implements OnDestroy, OnInit {	
	//-------------------------------------------------------------------------
	//---
	//--- Variables
	//---
	//-------------------------------------------------------------------------
	private subscriptions: Subscription[] = [];

	//-------------------------------------------------------------------------
	//---
	//--- Constructor
	//---
	//-------------------------------------------------------------------------

	constructor(protected   eventBusService : EventBusService) {
		console.log("constructing--->" + this.constructor.name);
	}

	//-------------------------------------------------------------------------
	//---
	//--- Lifecycle methods
	//---
	//-------------------------------------------------------------------------

	public ngOnDestroy() {
		this.subscriptions.forEach( (s : Subscription) => s.unsubscribe());
		this.subscriptions = [];
		console.log("destroyed--->" + this.constructor.name);
	}

	public ngOnInit() {
	}


	//-------------------------------------------------------------------------
	//---
	//--- API methods
	//---
	//-------------------------------------------------------------------------

	protected subscribeToApp(eventCode : string, handler : EventHandler) : Subscription {

		let s : Subscription = this.eventBusService.subscribeToApp(eventCode, handler);
		this.subscriptions.push(s);
		return s;
	}

	//-------------------------------------------------------------------------

	protected emitToApp(event : AppEvent) : void {
		if(this['setState']){
			this['setState']();
		}
		this.eventBusService.emitToApp(event);
	}

	//-------------------------------------------------------------------------

	protected subscribeToError(handler : ErrorHandler) : Subscription {

		let subscription : Subscription = this.eventBusService.subscribeToError(handler);
		this.subscriptions.push(subscription);
		return subscription;
	}

	//-------------------------------------------------------------------------

	protected emitToError(event : ErrorEvent) : void {
		this.eventBusService.emitToError(event);
	}
}

//=============================================================================
