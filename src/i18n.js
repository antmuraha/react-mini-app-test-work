import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      Required: "Required",
      "Should be a correct email": "Should be a correct email",
      "Password should be minimum 6 characters long":
        "Password should be minimum 6 characters long",
      "The passwords do not match": "The passwords do not match",
      "Should be a number": "Should be a number",
      "Day should be in the range of 1 to ":
        "Day should be in the range of 1 to ",
      "Month should be in the range of 1 to 12":
        "Month should be in the range of 1 to 12",
      "Year should be in the range of 1800 to ":
        "Year should be in the range of 1800 to ",
      "You're not 18 yet": "You're not 18 yet",
      "Email is required": "Email is required",
      Password: "Password",
      "Confirm password": "Confirm password",
      "Remember Me": "Remember Me",
      "Save data to the locale storage": "Save data to the locale storage",
      "Date of birth": "Date of birth",
      DD: "DD",
      MM: "MM",
      YYYY: "YYYY",
      Gender: "Gender",
      "Where did you hear about is?": "Where did you hear about is?",
      male: "male",
      female: "female",
      unspecified: "unspecified",
      Internet: "Internet",
      Friends: "Friends",
      Newspaper: "Newspaper"
    }
  },
  ru: {
    translation: {
      Required: "Обязательное поле",
      "Should be a correct email": "Введите корректный email",
      "Password should be minimum 6 characters long":
        "Пароль должен иметь минимум 6 символов",
      "The passwords do not match": "Пароль не совпадает",
      "Should be a number": "Необходимо вводить числовое значение",
      "Day should be in the range of 1 to ":
        "Дни должны быть в диапазоне от 1 до ",
      "Month should be in the range of 1 to 12":
        "Месяц должны быть в диапазоне от 1 до 12",
      "Year should be in the range of 1800 to ":
        "Год должен быть в диапазоне 1800 до ",
      "You're not 18 yet": "Вам еще не исполнилось 18 лет",
      "Email is required": "Email обязательный",
      Password: "Пароль",
      "Confirm password": "Подтверждение пароля",
      "Remember Me": "Запомнить меня",
      "Save data to the locale storage":
        "Сохранить данные в хранилище браузера",
      "Date of birth": "Дата рождения",
      DD: "ДД",
      MM: "ММ",
      YYYY: "ГГГГ",
      Gender: "Пол",
      "Where did you hear about is?": "Откуда Вы узнали о нас?",
      male: "Мужчина",
      female: "Женщина",
      unspecified: "Неопределен",
      Internet: "Интернет",
      Friends: "Друзья",
      Newspaper: "Газета"
    }
  },
  ua: {
    translation: {
      Required: "Обов'язкове поле",
      "Should be a correct email": "Введіть коректний email",
      "Password should be minimum 6 characters long":
        "Пароль повинен мати мінімум 6 символів",
      "The passwords do not match": "Пароль не збігається",
      "Should be a number": "Необхідно вводити числове значення",
      "Day should be in the range of 1 to ":
        "Дні повинні бути в діапазоні від 1 до ",
      "Month should be in the range of 1 to 12":
        "Місяць повинні бути в діапазоні від 1 до 12",
      "Year should be in the range of 1800 to ":
        "Рік повинен бути в діапазоні 1800 до ",
      "You're not 18 yet": "Вам ще не виповнилося 18 років",
      "Email is required": "Email обов'язковий",
      Password: "Пароль",
      "Confirm password": "Підтвердження пароля",
      "Remember Me": "Запам'ятати мене",
      "Save data to the locale storage":
        "Зберегти дані в сховищі браузера",
      "Date of birth": "Дата народження",
      DD: "ДД",
      MM: "ММ",
      YYYY: "ГГГГ",
      Gender: "Стать",
      "Where did you hear about is?": "Звідки Ви дізналися про нас?",
      male: "Чоловік",
      female: "Жінка",
      unspecified: "Не визначений",
      Internet: "Інтернет",
      Friends: "Друзі",
      Newspaper: "Газета"
    }
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ua",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
