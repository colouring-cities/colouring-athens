import React, { Fragment } from "react";

import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import SelectDataEntry from "../data-components/select-data-entry";
import withCopyEdit from "../data-container";
import VerificationMultilingual from "../data-components/verification-multilingual";
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
  let construction_front_cover_material_title =
    dataFields.construction_front_cover_material.title_en;
  let construction_front_cover_material_tooltip =
    dataFields.construction_front_cover_material.tooltip_en;
  let construction_side_cover_material_title =
    dataFields.construction_side_cover_material.title_en;
  let construction_side_cover_material_tooltip =
    dataFields.construction_side_cover_material.tooltip_en;

  if (i18next.language === "gr") {
    construction_core_material_title =
      dataFields.construction_core_material.title_gr;
    construction_core_material_tooltip =
      dataFields.construction_core_material.tooltip_gr;
    construction_roof_covering_title =
      dataFields.construction_roof_covering.title_gr;
    construction_roof_covering_tooltip =
      dataFields.construction_roof_covering.tooltip_gr;
    construction_front_cover_material_title =
      dataFields.construction_front_cover_material.title_gr;
    construction_front_cover_material_tooltip =
      dataFields.construction_front_cover_material.tooltip_gr;
    construction_side_cover_material_title =
      dataFields.construction_side_cover_material.title_gr;
    construction_side_cover_material_tooltip =
      dataFields.construction_side_cover_material.tooltip_gr;
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
      <VerificationMultilingual
        slug="construction_core_material"
        allow_verify={
          props.user !== undefined &&
          props.building.construction_core_material !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "construction_core_material"
        )}
        user_verified_as={props.user_verified.construction_core_material}
        verified_count={props.building.verified.construction_core_material}
      />

      <SelectDataEntryMultiLingual
        title={construction_roof_covering_title}
        slug="construction_roof_covering"
        value={props.building.construction_roof_covering}
        // tooltip={construction_roof_covering_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
      <VerificationMultilingual
        slug="construction_roof_covering"
        allow_verify={
          props.user !== undefined &&
          props.building.construction_roof_covering !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "construction_roof_covering"
        )}
        user_verified_as={props.user_verified.construction_roof_covering}
        verified_count={props.building.verified.construction_roof_covering}
      />

      <SelectDataEntryMultiLingual
        title={construction_front_cover_material_title}
        slug="construction_front_cover_material"
        value={props.building.construction_front_cover_material}
        tooltip={construction_front_cover_material_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
      <VerificationMultilingual
        slug="construction_front_cover_material"
        allow_verify={
          props.user !== undefined &&
          props.building.construction_front_cover_material !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "construction_front_cover_material"
        )}
        user_verified_as={props.user_verified.construction_front_cover_material}
        verified_count={
          props.building.verified.construction_front_cover_material
        }
      />

      <SelectDataEntryMultiLingual
        title={construction_side_cover_material_title}
        slug="construction_side_cover_material"
        value={props.building.construction_side_cover_material}
        tooltip={construction_side_cover_material_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
      <VerificationMultilingual
        slug="construction_side_cover_material"
        allow_verify={
          props.user !== undefined &&
          props.building.construction_side_cover_material !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "construction_side_cover_material"
        )}
        user_verified_as={props.user_verified.construction_side_cover_material}
        verified_count={
          props.building.verified.construction_side_cover_material
        }
      />
    </Fragment>
  );
};

const ConstructionContainer = withCopyEdit(ConstructionView);

export default ConstructionContainer;
