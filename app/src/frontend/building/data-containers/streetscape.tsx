import React, { Fragment } from "react";
import InfoBox from "../../components/info-box";
import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import NumericDataEntry from "../data-components/numeric-data-entry";
import Verification from "../data-components/verification";
import withCopyEdit from "../data-container";
import VerificationMultilingual from "../data-components/verification-multilingual";
import { CategoryViewProps } from "./category-view-props";
import { useTranslation } from "react-i18next";
import { LogicalDataEntry } from "../data-components/logical-data-entry/logical-data-entry";
import i18next from "i18next";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";

/**
 * Streetscape view/edit section
 */
const StreetscapeView: React.FunctionComponent<CategoryViewProps> = (props) => {
    const { t } = useTranslation();
  let has_sidewalk_title = dataFields.has_sidewalk.title_en;
  let has_sidewalk_tooltip = dataFields.has_sidewalk.tooltip_en;

  let sidewalk_width_title = dataFields.sidewalk_width.title_en;
  let sidewalk_width_tooltip = dataFields.sidewalk_width.tooltip_en;

  let road_width_title = dataFields.road_width.title_en;
  let road_width_tooltip = dataFields.road_width.tooltip_en;

  let sidewalk_accessibility_title = dataFields.sidewalk_accessibility.title_en;
  let sidewalk_accessibility_tooltip =
    dataFields.sidewalk_accessibility.tooltip_en;

  let sidewalk_lawn_title = dataFields.sidewalk_lawn.title_en;
  let sidewalk_lawn_tooltip = dataFields.sidewalk_lawn.tooltip_en;

  let sidewalk_trees_title = dataFields.sidewalk_trees.title_en;
  let sidewalk_trees_tooltip = dataFields.sidewalk_trees.tooltip_en;

  let noise_level_title = dataFields.noise_level.title_en;
  let noise_level_tooltip = dataFields.noise_level.tooltip_en;

  let has_pavement_title = dataFields.has_pavement.title_en;
  let has_pavement_tooltip = dataFields.has_pavement.tooltip_en;

  let has_cycling_track_title = dataFields.has_cycling_track.title_en;
  let has_cycling_track_tooltip = dataFields.has_cycling_track.tooltip_en;

  let has_parodia_stoa_title = dataFields.has_parodia_stoa.title_en;
  let has_parodia_stoa_tooltip = dataFields.has_parodia_stoa.tooltip_en;

  let has_egkarsia_stoa_title = dataFields.has_egkarsia_stoa.title_en;
  let has_egkarsia_stoa_tooltip = dataFields.has_egkarsia_stoa.tooltip_en;

  if (i18next.language === "gr") {
    has_sidewalk_title = dataFields.has_sidewalk.title_gr;
    has_sidewalk_tooltip = dataFields.has_sidewalk.tooltip_gr;

    sidewalk_width_title = dataFields.sidewalk_width.title_gr;
    sidewalk_width_tooltip = dataFields.sidewalk_width.tooltip_gr;

    road_width_title = dataFields.road_width.title_gr;
    road_width_tooltip = dataFields.road_width.tooltip_gr;

    sidewalk_accessibility_title = dataFields.sidewalk_accessibility.title_gr;
    sidewalk_accessibility_tooltip =
      dataFields.sidewalk_accessibility.tooltip_gr;

    sidewalk_lawn_title = dataFields.sidewalk_lawn.title_gr;
    sidewalk_lawn_tooltip = dataFields.sidewalk_lawn.tooltip_gr;

    sidewalk_trees_title = dataFields.sidewalk_trees.title_gr;
    sidewalk_trees_tooltip = dataFields.sidewalk_trees.tooltip_gr;

    noise_level_title = dataFields.noise_level.title_gr;
    noise_level_tooltip = dataFields.noise_level.tooltip_gr;

    has_pavement_title = dataFields.has_pavement.title_gr;
    has_pavement_tooltip = dataFields.has_pavement.tooltip_gr;

    has_cycling_track_title = dataFields.has_cycling_track.title_gr;
    has_cycling_track_tooltip = dataFields.has_cycling_track.tooltip_gr;

    has_parodia_stoa_title = dataFields.has_parodia_stoa.title_gr;
    has_parodia_stoa_tooltip = dataFields.has_parodia_stoa.tooltip_gr;

    has_egkarsia_stoa_title = dataFields.has_egkarsia_stoa.title_gr;
    has_egkarsia_stoa_tooltip = dataFields.has_egkarsia_stoa.tooltip_gr;
  }

  return (
    <Fragment>
      {/* <InfoBox msg="This is what we're planning to collect on the building's context" />
        <ul className="data-list">
            <li>Gardens</li>
            <li>Trees</li>
            <li>Green walls</li>
            <li>Green roof</li>
            <li>Proximity to parks and open greenspace</li>
            <li>Building shading</li>
        </ul> */}

<InfoBox msg={t("streetscape_info")} />

      <LogicalDataEntry
        slug="has_sidewalk"
        title={has_sidewalk_title}
        // tooltip={has_sidewalk_tooltip}
        value={props.building?.has_sidewalk}
        onChange={props.onChange}
        mode={props.mode}
      />
      <Verification
        slug="has_sidewalk"
        allow_verify={
          props.user !== undefined && props.building.has_sidewalk !== null
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("has_sidewalk")}
        user_verified_as={props.user_verified.has_sidewalk}
        verified_count={props.building.verified.has_sidewalk}
      />

      <NumericDataEntry
        title={sidewalk_width_title}
        slug="sidewalk_width"
        value={props.building?.sidewalk_width}
        mode={props.mode}
        copy={props.copy}
        tooltip={sidewalk_width_tooltip}
        onChange={props.onChange}
        step={.1}
        min={0}
      />
      <Verification
        slug="sidewalk_width"
        allow_verify={
          props.user !== undefined && props.building.sidewalk_width !== null
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("sidewalk_width")}
        user_verified_as={props.user_verified.sidewalk_width}
        verified_count={props.building.verified.sidewalk_width}
      />

      <NumericDataEntry
        title={road_width_title}
        slug="road_width"
        value={props.building?.road_width}
        mode={props.mode}
        copy={props.copy}
        tooltip={road_width_tooltip}
        onChange={props.onChange}
        step={0.1}
        min={0}
      />
      <Verification
        slug="road_width"
        allow_verify={
          props.user !== undefined && props.building.road_width !== null
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("road_width")}
        user_verified_as={props.user_verified.road_width}
        verified_count={props.building.verified.road_width}
      />

      <LogicalDataEntry
        slug="sidewalk_accessibility"
        title={sidewalk_accessibility_title}
        // tooltip={sidewalk_accessibility_tooltip}
        value={props.building?.sidewalk_accessibility}
        onChange={props.onChange}
        mode={props.mode}
      />
      <Verification
        slug="sidewalk_accessibility"
        allow_verify={
          props.user !== undefined &&
          props.building.sidewalk_accessibility !== null
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "sidewalk_accessibility"
        )}
        user_verified_as={props.user_verified.sidewalk_accessibility}
        verified_count={props.building.verified.sidewalk_accessibility}
      />

      <LogicalDataEntry
        slug="sidewalk_lawn"
        title={sidewalk_lawn_title}
        // tooltip={sidewalk_lawn_tooltip}
        value={props.building?.sidewalk_lawn}
        onChange={props.onChange}
        mode={props.mode}
      />
      <Verification
        slug="sidewalk_lawn"
        allow_verify={
          props.user !== undefined && props.building.sidewalk_lawn !== null
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("sidewalk_lawn")}
        user_verified_as={props.user_verified.sidewalk_lawn}
        verified_count={props.building.verified.sidewalk_lawn}
      />

      <LogicalDataEntry
        slug="sidewalk_trees"
        title={sidewalk_trees_title}
        // tooltip={sidewalk_trees_tooltip}
        value={props.building?.sidewalk_trees}
        onChange={props.onChange}
        mode={props.mode}
      />
      <Verification
        slug="sidewalk_trees"
        allow_verify={
          props.user !== undefined && props.building.sidewalk_trees !== null
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("sidewalk_trees")}
        user_verified_as={props.user_verified.sidewalk_trees}
        verified_count={props.building.verified.sidewalk_trees}
      />

      <SelectDataEntryMultiLingual
        title={noise_level_title}
        slug="noise_level"
        value={props.building?.noise_level}
        // tooltip={noise_level_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
      <VerificationMultilingual
        slug="noise_level"
        allow_verify={
          props.user !== undefined &&
          props.building.noise_level !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("noise_level")}
        user_verified_as={props.user_verified.noise_level}
        verified_count={props.building.verified.noise_level}
      />

      <LogicalDataEntry
        slug="has_pavement"
        title={has_pavement_title}
        // tooltip={has_pavement_tooltip}
        value={props.building?.has_pavement}
        onChange={props.onChange}
        mode={props.mode}
      />
      <Verification
        slug="has_pavement"
        allow_verify={
          props.user !== undefined && props.building.has_pavement !== null
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("has_pavement")}
        user_verified_as={props.user_verified.has_pavement}
        verified_count={props.building.verified.has_pavement}
      />

      <LogicalDataEntry
        slug="has_cycling_track"
        title={has_cycling_track_title}
        // tooltip={has_cycling_track_tooltip}
        value={props.building?.has_cycling_track}
        onChange={props.onChange}
        mode={props.mode}
      />
      <Verification
        slug="has_cycling_track"
        allow_verify={
          props.user !== undefined && props.building.has_cycling_track !== null
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("has_cycling_track")}
        user_verified_as={props.user_verified.has_cycling_track}
        verified_count={props.building.verified.has_cycling_track}
      />

      <LogicalDataEntry
        slug="has_parodia_stoa"
        title={has_parodia_stoa_title}
        // tooltip={has_parodia_stoa_tooltip}
        value={props.building?.has_parodia_stoa}
        onChange={props.onChange}
        mode={props.mode}
      />
      <Verification
        slug="has_parodia_stoa"
        allow_verify={
          props.user !== undefined && props.building.has_parodia_stoa !== null
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("has_parodia_stoa")}
        user_verified_as={props.user_verified.has_parodia_stoa}
        verified_count={props.building.verified.has_parodia_stoa}
      />

      <LogicalDataEntry
        slug="has_egkarsia_stoa"
        title={has_egkarsia_stoa_title}
        // tooltip={has_egkarsia_stoa_tooltip}
        value={props.building?.has_egkarsia_stoa}
        onChange={props.onChange}
        mode={props.mode}
      />
      <Verification
        slug="has_egkarsia_stoa"
        allow_verify={
          props.user !== undefined && props.building.has_egkarsia_stoa !== null
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("has_egkarsia_stoa")}
        user_verified_as={props.user_verified.has_egkarsia_stoa}
        verified_count={props.building.verified.has_egkarsia_stoa}
      />
    </Fragment>
  );
};
const StreetscapeContainer = withCopyEdit(StreetscapeView);

export default StreetscapeContainer;
