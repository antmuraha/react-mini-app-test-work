import i18next from "i18next";

export const required = (value, allValues, props, name) => {
  return value || typeof value === "number" ? undefined : i18next.t("Required");
};

export const isEmail = (value, allValues, props, name) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return i18next.t("Should be a correct email");
  }
};

export const isPassword = (value, allValues, props, name) => {
  if (value && value.length < 6) {
    return i18next.t("Password should be minimum 6 characters long");
  }
};

export const isConfirmPassword = (value, allValues, props, name) => {
  if (value !== allValues.password) {
    return i18next.t("The passwords do not match");
  }
};

export const isNumberInt = (value, allValues, props, name) => {
  if (/[^0-9]/g.test(value)) {
    return i18next.t("Should be a number");
  }
};

export const date = (value, allValues, props, name) => {
  let text_error;
  switch (name) {
    case "d": {
      break;
    }
    case "m": {
      text_error = date_m(value);
      break;
    }
    case "y": {
      text_error = date_y(value);
      break;
    }
    // no default
  }
  if (allValues.m && allValues.y && !text_error) {
    let ds = daysOfMonth(allValues.m, allValues.y);
    text_error = date_d(allValues.d, ds);
  }
  return text_error;
};

const isInteger = num => {
  return (num ^ 0) === num;
};

const daysOfMonth = (month, year) => {
  let d02 = isInteger(year / 4) ? 29 : 28;
  let ds = [31, d02, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return ds[parseInt(month) - 1];
};

const date_d = (value, days) => {
  if (parseInt(value) < 1 || parseInt(value) > days) {
    return i18next.t("Day should be in the range of 1 to ") + days;
  }
};
const date_m = value => {
  if (parseInt(value) < 1 || parseInt(value) > 12) {
    return i18next.t("Month should be in the range of 1 to 12");
  }
};
const date_y = value => {
  let d = new Date().getFullYear();
  if (parseInt(value) < 1800 || parseInt(value) > d) {
    return i18next.t("Year should be in the range of 1800 to ") + d;
  }
};

export const age = (value, allValues, props, name) => {
  if (!allValues.d || !allValues.m || !allValues.y) {
    return undefined;
  }
  const dateFullNow = new Date();
  const dateNow = dateFullNow.getDate();
  const monthNow = dateFullNow.getMonth() + 1;
  const yearNow = dateFullNow.getFullYear();
  const date = parseInt(allValues.d);
  const month = parseInt(allValues.m);
  const year = parseInt(allValues.y);

  const text_error = i18next.t("You're not 18 yet");

  if (yearNow - year < 18) {
    return text_error;
  }
  if (yearNow - year === 18) {
    if (monthNow < month) {
      return text_error;
    }
    if (monthNow === month) {
      if (dateNow < date) {
        return text_error;
      }
    }
  }
};
