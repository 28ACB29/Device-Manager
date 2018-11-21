/**
 * 
 */
package devicemanager.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.apache.commons.validator.routines.InetAddressValidator;
import org.springframework.util.StringUtils;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author arthu
 *
 */
@Entity
public class Device
{
	@Id
	private String hostName;

	private String ipAdress;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "deviceGroup")
	@JsonIgnore
	private DeviceGroup deviceGroup;

	/**
	 * 
	 */
	public Device()
	{
		this.hostName = "";
		this.ipAdress = "";
		this.deviceGroup = null;
	}

	/**
	 * @return the hostName
	 */
	public String getHostName()
	{
		return hostName;
	}

	/**
	 * @param hostName the hostName to set
	 */
	public void setHostName(String hostName)
	{
		this.hostName = hostName;
	}

	/**
	 * @return the ipAdress
	 */
	public String getIpAdress()
	{
		return ipAdress;
	}

	/**
	 * @param ipAdress the ipAdress to set
	 */
	public void setIpAdress(String ipAdress)
	{
		this.ipAdress = ipAdress;
	}

	/**
	 * @return the deviceGroup
	 */
	public DeviceGroup getDeviceGroup()
	{
		return this.deviceGroup;
	}

	/**
	 * @param deviceGroup the deviceGroup to set
	 */
	public void setDeviceGroup(DeviceGroup deviceGroup)
	{
		this.deviceGroup = deviceGroup;
	}

	public static boolean validateDevice(Device device)
	{
		return device != null && StringUtils.hasText(device.hostName) && !(StringUtils.hasText(device.ipAdress) && !InetAddressValidator.getInstance().isValid(device.ipAdress));
	}

}
