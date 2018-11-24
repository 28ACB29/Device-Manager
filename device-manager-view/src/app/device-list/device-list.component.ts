import { Component, OnInit } from '@angular/core';

import { Device } from '../device';
import { DeviceManagerService } from '../device-manager.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit
{
	title = 'Device List';

	devices: Device[];

	constructor(private dms: DeviceManagerService)
	{
		
	}

	ngOnInit()
	{
		this.dms.getAllDevices().subscribe(devices => this.devices = devices);
	}

}
