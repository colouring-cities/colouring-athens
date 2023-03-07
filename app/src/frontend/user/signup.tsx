import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../auth-context';
import ErrorBox from '../components/error-box';
import { SpinnerIcon } from '../components/icons';
import InfoBox from '../components/info-box';
import SupporterLogos from '../components/supporter-logos';

import i18next from "i18next";
import { useTranslation } from "react-i18next";

export const SignUp: React.FC = () => {
    const { isLoading, signup } = useAuth();
    const [error, setError] = useState(undefined);
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmConditions, setConfirmConditions] = useState(false);

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            signup({ username, email, confirmEmail, password }, setError);
        },
        [username, email, confirmEmail, password, confirmConditions, signup]
    );

    let signupText = 'Sign up';

    if (i18next.language === 'gr') {
        signupText = 'Εγγραφή';
      }

    return (
        <article>
            <section className="main-col">
                <h1 className="h2">{t('signup')}</h1>
                <InfoBox msg={t('login_infobox')}>
                    <br/>{t('login_please')} <a href="https://discuss.colouring.london/">
                        {t('login_discuss_suggestions')}</a> {t('login_and')} <a
                        href="https://github.com/colouring-cities/colouring-Athens/issues">
                    {t('login_report_issues')}</a>.
                </InfoBox>
                <p>
                {t('signup_create_an_account')}
                </p>
                <ErrorBox msg={error} />
                <form onSubmit={onSubmit}>
                    <label htmlFor="username">{t('login_username')}</label>
                    <input name="username" id="username"
                        className="form-control" type="text"
                        value={username} onChange={e => setUsername(e.target.value)}
                        placeholder={t('login_not_your_real_name')} required
                        minLength={4}
                        maxLength={30}
                        pattern="\w+"
                        title={t('signup_username_hint')}
                    />

                    <label htmlFor="email">{t('signup_email_optional')}</label>
                    <input name="email" id="email"
                        className="form-control" type="email"
                        value={email} onChange={e => setEmail(e.target.value)}
                        placeholder="someone@example.com"
                    />
                    <InfoBox msg={t('signup_please_note')} />
                    
                    <label htmlFor="confirm_email">{t('signup_confirm_email')}</label>
                    <input name="confirm_email" id="confirm_email"
                        className="form-control" type="email"
                        value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)}
                    />

                    <label htmlFor="password">{t('signup_password')}</label>
                    <input name="password" id="password"
                        className="form-control"
                        type={(showPassword)? 'text': 'password'}
                        value={password} onChange={e => setPassword(e.target.value)}
                        required
                        minLength={8}
                        maxLength={128}
                    />

                    <div className="form-check">
                        <input id="show_password" name="show_password"
                            className="form-check-input" type="checkbox"
                            checked={showPassword}
                            onChange={e => setShowPassword(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="show_password">
                        {t('login_show_password')}
                        </label>
                    </div>

                    <div className="form-check">
                        <input id="confirm_conditions" name="confirm_conditions"
                            className="form-check-input" type="checkbox"
                            checked={confirmConditions}
                            onChange={e => setConfirmConditions(e.target.checked)}
                            required />
                        <label className="form-check-label" htmlFor="confirm_conditions">
                        {t('signup_confirm_a')} <Link
                                to="/privacy-policy.html">{t('signup_confirm_b')}</Link>, <Link
                                to="/contributor-agreement.html">{t('signup_confirm_c')}</Link> {t('signup_confirm_d')} <Link
                                to="/data-accuracy.html">{t('signup_confirm_e')}</Link>.
                        </label>
                    </div>

                    <div className="buttons-container with-space">
                        <input type="submit" disabled={isLoading} value={signupText} className="btn btn-primary" />
                        {isLoading && <span><SpinnerIcon/>{t('signup_sending')}</span>}
                    </div>
                    <InfoBox msg="">
                    {t('signup_data_ethics_a')} <a href="https://www.pages.colouring.london/data-ethics">{t('signup_data_ethics_b')}</a> {t('signup_data_ethics_c')}
                    </InfoBox>

                    {t('signup_already_have_account')}

                    <div className="buttons-container with-space">
                        <Link to="login.html" className="btn btn-outline-dark">{t('login')}</Link>
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
