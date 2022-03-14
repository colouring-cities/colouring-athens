import React, { Fragment } from "react";

import { dataFields } from "../../config/data-fields-config";
import { MultiDataEntry } from "../data-components/multi-data-entry/multi-data-entry";
import NumericDataEntry from "../data-components/numeric-data-entry";
import SelectDataEntry from "../data-components/select-data-entry";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";
import TextboxDataEntry from "../data-components/textbox-data-entry";
import Verification from "../data-components/verification";
import YearDataEntry from "../data-components/year-data-entry";
import withCopyEdit from "../data-container";

import { CategoryViewProps } from "./category-view-props";

// import { useTranslation } from "react-i18next";
import i18next from "i18next";

/**
 * Age view/edit section
 */
const AgeView: React.FunctionComponent<CategoryViewProps> = (props) => {
  const currentYear = new Date().getFullYear();

  //   const { t } = useTranslation();

  let year_built_title = dataFields.year_built.title_en;
  let year_built_tooltip = dataFields.year_built.tooltip_en;
  let reconstruction_year_title = dataFields.reconstruction_year.title_en;
  let reconstruction_year_tooltip = dataFields.reconstruction_year.tooltip_en;
  let date_source_title = dataFields.date_source.title_en;
  let date_source_tooltip = dataFields.date_source.tooltip_en;
  let date_source_link_title = dataFields.date_source_link.title_en;
  let date_source_link_tooltip = dataFields.date_source_link.tooltip_en;

  if (i18next.language === "gr") {
    year_built_title = dataFields.year_built.title_gr;
    year_built_tooltip = dataFields.year_built.tooltip_gr;
    reconstruction_year_title = dataFields.reconstruction_year.title_gr;
    reconstruction_year_tooltip = dataFields.reconstruction_year.tooltip_gr;
    date_source_title = dataFields.date_source.title_gr;
    date_source_tooltip = dataFields.date_source.tooltip_gr;
    date_source_link_title = dataFields.date_source_link.title_gr;
    date_source_link_tooltip = dataFields.date_source_link.tooltip_gr;
    
  }

  return (
    <Fragment>
      <SelectDataEntryMultiLingual
        title={year_built_title}
        slug="year_built"
        value={props.building.type_class}
        tooltip={year_built_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />

      <NumericDataEntry
        title={reconstruction_year_title}
        slug="reconstruction_year"
        value={props.building.reconstruction_year}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        step={1}
        min={1}
        max={currentYear}
        tooltip={reconstruction_year_tooltip}
      />

      {/* <Verification
                slug="facade_year"
                allow_verify={props.user !== undefined && props.building.facade_year !== null && !props.edited}
                onVerify={props.onVerify}
                user_verified={props.user_verified.hasOwnProperty("facade_year")}
                user_verified_as={props.user_verified.facade_year}
                verified_count={props.building.verified.facade_year}
                /> */}

      <SelectDataEntryMultiLingual
        title={date_source_title}
        slug="date_source"
        value={props.building.date_source}
        tooltip={date_source_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />

      <TextboxDataEntry
        title={date_source_link_title}
        slug="date_source"
        value={props.building.date_source_link}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        tooltip={date_source_link_tooltip}
      />
      {/* <MultiDataEntry
                title={dataFields.date_link.title}
                slug="date_link"
                value={props.building.date_link}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
                tooltip={dataFields.date_link.tooltip}
                placeholder="https://..."
                editableEntries={true}
                /> */}
    </Fragment>
  );
};
const AgeContainer = withCopyEdit(AgeView);

export default AgeContainer;
