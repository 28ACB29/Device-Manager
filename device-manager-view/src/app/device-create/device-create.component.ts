import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Device } from '../device';
import { DeviceManagerService } from '../device-manager.service';

@Component({
	selector: 'app-device-create',
	templateUrl: './device-create.component.html',
	styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit
{
	title = 'Create Device';

	device: Device;

	createDeviceForm = this.fb.group({
		hostname: ['', Validators.required],
		ipAddress: ['']
	});

	constructor(private dms: DeviceManagerService, private fb: FormBuilder)
	{
		
	}

	ngOnInit()
	{
	}

	onSubmit()
	{
		this.device = Object.assign({}, this.createDeviceForm.value);
		this.dms.createDevice(this.device);
	}

}
