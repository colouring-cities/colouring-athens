import React, { Fragment } from "react";
import InfoBox from "../../components/info-box";

import withCopyEdit from "../data-container";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { CategoryViewProps } from "./category-view-props";

/**
 * Team view/edit section
 */
const TeamView: React.FunctionComponent<CategoryViewProps> = (props) => {

    const { t } = useTranslation();


  return (
    <Fragment>
      <InfoBox msg={t("team_message_a")} />
      <InfoBox msg={t("team_message_b")} />
      <ul>
        <li>{t("team_ul_a")}</li>
        {
          // "disabled": true,
          // "slug": "team_original",
          // "type": "text"
        }
        <li>{t("team_ul_b")}</li>
        {
          // "disabled": true,
          // "slug": "team_after_original",
          // "type": "text_multi"
        }
        <li>{t("team_ul_c")}</li>
      </ul>
    </Fragment>
  );
};
const TeamContainer = withCopyEdit(TeamView);

export default TeamContainer;
