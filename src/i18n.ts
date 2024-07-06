import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json"
import translationZH_TW from "./locales/zh-tw/translation.json"
import translationZH_CN from "./locales/zh-cn/translation.json"


const resources = {
    en:{
        translation:translationEN
    },
    zh_tw:{
        translation:translationZH_TW
    },
    zh_cn:{
        translation:translationZH_CN
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng:"zh_tw",
    fallbackLng:'zh_tw',

    interpolation:{
        escapeValue: false
    }
});

export default i18n;
