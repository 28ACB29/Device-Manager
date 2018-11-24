import { Component, OnInit } from '@angular/core';

import { DeviceGroup } from '../device-group';
import { DeviceManagerService } from '../device-manager.service';

@Component({
  selector: 'app-device-group-list',
  templateUrl: './device-group-list.component.html',
  styleUrls: ['./device-group-list.component.css']
})
export class DeviceGroupListComponent implements OnInit
{
	title = 'Device List';

	deviceGroups: DeviceGroup[];

	constructor(private dms: DeviceManagerService)
	{
		
	}

	ngOnInit()
	{
		this.dms.getAllDeviceGroups().subscribe(deviceGroups => this.deviceGroups = deviceGroups);
	}

}
