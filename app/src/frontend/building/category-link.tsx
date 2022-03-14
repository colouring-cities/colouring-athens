import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import './category-link.css';

interface CategoryLinkProps {
    mode: 'view' | 'edit' | 'multi-edit';
    building_id?: number;
    slug: string;
    title_gr: string;
    title_en: string;
    help: string;
    inactive: boolean;
}

const CategoryLink: React.FC<CategoryLinkProps> = (props) => {

    const { i18n } = useTranslation();

    let title = props.title_en;

    if (i18n.language === "gr") {
        title = props.title_gr;
    }


    let categoryLink = `/${props.mode}/${props.slug}`;
    if (props.building_id != undefined) categoryLink += `/${props.building_id}`;

    return (
        <NavLink
            className={`category-link background-${props.slug}`}
            to={categoryLink}
            title={
                (props.inactive)?
                    'Coming soon… Click more info for details.'
                    : 'View/Edit Map'
            }>
                <h3 className="category-title">{title}</h3>
        </NavLink>
    );
};

export { CategoryLink };