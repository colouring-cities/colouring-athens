import React, { Fragment } from 'react';
import { useTranslation } from "react-i18next";
import { BaseDataEntryProps } from './data-entry';
import { DataTitleCopyable } from './data-title';

interface CheckboxDataEntryProps extends BaseDataEntryProps {
    value: boolean;
}

const CheckboxDataEntry: React.FunctionComponent<CheckboxDataEntryProps> = (props) => {
    const { t } = useTranslation();
    return (
        <Fragment>
            <DataTitleCopyable
                slug={props.slug}
                title={props.title}
                tooltip={props.tooltip}
                disabled={props.disabled || props.value == undefined}
                copy={props.copy}
            />
            <div className="form-check">
                <label
                    htmlFor={props.slug}
                    className="form-check-label">
                    <input className="form-check-input" type="checkbox"
                        id={props.slug}
                        name={props.slug}
                        checked={!!props.value}
                        disabled={props.mode === 'view' || props.disabled}
                        onChange={e => props.onChange(props.slug, e.target.checked)}
                        />
                    {
                        props.value?
                            <span><strong>{t("yes")}</strong>/{t("no")}</span>
                        :
                            <span>{t("yes")}/<strong>{t("no")}</strong></span>
                    }
                </label>
            </div>
        </Fragment>
    );
};

export default CheckboxDataEntry;
