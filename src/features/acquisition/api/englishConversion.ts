import axios from "axios";

export const englishConversitionText = async (text: string) => {
  const endpoint = "https://translation.googleapis.com/language/translate/v2";
  const apiKey = import.meta.env.VITE_APP_GOOGLE_CLOUD_API_KEY; // 取得したAPIキーをセット
  const params = {
    q: text,
    source: "ja",
    target: "en",
    key: apiKey,
  };

  try {
    const response = await axios.post(endpoint, {}, { params });
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Error translating text:", error);
  }
};
