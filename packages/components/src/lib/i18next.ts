import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

interface DataItem {
  Key: string;
  Text: string;
}

interface ApiResponse {
  total: number;
  limit: number;
  offset: number;
  data: DataItem[];
  ":type": string;
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    react: {
      useSuspense: false,
    },
    detection: {
      order: ["path", "cookie"],
      lookupFromPathIndex: 1,
    },
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    backend: {
      loadPath: "/config/locales/{{lng}}/{{ns}}.json",
      parse: function (data: string) {
        const json = JSON.parse(data) as unknown as ApiResponse;
        return json.data.reduce<Record<string, string>>((acc, item) => {
          acc[item.Key] = item.Text;
          return acc;
        }, {});
      },
    },
  });

export default i18n;
