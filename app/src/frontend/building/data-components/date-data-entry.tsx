import React, { Fragment } from "react";

import { BaseDataEntryProps } from "./data-entry";
import { DataTitleCopyable } from "./data-title";

interface DateDataEntryProps extends BaseDataEntryProps {
  value?: any;
  placeholder?: string;
  // step?: number;
  // min?: number;
  // max?: number;
}

const DateDataEntry: React.FunctionComponent<DateDataEntryProps> = (props) => {
  const slugWithModifier = props.slug + (props.slugModifier ?? "");

  let displayedDate;
  let date = new Date();
  if (typeof props.value === "string") {
    date = new Date(props.value);
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = date.getFullYear();

    displayedDate = yyyy + "-" + mm + "-" + dd;
  }
  
  return (
    <Fragment>
      <DataTitleCopyable
        slug={props.slug}
        slugModifier={props.slugModifier}
        title={props.title}
        tooltip={props.tooltip}
        disabled={props.disabled || displayedDate == undefined}
        copy={props.copy}
      />

      <input
        className="form-control"
        type="date"
        max="2999-12-31"
        id={slugWithModifier}
        name={slugWithModifier}
        value={props.value == undefined ? "" : displayedDate}
        disabled={props.mode === "view" || props.disabled}
        placeholder={props.placeholder}
        required={props.required}
        onChange={(e) => {
          return props.onChange(
            props.slug,
            e.target.value === "" ? null : e.target.value
          );
        }}
      />
    </Fragment>
  );
};

export default DateDataEntry;
