import { ONENET_BASE_URL, ONENET_DEVICE_NAME, ONENET_PRODUCT_ID } from "@/constants/Config";
import { AUTH_TOKEN } from "@/constants/Secret";
import axios from "axios";
import DeviceInfo from "../models/DeviceInfo";

export default async function fetchAllProperties(): Promise<DeviceInfo> {
  const url = `${ONENET_BASE_URL}/query-device-property?product_id=${ONENET_PRODUCT_ID}&device_name=${ONENET_DEVICE_NAME}`;

  try {
      const response = await axios.get(url, {
        headers: {
          "Accept": "application/json",
          "Authorization": `${AUTH_TOKEN}`,
        },
      });
    const data = response.data;
    // console.log(data);
    const raw = data.data as any;
    const dth11 = JSON.parse(raw.find((item: any) => item.name === "DTH11")?.value) ?? [-1, -1];
    const passengerNumber = raw.find((item: any) => item.name === "passenger")?.value ?? 0;
    return new DeviceInfo(
      dth11[0],
      dth11[1],
      passengerNumber,
    );
  } catch (e) {
    console.warn(`FetchAllProperties error: ${e}`);
  }

  return DeviceInfo.default();
}
