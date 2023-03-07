import React, { FormEvent } from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
import ErrorBox from "../components/error-box";
import i18next from "i18next";


interface PasswordResetState {
  error: string;
  success: boolean;
  token: string;
  password: string;
  confirmPassword: string;
}

export default class PasswordReset extends React.Component<
  RouteComponentProps,
  PasswordResetState
> {
  static tokenMissingMessage =
    "Password reset token is missing. Make sure to follow the link from a password reset email!";

  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      success: undefined,
      token: undefined,
      password: undefined,
      confirmPassword: undefined,
    };
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(this.props.location.search);
    const token = queryParams.get("token");
    if (token == undefined) {
      this.setState({ error: PasswordReset.tokenMissingMessage });
    } else {
      this.setState({ token: token });
    }
  }

  handleChange(event: FormEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    } as any);
  }

  async handleSubmit(event: FormEvent) {
    event.preventDefault();

    this.setState({ error: undefined });

    if (this.state.token == undefined) {
      this.setState({ error: PasswordReset.tokenMissingMessage });
      return;
    }
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ error: "Passwords do not match" });
      return;
    }

    // const { t } = useTranslation();

    const requestData = {
      token: this.state.token,
      password: this.state.password,
    };

    const res = await fetch("/api/users/password", {
      method: "PUT",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (data.error != undefined) {
      this.setState({ error: data.error });
    } else if (data.success === true) {
      this.setState({ success: true });
    } else {
      this.setState({ error: "Unexpected result." });
    }
  }

  render() {
    if (this.state.success) {
      return <Redirect to="/my-account.html" />;
    }
    let changePassword = "Change password";
    let newPassword = "New password";
    let confirmNewPassword = "Confirm new password";
    if (i18next.language === 'gr') {
         changePassword = "Αλλαγή κωδικού";
         newPassword = "Νέος κωδικός";
         confirmNewPassword = "Επιβεβαίωση νέου κωδικού";
      }

    return (
      <Translation>
        {(t, { i18n }) => (
          <article>
            <section className="main-col">
              <h1 className="h2">{t('forgot_password')}</h1>
              <p>
              {t('forgotten_password_text_a')}{" "}
                <Link to="/forgotten-password.html">
                {t('forgotten_password_text_b')} 
                </Link>{" "}
                {t('forgotten_password_text_c')}
              </p>
              <ErrorBox msg={this.state.error} />
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="email">{t('forgotten_password_text_d')}</label>
                <input
                  name="password"
                  className="form-control"
                  type="password"
                  placeholder={newPassword}
                  required
                  onChange={(e) => this.handleChange(e)}
                />

                <label htmlFor="email">{t('forgotten_password_text_e')}</label>
                <input
                  name="confirmPassword"
                  className="form-control"
                  type="password"
                  placeholder={confirmNewPassword}
                  required
                  onChange={(e) => this.handleChange(e)}
                />

                <input
                  name="token"
                  id="token"
                  type="hidden"
                  value={this.state.token}
                />

                <div className="buttons-container">
                  <input
                    type="submit"
                    value={changePassword}
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </section>
          </article>
        )}
      </Translation>
    );
  }
}
