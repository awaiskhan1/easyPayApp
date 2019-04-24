import {Observable} from "rxjs";


//=============================================================================

export class AppEvent<T = any> {
	//-------------------------------------------------------------------------

	constructor(public code: string, public params?: T, public gridId?: string) {
	}

	//-------------------------------------------------------------------------

	
	static HEADER_BALANCE_PROFILE_TOGGLE : string = "header.balance.profile.toggle";
	static ADD_PROJECT_DIALOG_ClOSE 	 : string = "add.project.dialog.close";
}

//=============================================================================

export interface EventHandler {
	(event: AppEvent): void;
}

//=============================================================================
//===
//=== Errors
//===
//=============================================================================

export class ErrorEvent {
	code: string;
	error: string;
}

//=============================================================================

export interface ErrorHandler {
	(event: ErrorEvent): void;
}