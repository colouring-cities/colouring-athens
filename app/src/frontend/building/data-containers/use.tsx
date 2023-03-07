import React, { Fragment } from "react";
import InfoBox from "../../components/info-box";
import { dataFields } from "../../config/data-fields-config";
import withCopyEdit from "../data-container";
import { CategoryViewProps } from "./category-view-props";
import VerificationMultilingual from "../data-components/verification-multilingual";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";
import DataEntryUse from '../data-components/data-entry-use';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const UseView: React.FunctionComponent<CategoryViewProps> = (props) => {

  const { t } = useTranslation();

  let current_landuse_ground_floor_title =
    dataFields.current_landuse_ground_floor.title_en;
  let current_landuse_ground_floor_tooltip =
    dataFields.current_landuse_ground_floor.tooltip_en;
  let current_landuse_floor_title =
    dataFields.current_landuse_floor.title_en;
  let current_landuse_floor_tooltip =
    dataFields.current_landuse_floor.tooltip_en;

  if (i18next.language === "gr") {
    current_landuse_ground_floor_title =
      dataFields.current_landuse_ground_floor.title_gr;
    current_landuse_ground_floor_tooltip =
      dataFields.current_landuse_ground_floor.tooltip_gr;
    current_landuse_floor_title =
      dataFields.current_landuse_floor.title_gr;
    current_landuse_floor_tooltip =
      dataFields.current_landuse_floor.tooltip_gr;
  }

  return (
    <Fragment>
      {/* <InfoBox msg="93% of properties in UK are dwellings so we have set this as the default colour. Can you help us colour-in all non-residential and mixed use buildings, and verify residential buildings too?"></InfoBox> */}

      <InfoBox msg={t("land_use_info")}></InfoBox>
      
      <SelectDataEntryMultiLingual
        title={current_landuse_ground_floor_title}
        slug="current_landuse_ground_floor"
        value={props.building.current_landuse_ground_floor}
        tooltip={current_landuse_ground_floor_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />

      <VerificationMultilingual
        slug="current_landuse_ground_floor"
        allow_verify={
          props.user !== undefined &&
          props.building.current_landuse_ground_floor !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "current_landuse_ground_floor"
        )}
        user_verified_as={props.user_verified.current_landuse_ground_floor}
        verified_count={props.building.verified.current_landuse_ground_floor}
      />

      <SelectDataEntryMultiLingual
        title={current_landuse_floor_title}
        slug="current_landuse_floor"
        value={props.building.current_landuse_floor}
        tooltip={current_landuse_floor_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />

      <VerificationMultilingual
        slug="current_landuse_floor"
        allow_verify={
          props.user !== undefined &&
          props.building.current_landuse_floor !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "current_landuse_floor"
        )}
        user_verified_as={props.user_verified.current_landuse_floor}
        verified_count={props.building.verified.current_landuse_floor}
      />

      {/* {props.mode != "view" && } */}

      <DataEntryUse
            title={t("building_use")}
            // tooltip={dataFields.current_landuse_order.tooltip}
            slug="current_use"
            value={

              (props.building.current_landuse_ground_floor === props.building.current_landuse_floor)
               ? 
              props.building.current_landuse_ground_floor : 
              ((props.building.current_landuse_ground_floor !== null && props.building.current_landuse_floor !== null) ? 20: null)
            
            }
            mode={props.mode}
            // disabled={true}
            // copy={props.copy}
            // onChange={props.onChange}
        />
    </Fragment>
  );
};
const UseContainer = withCopyEdit(UseView);

export default UseContainer;
