/**
 * 
 */
package devicemanager.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.util.StringUtils;

/**
 * @author arthu
 *
 */
@Entity
public class DeviceGroup
{
	@Id
	private String groupName;

	private String description;

	@OneToMany(mappedBy = "deviceGroup")
	private Set<Device> devices;

	/**
	 * 
	 */
	public DeviceGroup()
	{
		this.groupName = "";
		this.description = "";
		this.devices = new HashSet<Device>();
	}

	/**
	 * @return the groupName
	 */
	public String getGroupName()
	{
		return groupName;
	}

	/**
	 * @param groupName the groupName to set
	 */
	public void setGroupName(String groupName)
	{
		this.groupName = groupName;
	}

	/**
	 * @return the description
	 */
	public String getDescription()
	{
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description)
	{
		this.description = description;
	}

	public boolean addDevice(Device device)
	{
		boolean added = this.devices.add(device);
		if (added)
		{
			device.setDeviceGroup(this);
		}
		return added;
	}

	public boolean containsDevice(Device device)
	{
		return this.devices.contains(device);
	}

	public boolean removeDevice(Device device)
	{
		boolean removed = this.devices.remove(device);
		if (removed)
		{
			device.setDeviceGroup(null);
		}
		return removed;
	}

	public static boolean validateDeviceGroup(DeviceGroup deviceGroup)
	{
		return deviceGroup != null && StringUtils.hasText(deviceGroup.groupName) && deviceGroup.devices.stream().allMatch(device -> Device.validateDevice(device));
	}
}
