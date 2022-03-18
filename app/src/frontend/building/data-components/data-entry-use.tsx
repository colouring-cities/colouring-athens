import React, { Fragment, useEffect, useState } from 'react';
import { apiGet } from '../../apiHelpers';

import { CopyProps } from '../data-containers/category-view-props';

import { DataEntryInput, TextDataEntryInputProps } from './data-entry-input';
import { DataTitleCopyable } from './data-title';
import { useTranslation } from "react-i18next";

interface SelectOption {
    value: number;
    label?: string;
  }

interface BaseDataEntryUseProps {
    slug: string;
    slugModifier?: string | number; // string used with slug with array items (ensures the form labels link to the input for the correct item)
    title: string;
    tooltip?: string;
    disabled?: boolean;
    copy?: CopyProps; // CopyProps clashes with propTypes
    mode?: 'view' | 'edit' | 'multi-edit';
    // isUrl?: boolean;
    required?: boolean;
    // onChange?: (key: string, value: any) => void;
}

interface DataEntryUseProps extends BaseDataEntryUseProps, TextDataEntryInputProps {
    value?: any;
}

const DataEntryUse: React.FC<DataEntryUseProps> = (props) => {

    const [options, setOptions] = useState<SelectOption[]>(null);

    const { i18n } = useTranslation();
  
    useEffect(() => {
      const doAsync = async () => {
        const url = `/api/multilingualoptions?field_name=current_landuse_ground_floor&language=${i18n.language}`;

        const { options: newOptions } = await apiGet(url);
        setOptions(newOptions);
      };
        doAsync();
    }, [props.slug, i18n.language]);
  
    if (options == undefined) return null;
    
    return (
        <Fragment>
            <DataTitleCopyable
                slug={props.slug}
                slugModifier={props.slugModifier}
                title={props.title}
                tooltip={props.tooltip}
                // disabled={props.disabled || props.value == undefined || props.value == ''}
                copy={props.copy}
            />
            <DataEntryInput
                slug={props.slug}
                name={props.slug + props.slugModifier ?? ''}
                value={options[props.value - 1].label}
                // onChange={props.onChange}
                disabled={true}

                maxLength={props.maxLength}
                placeholder={props.placeholder}
                isUrl={props.isUrl}
                required={props.required}
                // valueTransform={props.valueTransform}
            />
        </Fragment>
    );
};

export default DataEntryUse;
export {
    BaseDataEntryUseProps
};
