import React, { ChangeEvent, FormEvent } from "react";

import ErrorBox from "../components/error-box";
import InfoBox from "../components/info-box";
import { Translation } from "react-i18next";
import i18next from "i18next";

interface ForgottenPasswordState {
  success: boolean;
  error: string;
  email: string;
  emailUsed: string;
}

export default class ForgottenPassword extends React.Component<
  {},
  ForgottenPasswordState
> {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
      success: undefined,
      email: undefined,
      emailUsed: undefined,
    };
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value } as any);
  }

  async handleSubmit(event: FormEvent) {
    event.preventDefault();
    this.setState({ error: undefined, success: undefined });

    const emailSent = this.state.email;
    try {
      const res = await fetch("/api/users/password", {
        method: "PUT",
        body: JSON.stringify({ email: emailSent }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.error != undefined) {
        this.setState({ error: data.error });
      } else if (data.success === true) {
        this.setState({ success: true, emailUsed: emailSent });
      } else {
        this.setState({ error: "Unexpected result." });
      }
    } catch (err) {
      this.setState({ error: "Something went wrong." });
    }
  }

  

  render() {

    let requestText = "Request password reset";
    if (i18next.language === 'gr') {
        requestText = 'Ζητήστε επαναφορά κωδικού';
      }

    return (
      <Translation>
        {(t, { i18n }) => (
          <article>
            <section className="main-col">
              <h1 className="h2">{t('forgot_password')}</h1>
              <p>
              {t('forgot_password_desc')}
              </p>
              <ErrorBox msg={this.state.error} />
              <InfoBox msg="">
                {this.state.success
                  ? `${t('forgot_password_success_a')} ${this.state.emailUsed}. ${t('forgot_password_success_b')}`
                  : null}
              </InfoBox>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="email">E-mail</label>
                <input
                  name="email"
                  id="email"
                  className="form-control"
                  type="email"
                  placeholder={t('forgot_password_email_desc')}
                  required
                  onChange={(e) => this.handleChange(e)}
                />

                <div className="buttons-container">
                  <input
                    type="submit"
                    value={requestText}
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
