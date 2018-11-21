/**
 * 
 */
package devicemanager.controller;

import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import devicemanager.model.Device;
import devicemanager.model.DeviceRepository;

/**
 * @author arthu
 *
 */
@RestController
@RequestMapping("/device")
public class DeviceController
{

	@Autowired
	private DeviceRepository devices;

	/**
	 * 
	 */
	public DeviceController()
	{
		// TODO Auto-generated constructor stub
	}

	@GetMapping
	public Iterable<Device> getDeviceList()
	{
		return this.devices.findAll();
	}

	@PostMapping
	public Response createDevice(@RequestBody Device device)
	{
		if (Device.validateDevice(device))
		{
			Optional<Device> currentDevice = this.devices.findById(device.getHostName());
			if (currentDevice.isPresent())
			{
				return Response.status(HttpServletResponse.SC_BAD_REQUEST).build();
			}
			else
			{
				this.devices.save(device);
				return Response.status(HttpServletResponse.SC_OK).build();
			}
		}
		else
		{
			return Response.status(HttpServletResponse.SC_BAD_REQUEST).build();
		}
	}

	@DeleteMapping("/{hostname}")
	public Response deleteDevice(@PathParam("hostname") String hostname)
	{
		Optional<Device> currentDevice = this.devices.findById(hostname);
		if (currentDevice.isPresent())
		{
			this.devices.deleteById(hostname);
			return Response.status(HttpServletResponse.SC_OK).build();
		}
		else
		{
			return Response.status(HttpServletResponse.SC_BAD_REQUEST).build();
		}
	}

	@GetMapping("/{hostname}")
	public Device readDevice(@PathParam("hostname") String hostname)
	{
		return this.devices.findById(hostname).orElse(null);
	}

	@PutMapping("/{hostname}")
	public Response updateDevice(@PathParam("hostname") String hostname, @RequestBody Device device)
	{
		if (Device.validateDevice(device))
		{
			Optional<Device> currentDevice = this.devices.findById(device.getHostName());
			if (currentDevice.isPresent())
			{
				return Response.status(HttpServletResponse.SC_BAD_REQUEST).build();
			}
			else
			{
				this.devices.deleteById(hostname);
				this.devices.save(device);
				return Response.status(HttpServletResponse.SC_OK).build();
			}
		}
		else
		{
			return Response.status(HttpServletResponse.SC_BAD_REQUEST).build();
		}
	}
}
