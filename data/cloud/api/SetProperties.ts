import { ONENET_BASE_URL, ONENET_DEVICE_NAME, ONENET_PRODUCT_ID } from "@/constants/Config";
import { AUTH_TOKEN } from "@/constants/Secret";
import axios from "axios";

export default async function setProperties(
  appkey?: number,
  passenger?: string,
  quest?: string,
) {
  try {
    const url = `${ONENET_BASE_URL}/set-device-desired-property`;
    await axios.post(url, {
      product_id: ONENET_PRODUCT_ID,
      device_name: ONENET_DEVICE_NAME,
      params: {
        appkey: appkey,
        passenger: passenger,
        quest: quest,
      },
    }, {
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
        "Authorization": `${AUTH_TOKEN}`,
      },
    });
  } catch (e) {
    console.warn(`SetPropertys error: ${e}`);
  }
}
