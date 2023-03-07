import React, { Fragment } from "react";

// import InfoBox from "../../components/info-box";
import { dataFields } from "../../config/data-fields-config";
import CheckboxDataEntry from "../data-components/checkbox-data-entry";
import DataEntry from "../data-components/data-entry";
import { DataEntryGroup } from "../data-components/data-entry-group";
// import SelectDataEntry from "../data-components/select-data-entry";
import Verification from "../data-components/verification";
import DateVerification from "../data-components/verification-date";
import withCopyEdit from "../data-container";
import VerificationMultilingual from "../data-components/verification-multilingual";
import { CategoryViewProps } from "./category-view-props";
// import { LogicalDataEntry } from "../data-components/logical-data-entry/logical-data-entry";
import i18next from "i18next";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";
import NumericDataEntry from "../data-components/numeric-data-entry";
import NumericDataEntryFekNumber from "../data-components/numeric-data-fek-number";
import { useTranslation } from "react-i18next";
import DateDataEntry from "../data-components/date-data-entry";
import { LogicalDataEntry } from "../data-components/logical-data-entry/logical-data-entry";

/**
 * Planning view/edit section
 */
const PlanningView: React.FunctionComponent<CategoryViewProps> = (props) => {
  let allowed_far_title = dataFields.allowed_far.title_en;
  let allowed_far_tooltip = dataFields.allowed_far.tooltip_en;

  let allowed_plot_coverage_title = dataFields.allowed_plot_coverage.title_en;
  let allowed_plot_coverage_tooltip =
    dataFields.allowed_plot_coverage.tooltip_en;

  let maximum_building_height_title =
    dataFields.maximum_building_height.title_en;
  let maximum_building_height_tooltip =
    dataFields.maximum_building_height.tooltip_en;

  let inside_archaelogical_area_title =
    dataFields.inside_archaelogical_area.title_en;
  let inside_archaelogical_area_tooltip =
    dataFields.inside_archaelogical_area.tooltip_en;

  let name_of_archaelogical_area_title =
    dataFields.name_of_archaelogical_area.title_en;
  let name_of_archaelogical_area_tooltip =
    dataFields.name_of_archaelogical_area.tooltip_en;
  let fek_issue_archaelogical_title =
    dataFields.fek_issue_archaelogical.title_en;
  let fek_issue_archaelogical_tooltip =
    dataFields.fek_issue_archaelogical.tooltip_en;

  let fek_number_archaelogical_title =
    dataFields.fek_number_archaelogical.title_en;
  let fek_number_archaelogical_tooltip =
    dataFields.fek_number_archaelogical.tooltip_en;

  let fek_date_archaelogical_title = dataFields.fek_date_archaelogical.title_en;
  let fek_date_archaelogical_tooltip =
    dataFields.fek_date_archaelogical.tooltip_en;

  let inside_energy_area_title = dataFields.inside_energy_area.title_en;
  let inside_energy_area_tooltip = dataFields.inside_energy_area.tooltip_en;

  let name_of_energy_area_title = dataFields.name_of_energy_area.title_en;
  let name_of_energy_area_tooltip = dataFields.name_of_energy_area.tooltip_en;
  let fek_issue_energy_title = dataFields.fek_issue_energy.title_en;
  let fek_issue_energy_tooltip = dataFields.fek_issue_energy.tooltip_en;

  let fek_number_energy_title = dataFields.fek_number_energy.title_en;
  let fek_number_energy_tooltip = dataFields.fek_number_energy.tooltip_en;

  let fek_date_energy_title = dataFields.fek_date_energy.title_en;
  let fek_date_energy_tooltip = dataFields.fek_date_energy.tooltip_en;

  // let inside_protected_area_title = dataFields.inside_protected_area.title_en;
  // let inside_protected_area_tooltip =
  //   dataFields.inside_protected_area.tooltip_en;
  // let name_of_protected_area_title = dataFields.name_of_protected_area.title_en;
  // let name_of_protected_area_tooltip =
  //   dataFields.name_of_protected_area.tooltip_en;
  // let fek_issue_protected_title = dataFields.fek_issue_protected.title_en;
  // let fek_issue_protected_tooltip = dataFields.fek_issue_protected.tooltip_en;

  // let fek_number_protected_title = dataFields.fek_number_protected.title_en;
  // let fek_number_protected_tooltip = dataFields.fek_number_protected.tooltip_en;

  // let fek_date_protected_title = dataFields.fek_date_protected.title_en;
  // let fek_date_protected_tooltip = dataFields.fek_date_protected.tooltip_en;

  // let officially_protected_title = dataFields.officially_protected.title_en;
  // let officially_protected_tooltip = dataFields.officially_protected.tooltip_en;

  let officially_preserved_title = dataFields.officially_preserved.title_en;
  let officially_preserved_tooltip = dataFields.officially_preserved.tooltip_en;

  let preservation_designation_title =
    dataFields.preservation_designation.title_en;
  let preservation_designation_tooltip =
    dataFields.preservation_designation.tooltip_en;

  let name_of_officially_preserved_building_title =
    dataFields.name_of_officially_preserved_building.title_en;
  let name_of_officially_preserved_building_tooltip =
    dataFields.name_of_officially_preserved_building.tooltip_en;

  let fek_issue_officially_preserved_title =
    dataFields.fek_issue_officially_preserved.title_en;
  let fek_issue_officially_preserved_tooltip =
    dataFields.fek_issue_officially_preserved.tooltip_en;

  let fek_number_officially_preserved_title =
    dataFields.fek_number_officially_preserved.title_en;
  let fek_number_officially_preserved_tooltip =
    dataFields.fek_number_officially_preserved.tooltip_en;

  let fek_date_officially_preserved_title =
    dataFields.fek_date_officially_preserved.title_en;
  let fek_date_officially_preserved_tooltip =
    dataFields.fek_date_officially_preserved.tooltip_en;

  let officially_monument_title = dataFields.officially_monument.title_en;
  let officially_monument_tooltip = dataFields.officially_monument.tooltip_en;

  let monument_designation_title = dataFields.monument_designation.title_en;
  let monument_designation_tooltip = dataFields.monument_designation.tooltip_en;

  let name_of_officially_monument_building_title =
    dataFields.name_of_officially_monument_building.title_en;
  let name_of_officially_monument_building_tooltip =
    dataFields.name_of_officially_monument_building.tooltip_en;

  let fek_issue_officially_monument_title =
    dataFields.fek_issue_officially_monument.title_en;
  let fek_issue_officially_monument_tooltip =
    dataFields.fek_issue_officially_monument.tooltip_en;

  let fek_number_officially_monument_title =
    dataFields.fek_number_officially_monument.title_en;
  let fek_number_officially_monument_tooltip =
    dataFields.fek_number_officially_monument.tooltip_en;

  let fek_date_officially_monument_title =
    dataFields.fek_date_officially_monument.title_en;
  let fek_date_officially_monument_tooltip =
    dataFields.fek_date_officially_monument.tooltip_en;

  if (i18next.language === "gr") {
    allowed_far_title = dataFields.allowed_far.title_gr;
    allowed_far_tooltip = dataFields.allowed_far.tooltip_gr;

    allowed_plot_coverage_title = dataFields.allowed_plot_coverage.title_gr;
    allowed_plot_coverage_tooltip = dataFields.allowed_plot_coverage.tooltip_gr;

    maximum_building_height_title = dataFields.maximum_building_height.title_gr;
    maximum_building_height_tooltip =
      dataFields.maximum_building_height.tooltip_gr;

    inside_archaelogical_area_title =
      dataFields.inside_archaelogical_area.title_gr;
    inside_archaelogical_area_tooltip =
      dataFields.inside_archaelogical_area.tooltip_gr;

    name_of_archaelogical_area_title =
      dataFields.name_of_archaelogical_area.title_gr;
    name_of_archaelogical_area_tooltip =
      dataFields.name_of_archaelogical_area.tooltip_gr;
    fek_issue_archaelogical_title = dataFields.fek_issue_archaelogical.title_gr;
    fek_issue_archaelogical_tooltip =
      dataFields.fek_issue_archaelogical.tooltip_gr;

    fek_number_archaelogical_title =
      dataFields.fek_number_archaelogical.title_gr;
    fek_number_archaelogical_tooltip =
      dataFields.fek_number_archaelogical.tooltip_gr;

    fek_date_archaelogical_title = dataFields.fek_date_archaelogical.title_gr;
    fek_date_archaelogical_tooltip =
      dataFields.fek_date_archaelogical.tooltip_gr;

    inside_energy_area_title = dataFields.inside_energy_area.title_gr;
    inside_energy_area_tooltip = dataFields.inside_energy_area.tooltip_gr;

    name_of_energy_area_title = dataFields.name_of_energy_area.title_gr;
    name_of_energy_area_tooltip = dataFields.name_of_energy_area.tooltip_gr;
    fek_issue_energy_title = dataFields.fek_issue_energy.title_gr;
    fek_issue_energy_tooltip = dataFields.fek_issue_energy.tooltip_gr;

    fek_number_energy_title = dataFields.fek_number_energy.title_gr;
    fek_number_energy_tooltip = dataFields.fek_number_energy.tooltip_gr;

    fek_date_energy_title = dataFields.fek_date_energy.title_gr;
    fek_date_energy_tooltip = dataFields.fek_date_energy.tooltip_gr;

    // inside_protected_area_title = dataFields.inside_protected_area.title_gr;
    // inside_protected_area_tooltip = dataFields.inside_protected_area.tooltip_gr;
    // name_of_protected_area_title = dataFields.name_of_protected_area.title_gr;
    // name_of_protected_area_tooltip =
    //   dataFields.name_of_protected_area.tooltip_gr;
    // fek_issue_protected_title = dataFields.fek_issue_protected.title_gr;
    // fek_issue_protected_tooltip = dataFields.fek_issue_protected.tooltip_gr;

    // fek_number_protected_title = dataFields.fek_number_protected.title_gr;
    // fek_number_protected_tooltip = dataFields.fek_number_protected.tooltip_gr;

    // fek_date_protected_title = dataFields.fek_date_protected.title_gr;
    // fek_date_protected_tooltip = dataFields.fek_date_protected.tooltip_gr;

    // officially_protected_title = dataFields.officially_protected.title_gr;
    // officially_protected_tooltip = dataFields.officially_protected.tooltip_gr;

    officially_preserved_title = dataFields.officially_preserved.title_gr;
    officially_preserved_tooltip = dataFields.officially_preserved.tooltip_gr;

    preservation_designation_title =
      dataFields.preservation_designation.title_gr;
    preservation_designation_tooltip =
      dataFields.preservation_designation.tooltip_gr;

    name_of_officially_preserved_building_title =
      dataFields.name_of_officially_preserved_building.title_gr;
    name_of_officially_preserved_building_tooltip =
      dataFields.name_of_officially_preserved_building.tooltip_gr;

    fek_issue_officially_preserved_title =
      dataFields.fek_issue_officially_preserved.title_gr;
    fek_issue_officially_preserved_tooltip =
      dataFields.fek_issue_officially_preserved.tooltip_gr;

    fek_number_officially_preserved_title =
      dataFields.fek_number_officially_preserved.title_gr;
    fek_number_officially_preserved_tooltip =
      dataFields.fek_number_officially_preserved.tooltip_gr;

    fek_date_officially_preserved_title =
      dataFields.fek_date_officially_preserved.title_gr;
    fek_date_officially_preserved_tooltip =
      dataFields.fek_date_officially_preserved.tooltip_gr;

    officially_monument_title = dataFields.officially_monument.title_gr;
    officially_monument_tooltip = dataFields.officially_monument.tooltip_gr;

    monument_designation_title = dataFields.monument_designation.title_gr;
    monument_designation_tooltip = dataFields.monument_designation.tooltip_gr;

    name_of_officially_monument_building_title =
      dataFields.name_of_officially_monument_building.title_gr;
    name_of_officially_monument_building_tooltip =
      dataFields.name_of_officially_monument_building.tooltip_gr;

    fek_issue_officially_monument_title =
      dataFields.fek_issue_officially_monument.title_gr;
    fek_issue_officially_monument_tooltip =
      dataFields.fek_issue_officially_monument.tooltip_gr;

    fek_number_officially_monument_title =
      dataFields.fek_number_officially_monument.title_gr;
    fek_number_officially_monument_tooltip =
      dataFields.fek_number_officially_monument.tooltip_gr;

    fek_date_officially_monument_title =
      dataFields.fek_date_officially_monument.title_gr;
    fek_date_officially_monument_tooltip =
      dataFields.fek_date_officially_monument.tooltip_gr;
  }

  const { t } = useTranslation();

  return (
    <Fragment>
      {/* <DataEntryGroup name="Protection" collapsed={false}> */}

      <DataEntryGroup name={t("planning_protected")} collapsed={true}>
        {/* <CheckboxDataEntry
          title={inside_archaelogical_area_title}
          slug="inside_archaelogical_area"
          value={props.building.inside_archaelogical_area}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
        /> */}

      <LogicalDataEntry
          slug="inside_archaelogical_area"
          title={inside_archaelogical_area_title}
          value={props.building.inside_archaelogical_area}
          onChange={props.onSaveChange}
          mode={props.mode}
          copy={props.copy}
        />
        
        <Verification
          slug="inside_archaelogical_area"
          allow_verify={
            props.user !== undefined &&
            props.building.inside_archaelogical_area !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "inside_archaelogical_area"
          )}
          user_verified_as={props.user_verified.inside_archaelogical_area}
          verified_count={props.building.verified.inside_archaelogical_area}
        />


        {props.building.inside_archaelogical_area === true && (
          <DataEntry
            title={name_of_archaelogical_area_title}
            slug="name_of_archaelogical_area"
            value={props.building.name_of_archaelogical_area}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            disabled={true}
          />
        )}

        {props.building.inside_archaelogical_area === true && (
          <SelectDataEntryMultiLingual
            title={fek_issue_archaelogical_title}
            slug="fek_issue_archaelogical"
            value={props.building.fek_issue_archaelogical}
            // tooltip={fek_issue_archaelogical_tooltip}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
          />
        )}

        {props.building.inside_archaelogical_area === true && (
          <VerificationMultilingual
            slug="fek_issue_archaelogical"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_issue_archaelogical !== null &&
              !props.edited
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_issue_archaelogical"
            )}
            user_verified_as={props.user_verified.fek_issue_archaelogical}
            verified_count={props.building.verified.fek_issue_archaelogical}
          />
        )}

        {props.building.inside_archaelogical_area === true && (
          <NumericDataEntryFekNumber
            title={fek_number_archaelogical_title}
            slug="fek_number_archaelogical"
            value={props.building.fek_number_archaelogical}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            step={1}
            min={0}
            max={9999}
            maxLength={4}
            // tooltip={fek_number_archaelogical_tooltip}
          />
        )}
        {props.building.inside_archaelogical_area === true && (
          <Verification
            slug="fek_number_archaelogical"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_number_archaelogical !== null
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_number_archaelogical"
            )}
            user_verified_as={props.user_verified.fek_number_archaelogical}
            verified_count={props.building.verified.fek_number_archaelogical}
          />
        )}

        {props.building.inside_archaelogical_area === true && (
          <DateDataEntry
            title={fek_date_archaelogical_title}
            slug="fek_date_archaelogical"
            value={props.building.fek_date_archaelogical}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            // tooltip={fek_number_officially_preserved_tooltip}
          />
        )}

        {props.building.inside_archaelogical_area === true && (
          <DateVerification
            slug="fek_date_archaelogical"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_date_archaelogical !== null
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_date_archaelogical"
            )}
            user_verified_as={props.user_verified.fek_date_archaelogical}
            verified_count={props.building.verified.fek_date_archaelogical}
          />
        )}

        <LogicalDataEntry
          title={inside_energy_area_title}
          slug="inside_energy_area"
          value={props.building.inside_energy_area}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
        />



        <Verification
          slug="inside_energy_area"
          allow_verify={
            props.user !== undefined &&
            props.building.inside_energy_area !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "inside_energy_area"
          )}
          user_verified_as={props.user_verified.inside_energy_area}
          verified_count={props.building.verified.inside_energy_area}
        />

        {props.building.inside_energy_area === true && (
          <DataEntry
            title={name_of_energy_area_title}
            slug="name_of_energy_area"
            value={props.building.name_of_energy_area}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            disabled={true}
          />
        )}

        {props.building.inside_energy_area === true && (
          <SelectDataEntryMultiLingual
            title={fek_issue_energy_title}
            slug="fek_issue_energy"
            value={props.building.fek_issue_energy}
            // tooltip={fek_issue_energy_tooltip}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
          />
        )}
        {props.building.inside_energy_area === true && (
          <VerificationMultilingual
            slug="fek_issue_energy"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_issue_energy !== null &&
              !props.edited
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_issue_energy"
            )}
            user_verified_as={props.user_verified.fek_issue_energy}
            verified_count={props.building.verified.fek_issue_energy}
          />
        )}

        {props.building.inside_energy_area === true && (
          <NumericDataEntry
            title={fek_number_energy_title}
            slug="fek_number_energy"
            value={props.building.fek_number_energy}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            step={1}
            // tooltip={fek_number_energy_tooltip}
          />
        )}
        {props.building.inside_energy_area === true && (
          <Verification
            slug="fek_number_energy"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_number_energy !== null
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_number_energy"
            )}
            user_verified_as={props.user_verified.fek_number_energy}
            verified_count={props.building.verified.fek_number_energy}
          />
        )}

        {props.building.inside_energy_area === true && (
          <DateDataEntry
            title={fek_date_energy_title}
            slug="fek_date_energy"
            value={props.building.fek_date_energy}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            // tooltip={fek_number_officially_preserved_tooltip}
          />
        )}

        {props.building.inside_energy_area === true && (
          <Verification
            slug="fek_date_energy"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_date_energy !== null
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_date_energy"
            )}
            user_verified_as={props.user_verified.fek_date_energy}
            verified_count={props.building.verified.fek_date_energy}
          />
        )}

        {/* <CheckboxDataEntry
          title={inside_protected_area_title}
          slug="inside_protected_area"
          value={props.building.inside_protected_area}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
        />
        <Verification
          slug="inside_protected_area"
          allow_verify={
            props.user !== undefined &&
            props.building.inside_protected_area !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "inside_protected_area"
          )}
          user_verified_as={props.user_verified.inside_protected_area}
          verified_count={props.building.verified.inside_protected_area}
        />

        {props.building.inside_protected_area === true && (
          <DataEntry
            title={name_of_protected_area_title}
            slug="name_of_protected_area"
            value={props.building.name_of_protected_area}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            disabled={true}
          />
        )}

        {props.building.inside_protected_area === true && (
          <SelectDataEntryMultiLingual
            title={fek_issue_protected_title}
            slug="fek_issue_protected"
            value={props.building.fek_issue_protected}
            // tooltip={fek_issue_protected_tooltip}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
          />
        )}
        {props.building.inside_protected_area === true && (
          <VerificationMultilingual
            slug="fek_issue_protected"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_issue_protected !== null &&
              !props.edited
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_issue_protected"
            )}
            user_verified_as={props.user_verified.fek_issue_protected}
            verified_count={props.building.verified.fek_issue_protected}
          />
        )}

        {props.building.inside_protected_area === true && (
          <NumericDataEntry
            title={fek_number_protected_title}
            slug="fek_number_protected"
            value={props.building.fek_number_protected}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            step={1}
            // tooltip={fek_number_protected_tooltip}
          />
        )}
        {props.building.inside_protected_area === true && (
          <Verification
            slug="fek_number_protected"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_number_protected !== null
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_number_protected"
            )}
            user_verified_as={props.user_verified.fek_number_protected}
            verified_count={props.building.verified.fek_number_protected}
          />
        )} */}

        {/* <CheckboxDataEntry
          title={officially_protected_title}
          slug="officially_protected"
          value={props.building.officially_protected}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
        /> */}

        <LogicalDataEntry
          title={officially_preserved_title}
          slug="officially_preserved"
          value={props.building.officially_preserved}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
        />
        <Verification
          slug="officially_preserved"
          allow_verify={
            props.user !== undefined &&
            props.building.officially_preserved !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "officially_preserved"
          )}
          user_verified_as={props.user_verified.officially_preserved}
          verified_count={props.building.verified.officially_preserved}
        />

        {props.building.officially_preserved === true && (
          <SelectDataEntryMultiLingual
            title={preservation_designation_title}
            slug="preservation_designation"
            value={props.building.preservation_designation}
            // tooltip={preservation_designation_tooltip}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
          />
        )}
        {props.building.officially_preserved === true && (
          <VerificationMultilingual
            slug="preservation_designation"
            allow_verify={
              props.user !== undefined &&
              props.building.preservation_designation !== null &&
              !props.edited
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "preservation_designation"
            )}
            user_verified_as={props.user_verified.preservation_designation}
            verified_count={props.building.verified.preservation_designation}
          />
        )}
        {props.building.officially_preserved === true && (
          <DataEntry
            title={name_of_officially_preserved_building_title}
            slug="name_of_officially_preserved_building"
            value={props.building.name_of_officially_preserved_building}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            disabled={true}
          />
        )}

        {props.building.officially_preserved === true && (
          <SelectDataEntryMultiLingual
            title={fek_issue_officially_preserved_title}
            slug="fek_issue_officially_preserved"
            value={props.building.fek_issue_officially_preserved}
            // tooltip={fek_issue_officially_preserved_tooltip}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
          />
        )}
        {props.building.officially_preserved === true && (
          <VerificationMultilingual
            slug="fek_issue_officially_preserved"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_issue_officially_preserved !== null &&
              !props.edited
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_issue_officially_preserved"
            )}
            user_verified_as={
              props.user_verified.fek_issue_officially_preserved
            }
            verified_count={
              props.building.verified.fek_issue_officially_preserved
            }
          />
        )}

        {props.building.officially_preserved === true && (
          <NumericDataEntry
            title={fek_number_officially_preserved_title}
            slug="fek_number_officially_preserved"
            value={props.building.fek_number_officially_preserved}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            step={1}
            // tooltip={fek_number_officially_preserved_tooltip}
          />
        )}

        {props.building.officially_preserved === true && (
          <Verification
            slug="fek_number_officially_preserved"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_number_officially_preserved !== null
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_number_officially_preserved"
            )}
            user_verified_as={
              props.user_verified.fek_number_officially_preserved
            }
            verified_count={
              props.building.verified.fek_number_officially_preserved
            }
          />
        )}

        {props.building.officially_preserved === true && (
          <DateDataEntry
            title={fek_date_officially_preserved_title}
            slug="fek_date_officially_preserved"
            value={props.building.fek_date_officially_preserved}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            // tooltip={fek_number_officially_preserved_tooltip}
          />
        )}
        {props.building.officially_preserved === true && (
          <Verification
            slug="fek_date_officially_preserved"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_date_officially_preserved !== null
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_date_officially_preserved"
            )}
            user_verified_as={props.user_verified.fek_date_officially_preserved}
            verified_count={
              props.building.verified.fek_date_officially_preserved
            }
          />
        )}

        <LogicalDataEntry
          title={officially_monument_title}
          slug="officially_monument"
          value={props.building.officially_monument}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
        />
        <Verification
          slug="officially_monument"
          allow_verify={
            props.user !== undefined &&
            props.building.officially_monument !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "officially_monument"
          )}
          user_verified_as={props.user_verified.officially_monument}
          verified_count={props.building.verified.officially_monument}
        />
        {props.building.officially_monument === true && (
          <SelectDataEntryMultiLingual
            title={monument_designation_title}
            slug="monument_designation"
            value={props.building.monument_designation}
            // tooltip={monument_designation_tooltip}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
          />
        )}
        {props.building.officially_monument === true && (
          <VerificationMultilingual
            slug="monument_designation"
            allow_verify={
              props.user !== undefined &&
              props.building.monument_designation !== null &&
              !props.edited
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "monument_designation"
            )}
            user_verified_as={props.user_verified.monument_designation}
            verified_count={props.building.verified.monument_designation}
          />
        )}
        {props.building.officially_monument === true && (
          <DataEntry
            title={name_of_officially_monument_building_title}
            slug="name_of_officially_monument_building"
            value={props.building.name_of_officially_monument_building}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            disabled={true}
          />
        )}

        {props.building.officially_monument === true && (
          <SelectDataEntryMultiLingual
            title={fek_issue_officially_monument_title}
            slug="fek_issue_officially_monument"
            value={props.building.fek_issue_officially_monument}
            // tooltip={fek_issue_officially_monument_tooltip}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
          />
        )}
        {props.building.officially_monument === true && (
          <VerificationMultilingual
            slug="fek_issue_officially_monument"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_issue_officially_monument !== null &&
              !props.edited
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_issue_officially_monument"
            )}
            user_verified_as={props.user_verified.fek_issue_officially_monument}
            verified_count={
              props.building.verified.fek_issue_officially_monument
            }
          />
        )}

        {props.building.officially_monument === true && (
          <NumericDataEntry
            title={fek_number_officially_monument_title}
            slug="fek_number_officially_monument"
            value={props.building.fek_number_officially_monument}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            step={1}
            // tooltip={fek_number_officially_monument_tooltip}
          />
        )}
        {props.building.officially_monument === true && (
          <Verification
            slug="fek_number_officially_monument"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_number_officially_monument !== null
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_number_officially_monument"
            )}
            user_verified_as={
              props.user_verified.fek_number_officially_monument
            }
            verified_count={
              props.building.verified.fek_number_officially_monument
            }
          />
        )}
        {props.building.officially_monument === true && (
          <DateDataEntry
            title={fek_date_officially_monument_title}
            slug="fek_date_officially_monument"
            value={props.building.fek_date_officially_monument}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            // tooltip={fek_number_officially_preserved_tooltip}
          />
        )}
        {props.building.officially_monument === true && (
          <Verification
            slug="fek_date_officially_monument"
            allow_verify={
              props.user !== undefined &&
              props.building.fek_date_officially_monument !== null
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "fek_date_officially_monument"
            )}
            user_verified_as={props.user_verified.fek_date_officially_monument}
            verified_count={
              props.building.verified.fek_date_officially_monument
            }
          />
        )}
      </DataEntryGroup>

      <DataEntryGroup name={t("planning_planning")} collapsed={true}>
        <NumericDataEntry
          title={allowed_far_title}
          slug="allowed_far"
          value={props.building.allowed_far}
          mode={props.mode}
          copy={props.copy}
          // tooltip={allowed_far_tooltip}
          onChange={props.onChange}
          step={0.1}
          min={0}
        />
        <Verification
          slug="allowed_far"
          allow_verify={
            props.user !== undefined && props.building.allowed_far !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty("allowed_far")}
          user_verified_as={props.user_verified.allowed_far}
          verified_count={props.building.verified.allowed_far}
        />

        <NumericDataEntry
          title={allowed_plot_coverage_title}
          slug="allowed_plot_coverage"
          value={props.building.allowed_plot_coverage}
          mode={props.mode}
          copy={props.copy}
          // tooltip={allowed_plot_coverage_tooltip}
          onChange={props.onChange}
          step={0.1}
          min={0}
        />
        <Verification
          slug="allowed_plot_coverage"
          allow_verify={
            props.user !== undefined &&
            props.building.allowed_plot_coverage !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "allowed_plot_coverage"
          )}
          user_verified_as={props.user_verified.allowed_plot_coverage}
          verified_count={props.building.verified.allowed_plot_coverage}
        />

        <NumericDataEntry
          title={maximum_building_height_title}
          slug="maximum_building_height"
          value={props.building.maximum_building_height}
          mode={props.mode}
          copy={props.copy}
          // tooltip={maximum_building_height_tooltip}
          onChange={props.onChange}
          step={0.1}
          min={0}
        />
        <Verification
          slug="maximum_building_height"
          allow_verify={
            props.user !== undefined &&
            props.building.maximum_building_height !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "maximum_building_height"
          )}
          user_verified_as={props.user_verified.maximum_building_height}
          verified_count={props.building.verified.maximum_building_height}
        />
      </DataEntryGroup>

      {/* </DataEntryGroup> */}
    </Fragment>
  );
};
const PlanningContainer = withCopyEdit(PlanningView);

export default PlanningContainer;
