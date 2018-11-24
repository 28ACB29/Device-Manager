import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DeviceGroup } from '../device-group';
import { DeviceManagerService } from '../device-manager.service';

@Component({
	selector: 'app-device-group-edit',
	templateUrl: './device-group-edit.component.html',
	styleUrls: ['./device-group-edit.component.css']
})
export class DeviceGroupEditComponent implements OnInit
{
	title = 'Edit Device Group';

	deviceGroup: DeviceGroup;

	editDeviceGroupForm = this.fb.group({
		groupName: ['', Validators.required],
		description: ['']
	});

	constructor(private dms: DeviceManagerService, private fb: FormBuilder, private route: ActivatedRoute)
	{
		
	}

	ngOnInit()
	{
		const groupName = this.route.snapshot.paramMap.get('groupName');
		this.dms.readDeviceGroup(groupName).subscribe(deviceGroup => this.deviceGroup = deviceGroup);
	}

	onSubmit()
	{
		
	}
}
