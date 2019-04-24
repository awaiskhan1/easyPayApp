import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SubBoardComponent } from './main-panel/sub-board/sub-board.component';
import { PriceActivityComponent } from './common/price-activity/price-activity.component';



import {MatGridListModule,MatCardModule,MatCheckboxModule,MatButtonModule,MatInputModule,MatAutocompleteModule,MatDatepickerModule,
	MatFormFieldModule,MatSelectModule,MatSliderModule,MatSlideToggleModule,MatMenuModule,MatSidenavModule,MatToolbarModule,MatListModule,
	MatStepperModule,MatTabsModule,MatExpansionModule,MatButtonToggleModule,MatChipsModule,MatIconModule,MatProgressSpinnerModule,
	MatProgressBarModule,MatDialogModule,MatRadioModule,MatTooltipModule,MatSnackBarModule,MatTableModule,MatSortModule,MatPaginatorModule} from '@angular/material';
import { ProjectActivityComponent } from './common/project-activity/project-activity.component';
import { BalanceHeaderComponent } from './common/balance-header/balance-header.component';
import { TransactionListComponent } from './common/transaction-list/transaction-list.component';
import { AddProjectComponentDialog } from './dialog/add-project/add-project-component';
import { CalculateLoanComponentDialog } from './dialog/calculate-loan/calculate-loan-component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, } from '@angular/common/http';
import { MainProfileComponent } from './main-panel/main-profile/main-profile.component';
import { MainRippleComponent } from './main-panel/main-ripple/main-ripple.component';
import { LoanBoxComponent } from './common/loan-box/loan-box.component';


// =================================================================================

@NgModule({

	// ==============================================================================
	//
	// Component Declarations
	//
	// ==============================================================================

	declarations: [
		AppComponent,
		MainPanelComponent,
		NavbarComponent,
		SubBoardComponent,
		PriceActivityComponent,
		ProjectActivityComponent,
		BalanceHeaderComponent,
		AddProjectComponentDialog,
		CalculateLoanComponentDialog,
		TransactionListComponent,
		MainProfileComponent,
		MainRippleComponent,
		LoanBoxComponent
	],

	// ==============================================================================
	//
	// Imports
	//
	// ==============================================================================

	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
	



		MatGridListModule,MatCardModule,
		MatCheckboxModule,MatButtonModule,
		MatInputModule,MatAutocompleteModule,
		MatDatepickerModule,MatFormFieldModule,
		MatSelectModule,MatSliderModule,
		MatSlideToggleModule,MatMenuModule,
		MatSidenavModule,MatToolbarModule,
		MatListModule,MatStepperModule,
		MatTabsModule,MatExpansionModule,
		MatButtonToggleModule,MatChipsModule,
		MatIconModule,MatProgressSpinnerModule,
		MatProgressBarModule,MatDialogModule,
		MatTooltipModule,MatSnackBarModule,
		MatTableModule,MatSortModule,MatPaginatorModule,MatRadioModule
	],

	// ==============================================================================
	//
	// Provides Inject
	//
	// ==============================================================================
	providers: [],
	entryComponents: [
		AddProjectComponentDialog,
		CalculateLoanComponentDialog
	],
	bootstrap: [AppComponent]
})
// ==================================================================================
export class AppModule { }
