import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubBoardComponent } from './main-panel/sub-board/sub-board.component';
import { MainProfileComponent } from './main-panel/main-profile/main-profile.component';
import { MainRippleComponent } from './main-panel/main-ripple/main-ripple.component';
// ==============================================================================

const routes: Routes = [
	{ path: '', component: SubBoardComponent, pathMatch: 'full' },
	{ path: 'home', component: SubBoardComponent },
	{ path: 'profile', component: MainProfileComponent },
	{ path: 'ripple', component: MainRippleComponent },
];

// ==============================================================================

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

// ==============================================================================

export class AppRoutingModule { }
