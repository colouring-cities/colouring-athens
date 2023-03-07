import React, { Fragment } from "react";

import InfoBox from "../../components/info-box";
import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import NumericDataEntry from "../data-components/numeric-data-entry";
// import UPRNsDataEntry from '../data-components/uprns-data-entry';
import Verification from "../data-components/verification";
import withCopyEdit from "../data-container";
import { PatternDataEntry } from "../data-components/pattern-data-entry";

import { CategoryViewProps } from "./category-view-props";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const locationNumberPattern = "[1-9]\\d*[a-z]?(-([1-9]\\d*))?"; ///[1-9]\d*[a-z]?(-([1-9]\d*))?/;

const LocationView: React.FunctionComponent<CategoryViewProps> = (props) => {
  const { t } = useTranslation();

  let location_name_title = dataFields.location_name.title_en;

  let location_number_title = dataFields.location_number.title_en;
  let location_number_tooltip = dataFields.location_number.tooltip_en;

  let location_street_title = dataFields.location_street.title_en;
  let location_town_title = dataFields.location_town.title_en;
  let location_postcode_title = dataFields.location_postcode.title_en;
  let ref_elstat_id_title = dataFields.ref_elstat_id.title_en;
  let ref_osm_id_title = dataFields.ref_osm_id.title_en;
  let location_latitude_title = dataFields.location_latitude.title_en;
  let location_longitude_title = dataFields.location_longitude.title_en;

  if (i18next.language === "gr") {
    location_name_title = dataFields.location_name.title_gr;
    location_number_title = dataFields.location_number.title_gr;
    location_number_tooltip = dataFields.location_number.tooltip_gr;

    location_street_title = dataFields.location_street.title_gr;
    location_town_title = dataFields.location_town.title_gr;
    location_postcode_title = dataFields.location_postcode.title_gr;
    ref_elstat_id_title = dataFields.ref_elstat_id.title_gr;
    ref_osm_id_title = dataFields.ref_osm_id.title_gr;
    location_latitude_title = dataFields.location_latitude.title_gr;
    location_longitude_title = dataFields.location_longitude.title_gr;
  }

  return (
    <Fragment>
      {/* <InfoBox msg="Text-based address fields are disabled at the moment. We're looking into how best to collect this data." /> */}
      <DataEntry
        title={location_name_title}
        slug="location_name"
        value={props.building.location_name}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        // tooltip={dataFields.location_name.tooltip}
        placeholder=""
        disabled={true}
      />
      {/* <Verification
            slug="location_name"
            allow_verify={props.user !== undefined && props.building.location_name !== null && !props.edited}
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty("location_name")}
            user_verified_as={props.user_verified.location_name}
            verified_count={props.building.verified.location_name}
            /> */}

      <PatternDataEntry
        title={location_number_title}
        slug="location_number"
        value={props.building.location_number}
        pattern={locationNumberPattern}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        tooltip={location_number_tooltip}
      />
      <Verification
        slug="location_number"
        allow_verify={
          props.user !== undefined &&
          props.building.location_number !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("location_number")}
        user_verified_as={props.user_verified.location_number}
        verified_count={props.building.verified.location_number}
      />

      <DataEntry
        title={location_street_title}
        slug="location_street"
        value={props.building.location_street}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        disabled={true}
      />
      {/* <Verification
        slug="location_street"
        allow_verify={
          props.user !== undefined &&
          props.building.location_street !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("location_street")}
        user_verified_as={props.user_verified.location_street}
        verified_count={props.building.verified.location_street}
      /> */}

      {/* <DataEntry
        title={dataFields.location_line_two.title}
        slug="location_line_two"
        value={props.building.location_line_two}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        disabled={true}
      /> */}
      <DataEntry
        title={location_town_title}
        slug="location_town"
        value={props.building.location_town}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        disabled={true}
      />
      <DataEntry
        title={location_postcode_title}
        slug="location_postcode"
        value={props.building.location_postcode}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        maxLength={8}
        valueTransform={(x) => x.toUpperCase()}
        disabled={true}
      />
      <DataEntry
        title={ref_elstat_id_title}
        slug="ref_elstat_id"
        value={props.building.ref_elstat_id}
        mode={props.mode}
        copy={props.copy}
        // tooltip={dataFields.ref_elstat_id.tooltip}
        onChange={props.onChange}
        disabled={true}
      />
      {/* <UPRNsDataEntry
            title={dataFields.uprns.title}
            value={props.building.uprns}
            tooltip={dataFields.uprns.tooltip}
            /> */}
      <DataEntry
        title={ref_osm_id_title}
        slug="ref_osm_id"
        value={props.building.ref_osm_id}
        mode={props.mode}
        copy={props.copy}
        // tooltip={dataFields.ref_osm_id.tooltip}
        maxLength={20}
        onChange={props.onChange}
        disabled={true}
      />
      <NumericDataEntry
        title={location_latitude_title}
        slug="location_latitude"
        value={props.building.location_latitude}
        mode={props.mode}
        copy={props.copy}
        step={0.00001}
        min={-90}
        max={90}
        placeholder="Latitude, e.g. 51.5467"
        onChange={props.onChange}
        disabled={true}
      />
      <NumericDataEntry
        title={location_longitude_title}
        slug="location_longitude"
        value={props.building.location_longitude}
        mode={props.mode}
        copy={props.copy}
        step={0.00001}
        min={-180}
        max={180}
        placeholder="Longitude, e.g. -0.0586"
        onChange={props.onChange}
        disabled={true}
      />
    </Fragment>
  );
};
const LocationContainer = withCopyEdit(LocationView);

export default LocationContainer;
