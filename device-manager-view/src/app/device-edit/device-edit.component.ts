import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Device } from '../device';
import { DeviceManagerService } from '../device-manager.service';

@Component({
	selector: 'app-device-edit',
	templateUrl: './device-edit.component.html',
	styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit
{
	title = 'Edit Device';

	device: Device;

	editDeviceForm = this.fb.group({
		hostname: ['', Validators.required],
		ipAddress: ['']
	});

	constructor(private dms: DeviceManagerService, private fb: FormBuilder, private route: ActivatedRoute)
	{
		
	}

	ngOnInit()
	{
		const hostname = this.route.snapshot.paramMap.get('hostname');
		this.dms.readDevice(hostname).subscribe(device => this.device = device);
	}

	onSubmit()
	{
		
	}
}
