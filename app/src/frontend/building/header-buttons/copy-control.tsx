import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface CopyControlProps {
  cat: string;
  data_string: string;
  copying: boolean;
  toggleCopying: () => void;
}

const CopyControl: React.FC<CopyControlProps> = (props) => {

    const { t } = useTranslation();

  return props.copying ? (
    <>
      <NavLink
        to={`/multi-edit/${props.cat}?data=${props.data_string}`}
        className="icon-button copy"
      >
        {t("copy_selected")}
      </NavLink>
      <a className="icon-button copy" onClick={props.toggleCopying}>
      {t("cancel")}
      </a>
    </>
  ) : (
    <a className="icon-button copy" onClick={props.toggleCopying}>
      {t("copy")}
    </a>
  );
};
export { CopyControl };
