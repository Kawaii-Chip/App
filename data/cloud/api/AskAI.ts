import { ZHIPU_TOKEN } from "@/constants/Secret";
import axios from "axios";

export async function askAI(prompt: string): Promise<string> {
  try {
    const url = `https://open.bigmodel.cn/api/paas/v4/chat/completions`;
    const response = await axios.post(url, {
      model: 'glm-4',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    }, {
      headers: {
        'Authorization': `Bearer ${ZHIPU_TOKEN}`,
        'Content-Type': 'application/json'
      },
    });
    const data = response.data;
    // console.log(data);
    return data.choices[0].message.content;
  } catch (e) {
    console.warn(`AskAI error: ${e}`);
    return "Error occurred while processing your request.";
  }
}
