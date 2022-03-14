import React, { Fragment } from "react";
import InfoBox from "../../components/info-box";
import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import NumericDataEntry from "../data-components/numeric-data-entry";

import withCopyEdit from "../data-container";

import { CategoryViewProps } from "./category-view-props";
// import { useTranslation } from "react-i18next";
import { LogicalDataEntry } from "../data-components/logical-data-entry/logical-data-entry";
import i18next from "i18next";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";

/**
 * Streetscape view/edit section
 */
const StreetscapeView: React.FunctionComponent<CategoryViewProps> = (props) => {
  //   const { t } = useTranslation();
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

      <LogicalDataEntry
        slug="has_sidewalk"
        title={has_sidewalk_title}
        tooltip={has_sidewalk_tooltip}
        value={props.building.has_sidewalk}
        onChange={props.onChange}
        mode={props.mode}
      />

      <NumericDataEntry
        title={sidewalk_width_title}
        slug="sidewalk_width"
        value={props.building.sidewalk_width}
        mode={props.mode}
        copy={props.copy}
        tooltip={sidewalk_width_tooltip}
        onChange={props.onChange}
        step={1}
        min={0}
      />

      <NumericDataEntry
        title={road_width_title}
        slug="road_width"
        value={props.building.road_width}
        mode={props.mode}
        copy={props.copy}
        tooltip={road_width_tooltip}
        onChange={props.onChange}
        step={0.1}
        min={0}
      />

      <LogicalDataEntry
        slug="sidewalk_accessibility"
        title={sidewalk_accessibility_title}
        tooltip={sidewalk_accessibility_tooltip}
        value={props.building.sidewalk_accessibility}
        onChange={props.onChange}
        mode={props.mode}
      />

      <LogicalDataEntry
        slug="sidewalk_lawn"
        title={sidewalk_lawn_title}
        tooltip={sidewalk_lawn_tooltip}
        value={props.building.sidewalk_lawn}
        onChange={props.onChange}
        mode={props.mode}
      />

      <LogicalDataEntry
        slug="sidewalk_trees"
        title={sidewalk_trees_title}
        tooltip={sidewalk_trees_tooltip}
        value={props.building.sidewalk_trees}
        onChange={props.onChange}
        mode={props.mode}
      />

      <SelectDataEntryMultiLingual
        title={noise_level_title}
        slug="noise_level"
        value={props.building.noise_level}
        tooltip={noise_level_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />

      <LogicalDataEntry
        slug="has_pavement"
        title={has_pavement_title}
        tooltip={has_pavement_tooltip}
        value={props.building.has_pavement}
        onChange={props.onChange}
        mode={props.mode}
      />

      <LogicalDataEntry
        slug="has_cycling_track"
        title={has_cycling_track_title}
        tooltip={has_cycling_track_tooltip}
        value={props.building.has_cycling_track}
        onChange={props.onChange}
        mode={props.mode}
      />

      <LogicalDataEntry
        slug="has_parodia_stoa"
        title={has_parodia_stoa_title}
        tooltip={has_parodia_stoa_tooltip}
        value={props.building.has_parodia_stoa}
        onChange={props.onChange}
        mode={props.mode}
      />

      <LogicalDataEntry
        slug="has_egkarsia_stoa"
        title={has_egkarsia_stoa_title}
        tooltip={has_egkarsia_stoa_tooltip}
        value={props.building.has_egkarsia_stoa}
        onChange={props.onChange}
        mode={props.mode}
      />
    </Fragment>
  );
};
const StreetscapeContainer = withCopyEdit(StreetscapeView);

export default StreetscapeContainer;
