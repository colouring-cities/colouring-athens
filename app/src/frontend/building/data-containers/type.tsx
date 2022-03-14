import React, { Fragment } from "react";

import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import NumericDataEntry from "../data-components/numeric-data-entry";
import VerificationMultilingual from "../data-components/verification-multilingual";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";
import Verification from "../data-components/verification";
import withCopyEdit from "../data-container";

import { CategoryViewProps } from "./category-view-props";

// import { useTranslation } from "react-i18next";
import i18next from "i18next";

/**
 * Type view/edit section
 */
const TypeView: React.FunctionComponent<CategoryViewProps> = (props) => {
//   const { t } = useTranslation();

  let type_class_title = dataFields.type_class.title_en;
  let type_class_tooltip = dataFields.type_class.tooltip_en;
  let side_distances_title = dataFields.side_distances.title_en;
  let side_distances_tooltip = dataFields.side_distances.tooltip_en;

  if (i18next.language === "gr") {
    type_class_title = dataFields.type_class.title_gr;
    type_class_tooltip = dataFields.type_class.tooltip_gr;
    side_distances_title = dataFields.side_distances.title_gr;
    side_distances_tooltip = dataFields.side_distances.tooltip_gr;
  }

  return (
    <Fragment>
      <SelectDataEntryMultiLingual
        title={type_class_title}
        slug="type_class"
        value={props.building.type_class}
        tooltip={type_class_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />

<SelectDataEntryMultiLingual
        title={side_distances_title}
        slug="side_distances"
        value={props.building.side_distances}
        tooltip={side_distances_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />


    </Fragment>
  );
};
const TypeContainer = withCopyEdit(TypeView);

export default TypeContainer;
