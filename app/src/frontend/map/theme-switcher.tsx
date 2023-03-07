import React from "react";

import "./theme-switcher.css";
import { Translation } from "react-i18next";

interface ThemeSwitcherProps {
  currentTheme: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => (
  <Translation>
    {(t, { i18n }) => (
      <form
        className={`theme-switcher ${props.currentTheme}`}
        onSubmit={props.onSubmit}
      >
        <button className="btn btn-outline btn-outline-dark" type="submit">
          {t('switch_theme')} ({props.currentTheme === "light" ? t('theme_light') : t('theme_dark')})
        </button>
      </form>
    )}
  </Translation>
);

export default ThemeSwitcher;
