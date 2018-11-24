import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { DeviceGroup } from '../device-group';
import { DeviceManagerService } from '../device-manager.service';

@Component({
	selector: 'app-device-group-create',
	templateUrl: './device-group-create.component.html',
	styleUrls: ['./device-group-create.component.css']
})
export class DeviceGroupCreateComponent implements OnInit
{
	title = 'Create Device Group';

	editDeviceGroupForm = this.fb.group({
		groupName: ['', Validators.required],
		description: ['']
	});

	constructor(private dms: DeviceManagerService, private fb: FormBuilder)
	{
		
	}

	ngOnInit()
	{
	}

	onSubmit()
	{
		
	}
}
