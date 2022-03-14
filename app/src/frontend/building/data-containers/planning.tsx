import React, { Fragment } from "react";

import InfoBox from "../../components/info-box";
import { dataFields } from "../../config/data-fields-config";
import CheckboxDataEntry from "../data-components/checkbox-data-entry";
import DataEntry from "../data-components/data-entry";
import { DataEntryGroup } from "../data-components/data-entry-group";
import SelectDataEntry from "../data-components/select-data-entry";
import Verification from "../data-components/verification";
import withCopyEdit from "../data-container";

import { CategoryViewProps } from "./category-view-props";
// import { LogicalDataEntry } from "../data-components/logical-data-entry/logical-data-entry";
import i18next from "i18next";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";
import NumericDataEntry from "../data-components/numeric-data-entry";

/**
 * Planning view/edit section
 */
const PlanningView: React.FunctionComponent<CategoryViewProps> = (props) => {
  let inside_protected_area_title = dataFields.inside_protected_area.title_en;
  let inside_protected_area_tooltip =
    dataFields.inside_protected_area.tooltip_en;

  let inside_archaelogical_area_title =
    dataFields.inside_archaelogical_area.title_en;
  let inside_archaelogical_area_tooltip =
    dataFields.inside_archaelogical_area.tooltip_en;

  let inside_energy_area_title = dataFields.inside_energy_area.title_en;
  let inside_energy_area_tooltip = dataFields.inside_energy_area.tooltip_en;

  let officially_protected_title = dataFields.officially_protected.title_en;
  let officially_protected_tooltip = dataFields.officially_protected.tooltip_en;

  let officially_preserved_title = dataFields.officially_preserved.title_en;
  let officially_preserved_tooltip = dataFields.officially_preserved.tooltip_en;

  let preservation_designation_title =
    dataFields.preservation_designation.title_en;
  let preservation_designation_tooltip =
    dataFields.preservation_designation.tooltip_en;

  let officially_monument_title = dataFields.officially_monument.title_en;
  let officially_monument_tooltip = dataFields.officially_monument.tooltip_en;

  let monument_designation_title = dataFields.monument_designation.title_en;
  let monument_designation_tooltip = dataFields.monument_designation.tooltip_en;

  let fek_issue_title = dataFields.fek_issue.title_en;
  let fek_issue_tooltip = dataFields.fek_issue.tooltip_en;

  let fek_number_title = dataFields.fek_number.title_en;
  let fek_number_tooltip = dataFields.fek_number.tooltip_en;

  let fek_date_title = dataFields.fek_date.title_en;
  let fek_date_tooltip = dataFields.fek_date.tooltip_en;

  if (i18next.language === "gr") {
    inside_protected_area_title = dataFields.inside_protected_area.title_gr;
    inside_protected_area_tooltip = dataFields.inside_protected_area.tooltip_gr;

    inside_archaelogical_area_title =
      dataFields.inside_archaelogical_area.title_gr;
    inside_archaelogical_area_tooltip =
      dataFields.inside_archaelogical_area.tooltip_gr;

    inside_energy_area_title = dataFields.inside_energy_area.title_gr;
    inside_energy_area_tooltip = dataFields.inside_energy_area.tooltip_gr;

    officially_protected_title = dataFields.officially_protected.title_gr;
    officially_protected_tooltip = dataFields.officially_protected.tooltip_gr;

    officially_preserved_title = dataFields.officially_preserved.title_gr;
    officially_preserved_tooltip = dataFields.officially_preserved.tooltip_gr;

    preservation_designation_title =
      dataFields.preservation_designation.title_gr;
    preservation_designation_tooltip =
      dataFields.preservation_designation.tooltip_gr;

    officially_monument_title = dataFields.officially_monument.title_gr;
    officially_monument_tooltip = dataFields.officially_monument.tooltip_gr;

    monument_designation_title = dataFields.monument_designation.title_gr;
    monument_designation_tooltip = dataFields.monument_designation.tooltip_gr;

    fek_issue_title = dataFields.fek_issue.title_gr;
    fek_issue_tooltip = dataFields.fek_issue.tooltip_gr;

    fek_number_title = dataFields.fek_number.title_gr;
    fek_number_tooltip = dataFields.fek_number.tooltip_gr;

    fek_date_title = dataFields.fek_date.title_gr;
    fek_date_tooltip = dataFields.fek_date.tooltip_gr;
  }

  return (
    <Fragment>
      <DataEntryGroup name="Protection" collapsed={false}>
        <CheckboxDataEntry
          title={inside_protected_area_title}
          slug="inside_protected_area"
          value={props.building.inside_protected_area}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
        />

        <CheckboxDataEntry
          title={inside_archaelogical_area_title}
          slug="inside_archaelogical_area"
          value={props.building.inside_archaelogical_area}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
        />

        <CheckboxDataEntry
          title={inside_energy_area_title}
          slug="inside_energy_area"
          value={props.building.inside_energy_area}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
        />

        <CheckboxDataEntry
          title={officially_protected_title}
          slug="officially_protected"
          value={props.building.officially_protected}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
        />

        <CheckboxDataEntry
          title={officially_preserved_title}
          slug="officially_preserved"
          value={props.building.officially_preserved}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
        />

        {props.building.officially_preserved !== false && (
          <SelectDataEntryMultiLingual
            title={preservation_designation_title}
            slug="preservation_designation"
            value={props.building.preservation_designation}
            tooltip={preservation_designation_tooltip}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
          />
        )}

        <CheckboxDataEntry
          title={officially_monument_title}
          slug="officially_monument"
          value={props.building.officially_monument}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
        />

        {props.building.officially_monument !== false && (
          <SelectDataEntryMultiLingual
            title={monument_designation_title}
            slug="monument_designation"
            value={props.building.monument_designation}
            tooltip={monument_designation_tooltip}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
          />
        )}

        <SelectDataEntryMultiLingual
          title={fek_issue_title}
          slug="fek_issue"
          value={props.building.fek_issue}
          tooltip={fek_issue_tooltip}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
        />

<NumericDataEntry
        title={fek_number_title}
        slug="fek_number"
        value={props.building.fek_number}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        step={1}
        tooltip={fek_number_tooltip}
      />
      </DataEntryGroup>
    </Fragment>
  );
};
const PlanningContainer = withCopyEdit(PlanningView);

export default PlanningContainer;
