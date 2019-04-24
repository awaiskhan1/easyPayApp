import { Injectable, EventEmitter, ErrorHandler } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppEvent, EventHandler } from '../model/model';
// ==================================================================================

@Injectable({
  providedIn: 'root'
})

// ==================================================================================
export class EventBusService {

  	// ==============================================================================
	//
	// Variables
	//
	// ==============================================================================
	private eventEmitterMap : Map<string, EventEmitter<AppEvent>> = new Map();
	private errorEvents     : EventEmitter<ErrorEvent> = new EventEmitter();
	public eventFired;

	// ==============================================================================
	//
	// Constructor
	//
	// ==============================================================================
	  constructor() { }
	  

		//-------------------------------------------------------------------------
	//---
	//--- API methods
	//---
	//-------------------------------------------------------------------------

	public subscribeToApp(eventCode : string, handler : EventHandler) : Subscription {

		let emitter : EventEmitter<AppEvent> = this.eventEmitterMap.get(eventCode);

		if (emitter == null) {
			emitter = new EventEmitter();
			this.eventEmitterMap.set(eventCode, emitter);
		}

		return emitter.subscribe(handler, null, null);
	}

	//-------------------------------------------------------------------------

	public emitToApp(event : AppEvent) : void {
		this.eventFired = null;

		let emitter = this.eventEmitterMap.get(event.code);

		if (emitter != null) {
			console.log("Emitting event : "+ JSON.stringify(event));
			emitter.emit(event);
			this.eventFired = event;
		}
		else {
			console.log("WARNING : Emitting an event without any handler : "+ JSON.stringify(event));
			this.eventFired = event;
		}

	}

	//-------------------------------------------------------------------------

	public subscribeToError(handler : ErrorHandler) : Subscription {
		return this.errorEvents.subscribe(handler, null, null);
	}

	//-------------------------------------------------------------------------

	public emitToError(event : ErrorEvent) : void {
		console.log("Emitting error event : "+ JSON.stringify(event));
		this.errorEvents.emit(event);
	}
}
