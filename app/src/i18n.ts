import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from 'i18next-browser-languagedetector';

// Importing translation files

import translationEN from "./locales/en.json";
import translationGR from "./locales/gr.json";


//Creating object with the variables of imported translation files
const resources = {
    en: {
        translation: translationEN,
    },
    gr: {
        translation: translationGR,
    },
};

const DETECTION_OPTIONS = {
    order: ['localStorage'],
    caches: ['localStorage']
};

//i18N Initialization

i18n
    // .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        detection: DETECTION_OPTIONS,
        // fallbackLng: 'en',
        // lng: "en", //default language
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;