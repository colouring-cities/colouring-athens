import React, { Fragment } from "react";

import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import { DataEntryGroup } from "../data-components/data-entry-group";
import NumericDataEntry from "../data-components/numeric-data-entry";
import SelectDataEntry from "../data-components/select-data-entry";
import Verification from "../data-components/verification";
import withCopyEdit from "../data-container";

import { CategoryViewProps } from "./category-view-props";
// import { useTranslation } from "react-i18next";
import { LogicalDataEntry } from "../data-components/logical-data-entry/logical-data-entry";
import i18next from "i18next";

/**
 * Size view/edit section
 */
const SizeView: React.FunctionComponent<CategoryViewProps> = (props) => {
  let size_storeys_core_title = dataFields.size_storeys_core.title_en;
  let size_storeys_core_tooltip = dataFields.size_storeys_core.tooltip_en;
  let size_storeys_basement_title = dataFields.size_storeys_basement.title_en;
  let size_storeys_basement_tooltip =
    dataFields.size_storeys_basement.tooltip_en;
  let pilotis_title = dataFields.pilotis.title_en;
  let pilotis_tooltip = dataFields.pilotis.tooltip_en;
  let high_ground_floor_title = dataFields.high_ground_floor.title_en;
  let high_ground_floor_tooltip = dataFields.high_ground_floor.tooltip_en;
  let height_title = dataFields.size_height_apex.title_en;
  let height_tooltip = dataFields.size_height_apex.tooltip_en;
  let floor_area_ground_title = dataFields.size_floor_area_ground.title_en;
  let floor_area_ground_tooltip = dataFields.size_floor_area_ground.tooltip_en;
  let floor_area_total_title = dataFields.size_floor_area_total.title_en;
  let floor_area_total_tooltip = dataFields.size_floor_area_total.tooltip_en;
  let width_frontage_title = dataFields.size_width_frontage.title_en;
  let width_frontage_tooltip = dataFields.size_width_frontage.tooltip_en;

  if (i18next.language === "gr") {
    size_storeys_core_title = dataFields.size_storeys_core.title_gr;
    size_storeys_core_tooltip = dataFields.size_storeys_core.tooltip_gr;
    size_storeys_basement_title = dataFields.size_storeys_basement.title_gr;
    size_storeys_basement_tooltip = dataFields.size_storeys_basement.tooltip_gr;
    pilotis_title = dataFields.pilotis.title_gr;
    pilotis_tooltip = dataFields.pilotis.tooltip_gr;
    high_ground_floor_title = dataFields.high_ground_floor.title_gr;
    high_ground_floor_tooltip = dataFields.high_ground_floor.tooltip_gr;
    height_title = dataFields.size_height_apex.title_gr;
    height_tooltip = dataFields.size_height_apex.tooltip_gr;
    floor_area_ground_title = dataFields.size_floor_area_ground.title_gr;
    floor_area_ground_tooltip =
      dataFields.size_floor_area_ground.tooltip_gr;
    floor_area_total_title = dataFields.size_floor_area_total.title_gr;
    floor_area_total_tooltip = dataFields.size_floor_area_total.tooltip_gr;
    width_frontage_title = dataFields.size_width_frontage.title_gr;
    width_frontage_tooltip = dataFields.size_width_frontage.tooltip_gr;
  }

  return (
    <Fragment>
      <DataEntryGroup name="Storeys" collapsed={false}>
        <NumericDataEntry
          title={size_storeys_core_title}
          slug="size_storeys_core"
          value={props.building.size_storeys_core}
          mode={props.mode}
          copy={props.copy}
          tooltip={size_storeys_core_tooltip}
          onChange={props.onChange}
          step={1}
          min={0}
        />

        <NumericDataEntry
          title={size_storeys_basement_title}
          slug="size_storeys_basement"
          value={props.building.size_storeys_basement}
          mode={props.mode}
          copy={props.copy}
          tooltip={size_storeys_basement_tooltip}
          onChange={props.onChange}
          step={1}
          min={0}
        />

        <LogicalDataEntry
          slug="pilotis"
          title={pilotis_title}
          tooltip={pilotis_tooltip}
          value={props.building.pilotis}
          onChange={props.onChange}
          mode={props.mode}
        />

        <LogicalDataEntry
          slug="high_ground_floor"
          title={high_ground_floor_title}
          tooltip={high_ground_floor_tooltip}
          value={props.building.high_ground_floor}
          onChange={props.onChange}
          mode={props.mode}
        />

        <NumericDataEntry
          title={height_title}
          slug="size_height_apex"
          value={props.building.size_height_apex}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          step={0.1}
          min={0}
        />
      </DataEntryGroup>
      <DataEntryGroup name="Area" collapsed={true}>
        <NumericDataEntry
          title={floor_area_ground_title}
          slug="size_floor_area_ground"
          value={props.building.size_floor_area_ground}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          step={0.1}
          min={0}
        />
        <Verification
          slug="size_floor_area_ground"
          allow_verify={
            props.user !== undefined &&
            props.building.size_floor_area_ground !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "size_floor_area_ground"
          )}
          user_verified_as={props.user_verified.size_floor_area_ground}
          verified_count={props.building.verified.size_floor_area_ground}
        />

        <NumericDataEntry
          title={floor_area_total_title}
          slug="size_floor_area_total"
          value={props.building.size_floor_area_total}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          step={0.1}
          min={0}
        />
        <Verification
          slug="size_floor_area_total"
          allow_verify={
            props.user !== undefined &&
            props.building.size_floor_area_total !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "size_floor_area_total"
          )}
          user_verified_as={props.user_verified.size_floor_area_total}
          verified_count={props.building.verified.size_floor_area_total}
        />

        <NumericDataEntry
          title={width_frontage_title}
          slug="size_width_frontage"
          value={props.building.size_width_frontage}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          step={0.1}
          min={0}
        />
        <Verification
          slug="size_width_frontage"
          allow_verify={
            props.user !== undefined &&
            props.building.size_width_frontage !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "size_width_frontage"
          )}
          user_verified_as={props.user_verified.size_width_frontage}
          verified_count={props.building.verified.size_width_frontage}
        />
      </DataEntryGroup>
    </Fragment>
  );
};
const SizeContainer = withCopyEdit(SizeView);

export default SizeContainer;
