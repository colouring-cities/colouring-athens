import React, { Fragment } from "react";

import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import NumericDataEntry from "../data-components/numeric-data-entry";
import SelectDataEntry from "../data-components/select-data-entry";
import Verification from "../data-components/verification";
import withCopyEdit from "../data-container";
import VerificationMultilingual from "../data-components/verification-multilingual";
import { CategoryViewProps } from "./category-view-props";
import i18next from "i18next";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";
import CheckboxDataEntry from "../data-components/checkbox-data-entry";
import { LogicalDataEntry } from "../data-components/logical-data-entry/logical-data-entry";

/**
 * Sustainability view/edit section
 */
const SustainabilityView: React.FunctionComponent<CategoryViewProps> = (
  props
) => {
  let has_photovoltaic_panels_title =
    dataFields.has_photovoltaic_panels.title_en;
  let has_photovoltaic_panels_tooltip =
    dataFields.has_photovoltaic_panels.tooltip_en;
  let visible_collapse_risk_title = dataFields.visible_collapse_risk.title_en;
  let visible_collapse_risk_tooltip =
    dataFields.visible_collapse_risk.tooltip_en;
  let building_state_title = dataFields.building_state.title_en;
  let building_state_tooltip = dataFields.building_state.tooltip_en;
  let energy_class_title = dataFields.energy_class.title_en;
  let energy_class_tooltip = dataFields.energy_class.tooltip_en;

  if (i18next.language === "gr") {
    has_photovoltaic_panels_title = dataFields.has_photovoltaic_panels.title_gr;
    has_photovoltaic_panels_tooltip =
      dataFields.has_photovoltaic_panels.tooltip_gr;
    visible_collapse_risk_title = dataFields.visible_collapse_risk.title_gr;
    visible_collapse_risk_tooltip = dataFields.visible_collapse_risk.tooltip_gr;
    building_state_title = dataFields.building_state.title_gr;
    building_state_tooltip = dataFields.building_state.tooltip_gr;
    energy_class_title = dataFields.energy_class.title_gr;
    energy_class_tooltip = dataFields.energy_class.tooltip_gr;
  }

  return (
    <Fragment>
      <SelectDataEntry
        title={energy_class_title}
        slug="energy_class"
        value={props.building.energy_class}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        // tooltip={energy_class_tooltip}
        // placeholder=""
        options={["A+", "A", "B+", "B", "Γ", "Δ", "Ε", "Ζ", "Η"]}
        disabled={true}
      />

      {/* <CheckboxDataEntry
        title={has_photovoltaic_panels_title}
        slug="has_photovoltaic_panels"
        value={props.building.has_photovoltaic_panels}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      /> */}
        <LogicalDataEntry
          slug="has_photovoltaic_panels"
          title={has_photovoltaic_panels_title}
          value={props.building.has_photovoltaic_panels}
          onChange={props.onSaveChange}
          mode={props.mode}
          copy={props.copy}
        />
      <Verification
        slug="has_photovoltaic_panels"
        allow_verify={
          props.user !== undefined &&
          props.building.has_photovoltaic_panels !== null
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "has_photovoltaic_panels"
        )}
        user_verified_as={props.user_verified.has_photovoltaic_panels}
        verified_count={props.building.verified.has_photovoltaic_panels}
      />

      <SelectDataEntryMultiLingual
        title={building_state_title}
        slug="building_state"
        value={props.building.building_state}
        // tooltip={building_state_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
      <VerificationMultilingual
        slug="building_state"
        allow_verify={
          props.user !== undefined &&
          props.building.building_state !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "building_state"
        )}
        user_verified_as={props.user_verified.building_state}
        verified_count={props.building.verified.building_state}
      />

      {/* <CheckboxDataEntry
        title={visible_collapse_risk_title}
        slug="visible_collapse_risk"
        value={props.building.visible_collapse_risk}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      /> */}
      <LogicalDataEntry
          slug="visible_collapse_risk"
          title={visible_collapse_risk_title}
          value={props.building.visible_collapse_risk}
          onChange={props.onSaveChange}
          mode={props.mode}
          copy={props.copy}
        />
      <Verification
        slug="visible_collapse_risk"
        allow_verify={
          props.user !== undefined &&
          props.building.visible_collapse_risk !== null
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "visible_collapse_risk"
        )}
        user_verified_as={props.user_verified.visible_collapse_risk}
        verified_count={props.building.verified.visible_collapse_risk}
      />
    </Fragment>
  );
};
const SustainabilityContainer = withCopyEdit(SustainabilityView);

export default SustainabilityContainer;
