import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../auth-context';
import ConfirmationModal from '../components/confirmation-modal';
import ErrorBox from '../components/error-box';
import { SpinnerIcon } from '../components/icons';
import { useTranslation } from "react-i18next";
import i18next from "i18next";


export const MyAccountPage: React.FC = () => {
    const { isLoading, user, userError, logout, generateApiKey, deleteAccount } = useAuth();
    const { t } = useTranslation();
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [error, setError] = useState(undefined);

    const handleLogout = useCallback((e) => {
        e.preventDefault();
        logout(setError);
    }, [logout]);

    const handleGenerateKey = useCallback(async (e) => {
        e.preventDefault();
        
        setError(undefined);
        generateApiKey(setError);
    }, [generateApiKey]);

    const handleDeleteAccount = useCallback(() => {
        setError(undefined);
        deleteAccount(setError);
    }, [deleteAccount])

    if(!user && isLoading) {
        return (
            <article>
                <section className="main-col">
                    <SpinnerIcon spin={true} /> {t('account_loading')}
                </section>
            </article>
        );
    }

    let deleteAccountText = "Delete account";
    let logoutText = "Log out";
    let generateApiKeyText = "Generate API key";
    if (i18next.language === 'gr') {
        deleteAccountText = 'Διαγραφή λογαριασμού';
        logoutText = "Αποσύνδεση";
        generateApiKeyText = "Δημιουργία κλειδιού API";
      }


    return (
        <article>
            <section className="main-col">
                { !isLoading && <ErrorBox msg={userError} /> }
                {!userError && (<>
                    <h1 className="h1">{t('account_welcome')} {user.username}!</h1>
                    <p>
                    {t('account_active_development')}{' '}
                        <a href="https://discuss.colouring.london/">{t('login_discuss_suggestions')}</a> {t('login_and')}{' '}
                        <a href="https://github.com/colouring-cities/colouring-Athens/issues"> {t('login_report_issues')}</a>.
                    </p>
                    <p>
                        {t('account_for_reference')}{' '}
                        <Link to="/privacy-policy.html">{t('account_privacy_policy')}</Link>,{' '}
                        <Link to="/contributor-agreement.html">{t('account_contributor_agreement')}</Link> {t('account_and')}{' '}
                        <Link to="/data-accuracy.html">{t('account_data_accuracy_agreement')}</Link>.
                    </p>
                    <ErrorBox msg={error} />
                    <form onSubmit={handleLogout}>
                        <div className="buttons-container">
                            <Link to="/edit/age" className="btn btn-warning">{t('account_start_colouring')}</Link>
                            <input className="btn btn-secondary" type="submit" value={logoutText}/>
                        </div>
                    </form>

                    <hr/>
                    <h2 className="h2">{t('account_my_details')}</h2>
                    <h3 className="h3">{t('account_username')}</h3>
                    <p>{user.username}</p>
                    <h3 className="h3">{t('account_email')}</h3>
                    <p>{user.email || '-'}</p>
                    <h3 className="h3">{t('account_registered')}</h3>
                    <p>{user.registered.toString()}</p>

                    <hr/>

                    <h2 className="h2">{t('account_technical_details')}</h2>
                    <p>{t('account_are_you_a_developer')}</p>
                    <h3 className="h3">{t('account_api_key')}</h3>
                    <p>{user.api_key || '-'}</p>
                    <form onSubmit={handleGenerateKey} className="form-group mb-3">
                        <input className="btn btn-warning" type="submit" value={generateApiKeyText}/>
                    </form>

                    <h3 className="h3">{t('account_open_source_code')}</h3>
                    {t('account_site_code')} <a href="https://github.com/colouring-cities/colouring-Athens/">colouring-Athens</a> {t('account_github')}

                    <hr />

                    <h2 className="h2">{t('account_actions')}</h2>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            setShowDeleteConfirm(true);
                        }}
                        className="form-group mb-3"
                    >
                        <input className="btn btn-danger" type="submit" value={deleteAccountText} />
                    </form>

                    <ConfirmationModal
                        show={showDeleteConfirm}
                        title={t('account_delete_confirm')}
                        description={t('account_delete_confirm_desc')}
                        confirmButtonText="Delete account"
                        confirmButtonClass="btn-danger"
                        onConfirm={() => handleDeleteAccount()}
                        onCancel={() => setShowDeleteConfirm(false)}
                    />
                </>)}
            </section>
        </article>
    );
};
