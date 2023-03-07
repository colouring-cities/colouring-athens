import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./category-edit-summary.css";

import { categoriesConfig, Category } from "../../config/categories-config";
import { Translation } from "react-i18next";
import { FieldEditSummary } from "./field-edit-summary";
import { apiGet } from "../../apiHelpers";

interface CategoryEditSummaryProps {
  category: keyof typeof Category; // https://github.com/microsoft/TypeScript/issues/14106
  fields: {
    slug: string;
    title_en?: string;
    title_gr?: string;
    value: any;
    oldValue: any;
    multilingual: boolean;
  }[];
  hyperlinkCategory: boolean;
  hyperlinkTemplate?: string;
}

interface label {
  label: string;
}

const CategoryEditSummary: React.FunctionComponent<CategoryEditSummaryProps> = (
  props
) => {
  const {
    name_en: categoryNameEN = "Unknown category",
    name_gr: categoryNameGR = "Άγνωστη κατηγορία",
    slug: categorySlug = "categories",
  } = categoriesConfig[props.category] ?? {};

  return (
    <Translation>
      {(t, { i18n }) => (
        <div className="edit-history-category-summary">
          <h3 className="edit-history-category-title">
            {props.hyperlinkCategory && props.hyperlinkTemplate != undefined ? (
              <Link
                to={props.hyperlinkTemplate.replace(/\$category/, categorySlug)}
              >
                {i18n.language === "gr" ? categoryNameGR : categoryNameEN}
              </Link>
            ) : i18n.language === "gr" ? (
              categoryNameGR
            ) : (
              categoryNameEN
            )}
            :
          </h3>
          <ul>
            {props.fields.map((x) => {
              const [oldValue, setOldLabel] = useState<label[]>(null);
              const [value, setLabel] = useState<label[]>(null);
              let displayedOldValue = "";
              let displayedValue = "";

              useEffect(() => {
                const doAsync = async () => {
                  // console.log(x.multilingual)
                  // console.log(x.oldValue)
                  // console.log(x.slug)
                  if (
                    x.multilingual &&
                    typeof x.slug !== "undefined" &&
                    typeof x.oldValue !== "undefined" &&
                    x.oldValue !== null
                  ) {
                    const urlOldValue = `/api/multilinguallabels?field_name=${x.slug}&language=${i18n.language}&id=${x.oldValue}`;
                    const { options: oldValue } = await apiGet(urlOldValue);
                    setOldLabel(oldValue);
                  }
                  if (
                    x.multilingual &&
                    typeof x.slug !== "undefined" &&
                    typeof x.value !== "undefined" &&
                    x.value !== null
                  ) {
                    const urlValue = `/api/multilinguallabels?field_name=${x.slug}&language=${i18n.language}&id=${x.value}`;
                    const { options: valueLabel } = await apiGet(urlValue);
                    setLabel(valueLabel);
                  }
                };

                doAsync();
              }, [x.slug, x.oldValue, x.value, i18n.language]);

              if (oldValue != undefined) {
                displayedOldValue = oldValue[0].label;
              }
              if (value != undefined) {
                displayedValue = value[0].label;
              }

              return (
                <li key={i18n.language === "gr" ? x.title_gr : x.title_en}>
                  <FieldEditSummary
                    title={i18n.language === "gr" ? x.title_gr : x.title_en}
                    // value={x.value}
                    // oldValue={x.oldValue}
                    value={x.multilingual ? displayedValue : x.value}
                    oldValue={x.multilingual ? displayedOldValue : x.oldValue}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Translation>
  );
};

export { CategoryEditSummary };
