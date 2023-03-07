import React from "react";
import { Link } from "react-router-dom";

import "./building-edit-summary.css";

import { Category } from "../../config/categories-config";
import {
  DataFieldDefinition,
  dataFields,
} from "../../config/data-fields-config";
import { arrayToDictionary, parseDate } from "../../helpers";
import { EditHistoryEntry } from "../../models/edit-history-entry";
import { CategoryEditSummary } from "./category-edit-summary";
import { Translation } from "react-i18next";

interface BuildingEditSummaryProps {
  historyEntry: EditHistoryEntry;
  showBuildingId?: boolean;
  hyperlinkCategories?: boolean;
}

function formatDate(dt: Date) {
  return dt.toLocaleString(undefined, { 
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function enrichHistoryEntries(forwardPatch: object, reversePatch: object) {
  // if (i18next.language === 'gr') {
  return Object.entries(forwardPatch).map(([key, value]) => {
    const {
      slug = undefined,
      multilingual = false,
      title_en = `Unknown field (${key})`,
      title_gr = `Άγνωστο πεδίο (${key})`,
      category = undefined,
    } = (dataFields[key] as DataFieldDefinition) ?? {};

    return {
      slug,
      multilingual,
      title_en,
      title_gr,
      category,
      value,
      oldValue: reversePatch && reversePatch[key],
    };
  });
}

const BuildingEditSummary: React.FunctionComponent<
  BuildingEditSummaryProps
> = ({ historyEntry, showBuildingId = false, hyperlinkCategories = false }) => {
  const entriesWithMetadata = enrichHistoryEntries(
    historyEntry.forward_patch,
    historyEntry.reverse_patch
  );
  const entriesByCategory = arrayToDictionary(
    entriesWithMetadata,
    (x) => x.category
  );
  const categoryHyperlinkTemplate =
    hyperlinkCategories && historyEntry.building_id != undefined
      ? `/edit/$category/${historyEntry.building_id}`
      : undefined;

  return (
    <Translation>
      {(t, { i18n }) => (
        <div className="edit-history-entry">
          <h2 className="edit-history-timestamp">
            {t('edited_on')} {formatDate(parseDate(historyEntry.revision_timestamp))}
          </h2>
          <h3 className="edit-history-username">{t('edited_by')} {historyEntry.username}</h3>
          {showBuildingId && historyEntry.building_id != undefined && (
            <h3 className="edit-history-building-id">
              {t('edited_building')}{" "}
              <Link to={`/edit/categories/${historyEntry.building_id}`}>
                {historyEntry.building_id}
              </Link>
            </h3>
          )}
          {Object.entries(entriesByCategory).map(([category, fields]) => (
            <CategoryEditSummary
              key={category}
              category={category as keyof typeof Category} // https://github.com/microsoft/TypeScript/issues/14106
              fields={fields}
              hyperlinkCategory={hyperlinkCategories}
              hyperlinkTemplate={categoryHyperlinkTemplate}
            />
          ))}
        </div>
      )}
    </Translation>
  );
};

export { BuildingEditSummary };
