import React from "react";

import withCopyEdit from "../data-container";
import UserOpinionEntry from "../data-components/user-opinion-data-entry";
import { MultiSelectDataEntry } from "../data-components/multi-select-data-entry";

import { CategoryViewProps } from "./category-view-props";
import InfoBox from "../../components/info-box";
import { LogicalDataEntry } from "../data-components/logical-data-entry/logical-data-entry";
import {
  buildingUserFields,
  dataFields,
} from "../../config/data-fields-config";

import "./community.css";
import SelectDataEntry from "../data-components/select-data-entry";
import Verification from "../data-components/verification";
import { MultiDataEntry } from "../data-components/multi-data-entry/multi-data-entry";
import i18next from "i18next";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";
import VerificationMultilingual from "../data-components/verification-multilingual";
import { useTranslation } from "react-i18next";

/**
 * Community view/edit section
 */
const CommunityView: React.FunctionComponent<CategoryViewProps> = (props) => {
  const worthKeepingReasonsNonEmpty = Object.values(
    props.building.community_type_worth_keeping_reasons ?? {}
  ).some((x) => x);

  const { t } = useTranslation();
  let community_like_title = buildingUserFields.community_like.title_en;
  let community_type_worth_keeping_title =
    buildingUserFields.community_type_worth_keeping.title_en;
  let community_type_worth_keeping_reasons_title =
    buildingUserFields.community_type_worth_keeping_reasons.title_en;
    let community_options = Object.entries(
        buildingUserFields.community_type_worth_keeping_reasons.fields
      ).map(([key, definition]) => ({
        key,
        label: definition.title_en,
      }));
  let community_local_significance_title =
    buildingUserFields.community_local_significance.title_en;

  let ownership_type_title = dataFields.ownership_type.title_en;
  let ownership_type_tooltip = dataFields.ownership_type.tooltip_en;

  let community_public_ownership_sources_title =
    dataFields.community_public_ownership_sources.title_en;
  // let community_public_ownership_sources_tooltip = dataFields.community_public_ownership_sources.tooltip_en;
  let community_activities_title = dataFields.community_activities.title_en;
  let community_activities_tooltip = dataFields.community_activities.tooltip_en;



  if (i18next.language === "gr") {
    community_like_title = buildingUserFields.community_like.title_gr;
    community_type_worth_keeping_title =
      buildingUserFields.community_type_worth_keeping.title_gr;
    community_type_worth_keeping_reasons_title =
      buildingUserFields.community_type_worth_keeping_reasons.title_gr;
      community_options = Object.entries(
        buildingUserFields.community_type_worth_keeping_reasons.fields
      ).map(([key, definition]) => ({
        key,
        label: definition.title_gr,
      }));
    community_local_significance_title =
      buildingUserFields.community_local_significance.title_gr;

    ownership_type_title = dataFields.ownership_type.title_gr;
    ownership_type_tooltip = dataFields.ownership_type.tooltip_gr;

    community_public_ownership_sources_title =
      dataFields.community_public_ownership_sources.title_gr;
    community_activities_title = dataFields.community_activities.title_gr;
    community_activities_tooltip = dataFields.community_activities.tooltip_gr;
  }

  return (
    <>
      <InfoBox type="warning">{t("community_info_a")}</InfoBox>
      <div className="community-opinion-pane">
        <InfoBox>{t("community_info_b")}</InfoBox>
        <UserOpinionEntry
          slug="community_like"
          title={community_like_title}
          userValue={props.building.community_like}
          onChange={props.onSaveChange}
          mode={props.mode}
          copy={props.copy}
        />
        <LogicalDataEntry
          slug="community_type_worth_keeping"
          title={community_type_worth_keeping_title}
          value={props.building.community_type_worth_keeping}
          disallowFalse={worthKeepingReasonsNonEmpty}
          disallowNull={worthKeepingReasonsNonEmpty}
          onChange={props.onSaveChange}
          mode={props.mode}
          copy={props.copy}
        />
        {props.building.community_type_worth_keeping !== false && (
          <MultiSelectDataEntry
            slug="community_type_worth_keeping_reasons"
            title={community_type_worth_keeping_reasons_title}
            value={props.building.community_type_worth_keeping_reasons}
            disabled={!props.building.community_type_worth_keeping}
            onChange={props.onSaveChange}
            options={community_options}
            mode={props.mode}
          />
        )}

        <UserOpinionEntry
          slug="community_local_significance"
          title={community_local_significance_title}
          userValue={props.building.community_local_significance}
          onChange={props.onSaveChange}
          mode={props.mode}
          copy={props.copy}
        />
      </div>

      <InfoBox>
      {t("community_info_c")}
      </InfoBox>
      <LogicalDataEntry
        slug="community_activities"
        title={community_activities_title}
        tooltip={community_activities_tooltip}
        value={props.building.community_activities}
        onChange={props.onChange}
        mode={props.mode}
      />
      {/* TODO: dates */}
      {
        // props.building.community_activities === true &&
        // <FieldRow>
        //     <div>
        //     </div>
        //     <div>
        //     </div>
        // </FieldRow>
      }

      <SelectDataEntryMultiLingual
        title={ownership_type_title}
        slug="ownership_type"
        value={props.building.ownership_type}
        tooltip={ownership_type_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
      {/* <SelectDataEntry
            slug='community_public_ownership'
            title={dataFields.community_public_ownership.title}
            value={props.building.community_public_ownership}
            options={[
                'State-owned',
                'Charity-owned',
                'Community-owned/cooperative',
                'Owned by other non-profit body',
                'Not in public/community ownership',
            ]}

            onChange={props.onChange}
            mode={props.mode}
            copy={props.copy}
        /> */}
      {/* <Verification
                slug="ownership_type"
                allow_verify={props.user !== undefined && props.building.ownership_type !== null && !props.edited}
                onVerify={props.onVerify}
                user_verified={props.user_verified.hasOwnProperty("ownership_type")}
                user_verified_as={props.user_verified.ownership_type}
                verified_count={props.building.verified.ownership_type}
                /> */}
      <VerificationMultilingual
        slug="ownership_type"
        allow_verify={
          props.user !== undefined &&
          props.building.ownership_type !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("ownership_type")}
        user_verified_as={props.user_verified.ownership_type}
        verified_count={props.building.verified.ownership_type}
      />

      <MultiDataEntry
        slug="community_public_ownership_sources"
        title={community_public_ownership_sources_title}
        isUrl={true}
        placeholder={"https://..."}
        editableEntries={true}
        value={props.building.community_public_ownership_sources}
        onChange={props.onChange}
        mode={props.mode}
      />
    </>
  );
};
const CommunityContainer = withCopyEdit(CommunityView);

export default CommunityContainer;
