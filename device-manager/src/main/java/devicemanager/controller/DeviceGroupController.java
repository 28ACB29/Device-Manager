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

import devicemanager.model.DeviceGroup;
import devicemanager.model.DeviceGroupRepository;

/**
 * @author arthu
 *
 */
@RestController
@RequestMapping("/device-group")
public class DeviceGroupController
{

	@Autowired
	private DeviceGroupRepository deviceGroups;

	/**
	 * 
	 */
	public DeviceGroupController()
	{
		// TODO Auto-generated constructor stub
	}

	@GetMapping
	public Iterable<DeviceGroup> getDeviceGroupList()
	{
		return this.deviceGroups.findAll();
	}

	@PostMapping
	public Response createDeviceGroup(@RequestBody DeviceGroup deviceGroup)
	{
		if (DeviceGroup.validateDeviceGroup(deviceGroup))
		{
			Optional<DeviceGroup> currentDeviceGroup = this.deviceGroups.findById(deviceGroup.getGroupName());
			if (currentDeviceGroup.isPresent())
			{
				return Response.status(HttpServletResponse.SC_BAD_REQUEST).build();
			}
			else
			{
				this.deviceGroups.save(deviceGroup);
				return Response.status(HttpServletResponse.SC_OK).build();
			}
		}
		else
		{
			return Response.status(HttpServletResponse.SC_BAD_REQUEST).build();
		}
	}

	@DeleteMapping("/{groupName}")
	public Response deleteDeviceGroup(@PathParam("groupName") String groupName)
	{
		Optional<DeviceGroup> currentDeviceGroup = this.deviceGroups.findById(groupName);
		if (currentDeviceGroup.isPresent())
		{
			this.deviceGroups.deleteById(groupName);
			return Response.status(HttpServletResponse.SC_OK).build();
		}
		else
		{
			return Response.status(HttpServletResponse.SC_BAD_REQUEST).build();
		}
	}

	@GetMapping("/{groupName}")
	public DeviceGroup readDeviceGroup(@PathParam("groupName") String groupName)
	{
		return this.deviceGroups.findById(groupName).orElse(null);
	}

	@PutMapping("/{groupName}")
	public Response updateDeviceGroup(@PathParam("groupName") String groupName, @RequestBody DeviceGroup deviceGroup)
	{
		if (DeviceGroup.validateDeviceGroup(deviceGroup))
		{
			Optional<DeviceGroup> currentDeviceGroup = this.deviceGroups.findById(deviceGroup.getGroupName());
			if (currentDeviceGroup.isPresent())
			{
				return Response.status(HttpServletResponse.SC_BAD_REQUEST).build();
			}
			else
			{
				this.deviceGroups.deleteById(groupName);
				this.deviceGroups.save(deviceGroup);
				return Response.status(HttpServletResponse.SC_OK).build();
			}
		}
		else
		{
			return Response.status(HttpServletResponse.SC_BAD_REQUEST).build();
		}
	}
}
