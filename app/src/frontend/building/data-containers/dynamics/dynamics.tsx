import React from 'react';
import { Link } from 'react-router-dom';
import InfoBox from '../../../components/info-box';

import { Category } from '../../../config/categories-config';
import { dataFields } from '../../../config/data-fields-config';

import DataEntry from '../../data-components/data-entry';
import { DataEntryGroup } from '../../data-components/data-entry-group';
import { DynamicsBuildingPane, DynamicsDataEntry } from './dynamics-data-entry';
import { FieldRow } from '../../data-components/field-row';
import NumericDataEntry from '../../data-components/numeric-data-entry';
import withCopyEdit from '../../data-container';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { CategoryViewProps } from '../category-view-props';
import { LogicalDataEntry } from '../../data-components/logical-data-entry/logical-data-entry';

/**
* Dynamics view/edit section
*/
const DynamicsView: React.FunctionComponent<CategoryViewProps> = (props) => {
    const building = props.building;
    const thisYear = (new Date()).getFullYear();
    const currentBuildingConstructionYear = building.date_year || undefined;

    const ageLinkUrl = `/${props.mode}/${Category.Age}/${props.building.building_id}`;

    const { t } = useTranslation();


    let year_constructed_title = dataFields.demolished_buildings.items.year_constructed.title_en;
    let year_demolished_title = dataFields.demolished_buildings.items.year_constructed.title_en;
  
    let dynamics_has_demolished_buildings_title = dataFields.dynamics_has_demolished_buildings.title_en;
    
  
  
  
    if (i18next.language === "gr") {
         year_constructed_title = dataFields.demolished_buildings.items.year_constructed.title_gr;
         year_demolished_title = dataFields.demolished_buildings.items.year_constructed.title_gr;
      
         dynamics_has_demolished_buildings_title = dataFields.dynamics_has_demolished_buildings.title_gr;

    }

    return (<>
        <DataEntryGroup collapsed={false} name={t("dynamics_info_a")} showCount={false}>
            <DynamicsBuildingPane>
                <label>{t("dynamics_info_b")}<Link to={ageLinkUrl}>{t("dynamics_info_c")}</Link>)</label>
                <FieldRow>
                    <div>
                        <NumericDataEntry
                            slug=''
                            title={year_constructed_title}
                            value={currentBuildingConstructionYear}
                            disabled={true}
                            mode='view'
                        />
                    </div>
                    <div>
                        <NumericDataEntry
                            slug=''
                            title={year_demolished_title}
                            value={undefined}
                            placeholder='---'
                            disabled={true}
                            mode='view'
                        />
                    </div>
                    <div style={{flex: '0 1 27%'}}>
                        <DataEntry
                            slug=''
                            title={t("dynamics_info_d")}
                            value={ (thisYear - currentBuildingConstructionYear) + ''}
                            disabled={true}
                            mode='view'
                        />
                    </div>
                </FieldRow>
            </DynamicsBuildingPane>
            {
                currentBuildingConstructionYear == undefined ?
                    <InfoBox>{t("dynamics_info_e")}<Link to={ageLinkUrl}>{t("dynamics_info_f")}</Link>{t("dynamics_info_g")}</InfoBox> :
                    
                    <>
                        <LogicalDataEntry
                            slug='dynamics_has_demolished_buildings'
                            title={dynamics_has_demolished_buildings_title}
                            value={building.dynamics_has_demolished_buildings}
                            disallowFalse={(building.demolished_buildings?.length ?? 0) > 0}
                            disallowNull={(building.demolished_buildings?.length ?? 0) > 0}

                            onChange={props.onSaveChange}
                            mode={props.mode}
                            copy={props.copy}
                        />
                        {
                            building.dynamics_has_demolished_buildings &&
                            <>
                                <DynamicsDataEntry
                                    
                          
                                    key={building.building_id} 
                                    
                                    value={building.demolished_buildings}
                                    editableEntries={true}
                                    slug='demolished_buildings'
                                    title={dataFields.demolished_buildings.title}
                                    mode={props.mode}
                                    onChange={props.onChange}
                                    onSaveAdd={props.onSaveAdd}
                                    hasEdits={props.edited}
                                    maxYear={currentBuildingConstructionYear}
                                    minYear={50}
                                />
                                {
                                    props.mode === 'view' &&
                                        <InfoBox>{t("dynamics_info_h")}</InfoBox>
                                }
                            </>
                        }
                    </>
            }
        </DataEntryGroup>

        {/* <DataEntryGroup name="Future planned data collection" collapsed={false} showCount={false}>
            <DataEntry
                title="Historical land use change"
                slug=""
                value=""
                mode='view'
            />
            <DataEntry
                title="Longitudinal historical footprints (raster) link"
                slug=""
                value=""
                mode='view'
            />
            <DataEntry
                title="Longitudinal historical footprints (vector) link"
                slug=""
                value=""
                mode='view'
            />
        </DataEntryGroup> */}
        <InfoBox>
        {t("dynamics_info_i")}<a href="https://discuss.colouring.london/t/dynamics-category-discussion/107">{t("dynamics_info_j")}</a>{t("dynamics_info_k")}
        </InfoBox>
    </>)
};

const DynamicsContainer = withCopyEdit(DynamicsView);

export default DynamicsContainer;
