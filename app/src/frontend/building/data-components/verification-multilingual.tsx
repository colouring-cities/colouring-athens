import React, { Component, Fragment, useState, useEffect } from "react";
import { VerifyIcon } from "../../components/icons";
import { apiGet } from "../../apiHelpers";
import { useTranslation } from "react-i18next";

import "./verification.css";

interface label {
  label: string;
}

interface VerificationMultilingualProps {
  slug: string;
  onVerify: (slug: string, verify: boolean, x: number, y: number) => void;
  user_verified: boolean;
  user_verified_as: number;
  verified_count: number;
  allow_verify: boolean;
}

const SelectDataEntryMultiLingual: React.FunctionComponent<
  VerificationMultilingualProps
> = (props) => {
  //   const slugWithModifier = props.slug + (props.slugModifier ?? "");
  const [options, setLabel] = useState<label[]>(null);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  function handleClick(verify) {
    return (e) => {
      e.preventDefault();
      const x = e.clientX / document.body.clientWidth;
      const y = e.clientY / document.body.clientHeight;
      props.onVerify(props.slug, verify, x, y);
    };
  }

  let displayedVerifiedValue = "";

  useEffect(() => {
    const doAsync = async () => {
      if (typeof props.user_verified_as !== "undefined") {
        const url = `/api/multilinguallabels?field_name=${props.slug}&language=${i18n.language}&id=${props.user_verified_as}`;
        const { options: newOptions } = await apiGet(url);
        setLabel(newOptions);
      }
    };

    doAsync();
  }, [props.slug, props.user_verified_as, i18n.language]);

  if (options == undefined) {
    displayedVerifiedValue = "";
  } else {
    displayedVerifiedValue = options[0].label;
  }

  return (
    <div className="verification-container">
      <span
        className="verification-status"
        title={`Verified by ${props.verified_count} ${
          props.verified_count == 1 ? "person" : "people"
        }`}
      >
        <VerifyIcon />
        {props.verified_count || 0}
      </span>
      {props.user_verified ? (
        <Fragment>
          {t("verified_as")} "<span>{displayedVerifiedValue}</span>"
          <button
            className="btn btn-danger"
            title="Remove my verification"
            disabled={!props.allow_verify}
            onClick={handleClick(false)}
          >
            {t("verified_remove")}
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <button
            className="btn btn-success"
            title="Confirm that the current value is correct"
            disabled={!props.allow_verify}
            onClick={handleClick(true)}
          >
            {t("verify")}
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default SelectDataEntryMultiLingual;
