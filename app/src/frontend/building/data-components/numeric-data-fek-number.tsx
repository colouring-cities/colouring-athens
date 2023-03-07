import React, { Fragment } from 'react';

import { BaseDataEntryProps } from './data-entry';
import { DataTitleCopyable } from './data-title';


interface NumericDataEntryFekNumberProps extends BaseDataEntryProps {
    value?: number;
    placeholder?: string;
    step?: number;
    min?: number;
    max?: number;
    maxLength?: number;
}

const NumericDataEntry: React.FunctionComponent<NumericDataEntryFekNumberProps> = (props) => {
    const slugWithModifier = props.slug + (props.slugModifier ?? '');

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
            <input
                className="form-control"
                type="text"
                id={slugWithModifier}
                name={slugWithModifier}
                value={props.value == undefined ? '' : props.value}
                step={props.step == undefined ? 1 : props.step}
                max={props.max}
                min={props.min}
                maxLength={props.maxLength}
                disabled={props.mode === 'view' || props.disabled}
                placeholder={props.placeholder}
                required={props.required}
                onChange={e =>
                    props.onChange(
                        props.slug,
                        e.target.value === '' ? null : parseFloat(e.target.value)
                    )
                }
            />
        </Fragment>
    );
};

export default NumericDataEntry;
