import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeviceCreateComponent } from './device-create/device-create.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceGroupCreateComponent } from './device-group-create/device-group-create.component';
import { DeviceGroupDetailComponent } from './device-group-detail/device-group-detail.component';
import { DeviceGroupEditComponent } from './device-group-edit/device-group-edit.component';
import { DeviceGroupListComponent } from './device-group-list/device-group-list.component';
import { DeviceManagerService } from './device-manager.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
	declarations:
	[
		AppComponent,
		DeviceCreateComponent,
		DeviceDetailComponent,
		DeviceEditComponent,
		DeviceListComponent,
		DeviceGroupCreateComponent,
		DeviceGroupDetailComponent,
		DeviceGroupEditComponent,
		DeviceGroupListComponent
	],
	imports:
	[
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [DeviceManagerService],
	bootstrap: [AppComponent]
})
export class AppModule { }
