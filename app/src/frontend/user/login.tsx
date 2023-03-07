import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../auth-context";
import ErrorBox from "../components/error-box";
import { SpinnerIcon } from "../components/icons";
import InfoBox from "../components/info-box";
import SupporterLogos from "../components/supporter-logos";
import i18next from "i18next";

export const Login: React.FC = () => {
  const { isLoading, login } = useAuth();
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState(undefined);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setError(undefined);

      login({ username, password });
    },
    [username, password]
  );

  let loginText = 'Log in';
  if (i18next.language === 'gr') {
    loginText = 'Σύνδεση';
  }

  return (
    <article>
      <section className="main-col">
        <h1 className="h2">{t('login')}</h1>
        <InfoBox msg={t('login_infobox')}>
          <br />
          {t('login_please')}{" "}
          <a href="https://discuss.colouring.london/">
          {t('login_discuss_suggestions')}
          </a>{" "}
          {t('login_and')}{" "}
          <a href="https://github.com/colouring-cities/colouring-Athens/issues">
          {t('login_report_issues')}
          </a>
          .
        </InfoBox>
        <ErrorBox msg={error} />
        <form onSubmit={onSubmit}>
          <label htmlFor="username">{t('login_username')}</label>
          <input
            name="username"
            id="username"
            className="form-control"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={t('login_not_your_real_name')}
            required
          />
          <label htmlFor="password">{t('login_password')}</label>
          <input
            name="password"
            id="password"
            className="form-control"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="form-check">
            <input
              id="show_password"
              name="show_password"
              className="form-check-input"
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            <label htmlFor="show_password" className="form-check-label">
            {t('login_show_password')}
            </label>
          </div>
          <Link to="/forgotten-password.html">{t('login_forgotten_password')}</Link>
          <div className="buttons-container with-space">
            <input
              type="submit"
              disabled={isLoading}
              value={loginText}
              className="btn btn-primary"
            />
            {isLoading && (
              <span>
                <SpinnerIcon />
                {t('login_logging_in')}
              </span>
            )}
          </div>
          {t('login_create_account')}
          <div className="buttons-container with-space">
            <Link to="sign-up.html" className="btn btn-outline-dark">
            {t('signup')}
            </Link>
          </div>
        </form>
      </section>
      <hr />
      <section className="main-col">
        <SupporterLogos />
      </section>
    </article>
  );
};
