import React, { Fragment } from "react";

import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import NumericDataEntry from "../data-components/numeric-data-entry";
import SelectDataEntry from "../data-components/select-data-entry";
import Verification from "../data-components/verification";
import withCopyEdit from "../data-container";

import { CategoryViewProps } from "./category-view-props";
import i18next from "i18next";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";
import CheckboxDataEntry from "../data-components/checkbox-data-entry";

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
        tooltip={energy_class_tooltip}
        // placeholder=""
        options={["A+", "A", "B+", "B", "Γ", "Δ", "Ε", "Ζ", "Η"]}
      />

      <CheckboxDataEntry
        title={has_photovoltaic_panels_title}
        slug="has_photovoltaic_panels"
        value={props.building.has_photovoltaic_panels}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />

      <SelectDataEntryMultiLingual
        title={building_state_title}
        slug="preservation_designation"
        value={props.building.building_state}
        tooltip={building_state_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />

      <CheckboxDataEntry
        title={visible_collapse_risk_title}
        slug="visible_collapse_risk"
        value={props.building.visible_collapse_risk}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
    </Fragment>
  );
};
const SustainabilityContainer = withCopyEdit(SustainabilityView);

export default SustainabilityContainer;
