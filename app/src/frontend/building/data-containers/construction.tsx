import React, { Fragment } from "react";

import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import SelectDataEntry from "../data-components/select-data-entry";
import withCopyEdit from "../data-container";

import { CategoryViewProps } from "./category-view-props";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";
// import { useTranslation } from "react-i18next";
import i18next from "i18next";

/**
 * Construction view/edit section
 */
const ConstructionView: React.FunctionComponent<CategoryViewProps> = (
  props
) => {
  //   const { t } = useTranslation();

  let construction_core_material_title =
    dataFields.construction_core_material.title_en;
  let construction_core_material_tooltip =
    dataFields.construction_core_material.tooltip_en;
  let construction_roof_covering_title =
    dataFields.construction_roof_covering.title_en;
  let construction_roof_covering_tooltip =
    dataFields.construction_roof_covering.tooltip_en;
  let construction_front_cover_materials_title =
    dataFields.construction_front_cover_materials.title_en;
  let construction_front_cover_materials_tooltip =
    dataFields.construction_front_cover_materials.tooltip_en;
  let construction_side_cover_materials_title =
    dataFields.construction_side_cover_materials.title_en;
  let construction_side_cover_materials_tooltip =
    dataFields.construction_side_cover_materials.tooltip_en;

  if (i18next.language === "gr") {
    construction_core_material_title =
      dataFields.construction_core_material.title_gr;
    construction_core_material_tooltip =
      dataFields.construction_core_material.tooltip_gr;
    construction_roof_covering_title =
      dataFields.construction_roof_covering.title_gr;
    construction_roof_covering_tooltip =
      dataFields.construction_roof_covering.tooltip_gr;
    construction_front_cover_materials_title =
      dataFields.construction_front_cover_materials.title_gr;
    construction_front_cover_materials_tooltip =
      dataFields.construction_front_cover_materials.tooltip_gr;
    construction_side_cover_materials_title =
      dataFields.date_source_link.title_gr;
    construction_side_cover_materials_tooltip =
      dataFields.date_source_link.tooltip_gr;
  }

  return (
    <Fragment>
      <SelectDataEntryMultiLingual
        title={construction_core_material_title}
        slug="construction_core_material"
        value={props.building.construction_core_material}
        tooltip={construction_core_material_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />

      <SelectDataEntryMultiLingual
        title={construction_roof_covering_title}
        slug="construction_roof_covering"
        value={props.building.construction_roof_covering}
        tooltip={construction_roof_covering_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />

      <SelectDataEntryMultiLingual
        title={construction_front_cover_materials_title}
        slug="construction_front_cover_materials"
        value={props.building.construction_front_cover_materials}
        tooltip={construction_front_cover_materials_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />

      <SelectDataEntryMultiLingual
        title={construction_side_cover_materials_title}
        slug="construction_side_cover_materials"
        value={props.building.construction_side_cover_materials}
        tooltip={construction_side_cover_materials_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
    </Fragment>
  );
};

const ConstructionContainer = withCopyEdit(ConstructionView);

export default ConstructionContainer;
