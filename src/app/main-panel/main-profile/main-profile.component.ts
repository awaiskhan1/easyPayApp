import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { EventBusService } from 'src/app/common-service/event-bus.service';
import { AbstractSubscriber } from 'src/app/abstract/abstract-subscriber';
import { AppEvent } from 'src/app/model/model';
// ==================================================================================
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
// ==================================================================================
/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
// ==================================================================================
@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss']
})
// ==================================================================================
export class MainProfileComponent extends AbstractSubscriber implements OnInit {
	// ==============================================================================
	//
	// Variables
	//
	// ==============================================================================
	public displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
	public dataSource: MatTableDataSource<UserData>;
	public firstName = "John Smith";
	public professione = "Software Engineer";
	public address ="456, Estern evenue, Couratge area";
	public email = "smith_jhon@gmail.com";
	public phone = "3918024457";
	public detailAddress="Amphitheatre Pkwy";
	public currentUser={};

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	// ==============================================================================
	//
	// Constructor
	//
	// ==============================================================================
	constructor(eventBusService: EventBusService) { 
		super(eventBusService)
	
		// Create 100 users
		const users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));

		// Assign the data to the data source for the table to render
		this.dataSource = new MatTableDataSource(users);
		
		let c = {
			name:'awais',
		};
		// super.emitToApp(new AppEvent(AppEvent.HEADER_BALANCE_PROFILE_TOGGLE,c));
	}
	// ==============================================================================
	//
	// Life Hooks
	//
	// ==============================================================================
	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		let c ={
			firstName:this.firstName,
			professione: this.professione,
			address: this.address,
			phone: this.phone,
			detailAddress: this.detailAddress,
			email:this.email
		};
		for (const key in c) {
			const element = c[key];
			this.currentUser[key] = element;
		}
	}
	// ==============================================================================
	//
	// Custom Method
	//
	// ==============================================================================
	public applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	
		if (this.dataSource.paginator) {
		  this.dataSource.paginator.firstPage();
		}
	}

	/** Builds and returns a new User. */
	public createNewUser(id: number): UserData {
		const name =
			NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
			NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

		return {
			id: id.toString(),
			name: name,
			progress: Math.round(Math.random() * 100).toString(),
			color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
		};
  	}
	public update(){
		let c ={
			firstName:this.firstName,
			professione: this.professione,
			address: this.address,
			phone: this.phone,
			detailAddress: this.detailAddress,
			email:this.email
		};
		// tslint:disable-next-line:forin
		for (const key in c) {
			const element = c[key];
			this.currentUser[key] = element;
		}
		console.log('update ============>', c);
	}
}
