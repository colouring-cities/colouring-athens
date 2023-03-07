import React, { FC, useCallback, useEffect, useState } from "react";

import "./legend.css";

import { DownIcon, UpIcon } from "../components/icons";
import { Logo } from "../components/logo";
import {
  CategoryMapDefinition,
  LegendConfig,
} from "../config/category-maps-config";
import { BuildingMapTileset } from "../config/tileserver-config";
// import i18next from "i18next";
import { useTranslation } from "react-i18next";

interface LegendProps {
  mapColourScaleDefinitions: CategoryMapDefinition[];
  mapColourScale: BuildingMapTileset;
  onMapColourScale: (x: BuildingMapTileset) => void;
}

export const Legend: FC<LegendProps> = ({
  mapColourScaleDefinitions,
  mapColourScale,
  onMapColourScale,
}) => {
  const [collapseList, setCollapseList] = useState(false);

  const handleToggle = useCallback(() => {
    setCollapseList(!collapseList);
  }, [collapseList]);

  const onResize = useCallback(({ target }) => {
    setCollapseList(target.outerHeight < 670 || target.outerWidth < 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);

    if (window?.outerHeight) {
      // if we're in the browser, pass in as though from event to initialise
      onResize({ target: window });
    }

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  const { i18n } = useTranslation();

  if (i18n.language === "gr") {
    let legendConfig = mapColourScaleDefinitions.find(
      (def) => def.mapStyle === mapColourScale
    )?.legend;

    let {
      title_gr = undefined,
      elements = [],
      description_gr = undefined,
      disclaimer_gr = undefined,
    } = legendConfig ?? {};

    return (
      <div className="map-legend">
        <Logo variant="default" />
        {mapColourScaleDefinitions.length > 1 ? (
          <select
            className="style-select"
            onChange={(e) =>
              onMapColourScale(e.target.value as BuildingMapTileset)
            }
          >
            {mapColourScaleDefinitions.map((def) => (
              <option key={def.mapStyle} value={def.mapStyle}>
                {def.legend.title_gr}
              </option>
            ))}
          </select>
        ) : (
          title_gr && <h4 className="h4">{title_gr}</h4>
        )}
        {elements.length > 0 && (
          <button
            className="expander-button btn btn-outline-secondary btn-sm"
            type="button"
            onClick={handleToggle}
          >
            {collapseList ? <UpIcon /> : <DownIcon />}
          </button>
        )}
        {description_gr && <p>{description_gr}</p>}
        {elements.length === 0 ? (
          <p className="data-intro">Coming soon…</p>
        ) : (
          <ul className={collapseList ? "collapse data-legend" : "data-legend"}>
            {disclaimer_gr && (
              <p className="legend-disclaimer">{disclaimer_gr}</p>
            )}
            {elements.map((item: any) => {
              let key: string, content: React.ReactElement;

              if ("subtitle_en" in item || "subtitle_gr" in item) {
                if (i18n.language === "gr") {
                  key = item.subtitle_gr;
                  content = <h6>{item.subtitle_gr}</h6>;
                } else {
                  key = item.subtitle_en;
                  content = <h6>{item.subtitle_en}</h6>;
                }
              } else {
                key = `${item.text_gr}-${item.color}`;
                content = (
                  <>
                    <div
                      className="key"
                      style={{ background: item.color, border: item.border }}
                    />
                    {item.text_gr}
                  </>
                );
              }
              return <li key={key}>{content}</li>;
            })}
          </ul>
        )}
      </div>
    );
  } else {
    let legendConfig = mapColourScaleDefinitions.find(
      (def) => def.mapStyle === mapColourScale
    )?.legend;

    let {
      title_en = undefined,
      elements = [],
      description_en = undefined,
      disclaimer_en = undefined,
    } = legendConfig ?? {};

    return (
      <div className="map-legend">
        <Logo variant="default" />
        {mapColourScaleDefinitions.length > 1 ? (
          <select
            className="style-select"
            onChange={(e) =>
              onMapColourScale(e.target.value as BuildingMapTileset)
            }
          >
            {mapColourScaleDefinitions.map((def) => (
              <option key={def.mapStyle} value={def.mapStyle}>
                {def.legend.title_en}
              </option>
            ))}
          </select>
        ) : (
          title_en && <h4 className="h4">{title_en}</h4>
        )}
        {elements.length > 0 && (
          <button
            className="expander-button btn btn-outline-secondary btn-sm"
            type="button"
            onClick={handleToggle}
          >
            {collapseList ? <UpIcon /> : <DownIcon />}
          </button>
        )}
        {description_en && <p>{description_en}</p>}
        {elements.length === 0 ? (
          <p className="data-intro">Coming soon…</p>
        ) : (
          <ul className={collapseList ? "collapse data-legend" : "data-legend"}>
            {disclaimer_en && (
              <p className="legend-disclaimer">{disclaimer_en}</p>
            )}
            {elements.map((item: any) => {
              let key: string, content: React.ReactElement;
              if ("subtitle_en" in item || "subtitle_gr" in item) {
                if (i18n.language === "gr") {
                  key = item.subtitle_gr;
                  content = <h6>{item.subtitle_gr}</h6>;
                } else {
                  key = item.subtitle_en;
                  content = <h6>{item.subtitle_en}</h6>;
                }
                // if('subtitle' in item) {
                // key = item.subtitle_en;
                // content = <h6>{item.subtitle_en}</h6>;
              } else {
                key = `${item.text_en}-${item.color}`;
                content = (
                  <>
                    <div
                      className="key"
                      style={{ background: item.color, border: item.border }}
                    />
                    {item.text_en}
                  </>
                );
              }
              return <li key={key}>{content}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
};
