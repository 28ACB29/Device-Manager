import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceGroupDetailComponent } from './device-group-detail/device-group-detail.component';
import { DeviceGroupListComponent } from './device-group-list/device-group-list.component';
import { DeviceCreateComponent } from './device-create/device-create.component';
import { DeviceGroupCreateComponent } from './device-group-create/device-group-create.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { DeviceGroupEditComponent } from './device-group-edit/device-group-edit.component';

const routes: Routes =
[
	{ path: '', redirectTo: '/device-list', pathMatch: 'full' },
	{ path: 'device-create', component: DeviceCreateComponent },
	{ path: 'device-detail/:hostname', component: DeviceDetailComponent },
	{ path: 'device-edit/:hostname', component: DeviceEditComponent },
	{ path: 'device-list', component: DeviceListComponent },
	{ path: 'device-group-create', component: DeviceCreateComponent },
	{ path: 'device-group-detail/:groupName', component: DeviceGroupDetailComponent },
	{ path: 'device-group-edit/:groupName', component: DeviceGroupEditComponent },
	{ path: 'device-group-list', component: DeviceGroupListComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	declarations: []
})
export class AppRoutingModule { }
