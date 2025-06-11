import { ONENET_BASE_URL } from "@/constants/Config";
import { AUTH_TOKEN } from "@/constants/Secret";
import axios from "axios";

export default async function fetchAllProperties() {
  const url = `${ONENET_BASE_URL}/query-device-property?product_id=mmMJx639W9&device_name=ch32`;

  try {
      const response = await axios.get(url, {
        headers: {
          "Accept": "application/json",
          "Authorization": `${AUTH_TOKEN}`,
        },
      });
    const data = response.data;

    console.log(data);
  } catch (e) {
    console.warn(`FetchAllProperties error: ${e}`);
  }
}
