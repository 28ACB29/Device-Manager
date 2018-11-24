import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Device } from './device';
import { DeviceGroup } from './device-group';

const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({providedIn: 'root'})
export class DeviceManagerService
{
	private baseUrl = 'localhost:8080';	// URL to web api
	private deviceUrl = this.baseUrl + '/device';	// URL to device
	private deviceGroupUrl = this.baseUrl + '/device-group';	// URL to device group

	constructor(private http: HttpClient)
	{
		
	}

	getAllDevices(): Observable<Device[]>
	{
		return this.http.get<Device[]>(this.deviceUrl);
	}

	createDevice(device: Device): Observable<Device>
	{
		return this.http.post<Device>(this.deviceUrl, device, httpOptions);
	}

	readDevice(hostname: string): Observable<Device>
	{
		const fullUrl = `${this.deviceUrl}/${hostname}`;
		return this.http.get<Device>(fullUrl);
	}

	updateDevice(hostname: string, device: Device): Observable<any>
	{
		const fullUrl = `${this.deviceUrl}/${hostname}`;
		return this.http.post<Device>(fullUrl, device, httpOptions);
	}

	deleteDevice(hostname: string): Observable<Device>
	{
		const fullUrl = `${this.deviceUrl}/${hostname}`;
		return this.http.delete<Device>(fullUrl, httpOptions);
	}

	getAllDeviceGroups(): Observable<DeviceGroup[]>
	{
		return this.http.get<DeviceGroup[]>(this.deviceGroupUrl);
	}

	createDeviceGroup(deviceGroup: DeviceGroup): Observable<DeviceGroup>
	{
		return this.http.post<DeviceGroup>(this.deviceGroupUrl, deviceGroup, httpOptions);
	}

	readDeviceGroup(groupName: string): Observable<DeviceGroup>
	{
		const fullUrl = `${this.deviceGroupUrl}/${groupName}`;
		return this.http.get<DeviceGroup>(fullUrl);
	}

	updateDeviceGroup(groupName: string, deviceGroup: DeviceGroup): Observable<any>
	{
		const fullUrl = `${this.deviceGroupUrl}/${groupName}`;
		return this.http.post<DeviceGroup>(fullUrl, deviceGroup, httpOptions);
	}

	deleteDeviceGroup(groupName: string): Observable<DeviceGroup>
	{
		const fullUrl = `${this.deviceGroupUrl}/${groupName}`;
		return this.http.delete<DeviceGroup>(fullUrl, httpOptions);
	}
}
