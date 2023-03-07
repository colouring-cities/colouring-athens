import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { dateReviver } from "../../helpers";
import { apiGet } from "../apiHelpers";
import { Translation } from "react-i18next";

interface ExtractViewModel {
  extract_id: number;
  extracted_on: Date;
  download_path: string;
}

interface DataExtractsState {
  extracts: ExtractViewModel[];
  latestExtract: ExtractViewModel;
  previousExtracts: ExtractViewModel[];
}

export default class DataExtracts extends React.Component<
  {},
  DataExtractsState
> {
  constructor(props) {
    super(props);

    this.state = {
      extracts: undefined,
      latestExtract: undefined,
      previousExtracts: undefined,
    };
  }

  async componentDidMount() {
    let data = await apiGet("/api/extracts", { jsonReviver: dateReviver });
    const extracts = data.extracts as ExtractViewModel[];

    this.setState({
      extracts: extracts,
      latestExtract: extracts[0],
      previousExtracts: extracts.slice(1),
    });
  }

  render() {
    return (
      <Translation>
        {(t, { i18n }) => (
          <article>
            <section className="main-col">
              <h1 className="h2">{t('data_extracts')}</h1>
              <p>
              {t('data_extracts_text_a')}
              </p>
              <p>
              {t('data_extracts_text_b')}{" "}
                <a href="http://opendatacommons.org/licenses/odbl/">
                  Open Data Commons Open Database License
                </a>{" "}
                (ODbL){t('data_extracts_text_c')}
              </p>
              <p>
              {t('data_extracts_text_d')}
              </p>
              <p>
              {t('data_extracts_text_e')}
              </p>
              <p>
              {t('data_extracts_text_f')}{" "}
                <Link to="/data-accuracy.html">
                {t('data_extracts_text_f2')}
                </Link>{" "}
                {t('data_extracts_text_g')}{" "}
                <Link
                  to="https://wiki.osmfoundation.org/wiki/Terms_of_Use"
                  target={"_blank"}
                >
                  {t('data_extracts_text_g2')}
                </Link>
                .
              </p>

              {this.state.extracts == undefined ? (
                <p>{t('data_extracts_text_i')}</p>
              ) : this.state.extracts.length === 0 ? (
                <p>{t('data_extracts_text_h')}</p>
              ) : null}
              {this.state.latestExtract != undefined ? (
                <div>
                  <h1 className="h3">{t('data_extracts_text_k')}</h1>
                  <ExtractDownloadLink {...this.state.latestExtract} />
                </div>
              ) : null}
              {this.state.previousExtracts &&
              this.state.previousExtracts.length > 0 ? (
                <div>
                  <h1 className="h3">{t('data_extracts_text_l')}</h1>
                  <ul>
                    {this.state.previousExtracts.map((e) => (
                      <li>
                        <ExtractDownloadLink {...e} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>
          </article>
        )}
      </Translation>
    );
  }
}

const ExtractDownloadLink: FunctionComponent<ExtractViewModel> = (props) => (
  <p>
    <a href={props.download_path}>
      Extracted on {props.extracted_on.toDateString()}
    </a>
  </p>
);
