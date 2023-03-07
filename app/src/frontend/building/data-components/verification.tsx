import React, { Component, Fragment } from "react";
import { VerifyIcon } from "../../components/icons";
import { useTranslation } from "react-i18next";
import "./verification.css";
import i18next from "i18next";

interface VerificationProps {
  slug: string;
  onVerify: (slug: string, verify: boolean, x: number, y: number) => void;
  user_verified: boolean;
  user_verified_as: string;
  verified_count: number;
  allow_verify: boolean;
}

class Verification extends Component<VerificationProps, any> {
  constructor(props) {
    super(props);
    // const { t } = useTranslation();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(verify) {
    return (e) => {
      e.preventDefault();
      const x = e.clientX / document.body.clientWidth;
      const y = e.clientY / document.body.clientHeight;
      this.props.onVerify(this.props.slug, verify, x, y);
    };
  }

  render() {
    const props = this.props;
    let user_verified_as = props.user_verified_as;

    if (typeof user_verified_as === "boolean") {
      if (i18next.language === "gr") {
        user_verified_as = user_verified_as ? "Ναι" : "Όχι";
      } else {
        user_verified_as = user_verified_as ? "Yes" : "No";
      }
    }

    let verified_as = "Verified as";
    let verified_by = "Verified by";
    let person = "person";
    let people = "people";
    let verified_remove = "Remove";
    let verify = "Verify";

    if (i18next.language === "gr") {
      verified_as = "Επαληθεύτηκε ως";
      verified_by = "Επαληθεύτηκε από";
      person = "άτομο";
      people = "άτομα";
      verified_remove = "Αφαίρεση";
      verify = "Επαλήθευση";
    }

    
    return (
      <div className="verification-container">
        <span
          className="verification-status"
          title={`${verified_by} ${props.verified_count} ${
            props.verified_count == 1 ? person : people
          }`}
        >
          <VerifyIcon />
          {props.verified_count || 0}
        </span>
        {props.user_verified ? (
          <Fragment>
            {verified_as} "<span>{user_verified_as}</span>"
            <button
              className="btn btn-danger"
              title="Remove my verification"
              disabled={!props.allow_verify}
              onClick={this.handleClick(false)}
            >
              {verified_remove}
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <button
              className="btn btn-success"
              title="Confirm that the current value is correct"
              disabled={!props.allow_verify}
              onClick={this.handleClick(true)}
            >
              {verify}
            </button>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Verification;
