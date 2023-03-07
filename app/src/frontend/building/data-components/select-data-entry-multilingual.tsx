import React, { Fragment, useEffect, useState } from "react";
import { BaseDataEntryProps } from "./data-entry";
import { DataTitleCopyable } from "./data-title";
import { apiGet } from "../../apiHelpers";
import { useTranslation } from "react-i18next";

interface SelectOption {
  value: number;
  label: string;
}

interface SelectDataEntryMultiLingualProps extends BaseDataEntryProps {
  value: any;
  placeholder?: string;
}

const SelectDataEntryMultiLingual: React.FunctionComponent<
  SelectDataEntryMultiLingualProps
> = (props) => {
  const slugWithModifier = props.slug + (props.slugModifier ?? "");
  const [options, setOptions] = useState<SelectOption[]>(null);

  const { i18n } = useTranslation();

  useEffect(() => {
    // let unmounted = false;
    // async function doAsync() {
    const doAsync = async () => {
      const url = `/api/multilingualoptions?field_name=${props.slug}&language=${i18n.language}`;
      const { options: newOptions } = await apiGet(url);
      setOptions(newOptions);
    };
    // if (!unmounted) {
      doAsync();
    // }
    // return () => {
    //   unmounted = true;
    // };
  }, [props.slug, i18n.language]);

  if (options == undefined) return null;
  options.sort((a, b) => a.value - b.value);
  return (
    <Fragment>
      <DataTitleCopyable
        slug={props.slug}
        slugModifier={props.slugModifier}
        title={props.title}
        tooltip={props.tooltip}
        disabled={props.disabled || props.value == undefined}
        copy={props.copy}
      />
      <select
        className="form-control"
        id={slugWithModifier}
        name={slugWithModifier}
        value={props.value || ''}
        disabled={props.mode === "view" || props.disabled}
        required={props.required}
        onChange={(e) =>
          props.onChange(
            props.slug,
            e.target.value === null ? null : e.target.value
          )
        }
      >
        <option value="">{props.placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default SelectDataEntryMultiLingual;
