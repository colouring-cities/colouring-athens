import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EditIcon, ViewIcon } from "../../components/icons";
import { Building } from "../../models/building";

interface ViewEditControlProps {
  cat: string;
  mode: "view" | "edit";
  building: Building;
}

const ViewEditControl: React.FC<ViewEditControlProps> = (props) => {
  const { t } = useTranslation();
  return props.mode === "edit" ? (
    <NavLink
      className="icon-button view"
      title="View data"
      to={`/view/${props.cat}/${props.building.building_id}`}
    >
      {t("view")}
      <ViewIcon />
    </NavLink>
  ) : (
    <NavLink
      className="icon-button edit"
      title="Edit data"
      to={`/edit/${props.cat}/${props.building.building_id}`}
    >
      {t("edit")}
      <EditIcon />
    </NavLink>
  );
};
export { ViewEditControl };
