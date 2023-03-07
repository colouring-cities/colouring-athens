import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

import { Logo } from "./components/logo";
import { WithSeparator } from "./components/with-separator";
import { useAuth } from "./auth-context";
import { useTranslation } from "react-i18next";
import { Translation } from "react-i18next";

interface MenuLink {
  to: string;
  text_en: string;
  text_gr: string;
  external?: boolean;
  disabled?: boolean;
  note?: string;
}

function getCurrentMenuLinks(username: string): MenuLink[][] {
  return [
    [
      {
        to: "/view/categories",
        text_en: "View Maps",
        text_gr: "Προβολή Χαρτών",
      },
      {
        to: "/edit/categories",
        text_en: "Edit Maps",
        text_gr: "Επεξεργασία Χαρτών",
      },
      {
        // to: "/data-extracts.html",
        to: '',
        text_en: "Download data",
        text_gr: "Λήψη δεδομένων",
        disabled: true,
        note: "Coming soon",
      },
      {
        to: "https://github.com/colouring-cities/colouring-Athens",
        text_en: "Access open code",
        text_gr: "Πρόσβαση ανοιχτού κώδικα",
        external: true,
      },
      {
        to: "/showcase.html",
        text_en: "View Data Showcase",
        text_gr: "Προβολή έκθεσης δεδομένων",
        disabled: true,
        note: "Coming soon",
      },
    ],
    [
      {
        // to: "https://pages.colouring.london",
        to: "/about-page.html",
        text_en: "About",
        text_gr: "Σχετικά",
        // external: true,
      },
      {
        // to: "https://pages.colouring.london/buildingcategories",
        to: "/data-categories.html",
        text_en: "Data Categories",
        text_gr: "Κατηγορίες δεδομένων",
        // external: true,
      },
      {
        // to: "https://pages.colouring.london/whoisinvolved",
        to: "/who-is-envolved.html",
        text_en: "Who's Involved?",
        text_gr: "Ποιοι εμπλέκονται;",
        // external: true,
      },
      {
        // to: "https://pages.colouring.london/data-ethics",
        to: "/data-ethics.html",
        text_en: "Data Ethics",
        text_gr: "Δεοντολογία Δεδομένων",
        // external: true,
      },
      {
        // to: "https://pages.colouring.london/colouring-cities",
        to: "/ccrp.html",
        text_en: "Colouring Cities Research Programme",
        text_gr: "Colouring Cities Research Programme",
        // external: true,
      },
    ],
    [
      {
        to: "/leaderboard.html",
        text_en: "Top Contributors",
        text_gr: "Κορυφαίοι Συντελεστές",
      },
      {
        to: "https://github.com/colouring-cities/colouring-Athens/discussions",
        text_en: "Discussion Forum",
        text_gr: "Φόρουμ συζήτησης",
        external: true,
      },
    ],
    [
      {
        to: "/privacy-policy.html",
        text_en: "Privacy Policy",
        text_gr: "Πολιτική Απορρήτου",
      },
      {
        to: "/contributor-agreement.html",
        text_en: "Contributor Agreement",
        text_gr: "Συμφωνία συνεισφέροντος",
      },
      {
        to: "/code-of-conduct.html",
        text_en: "Code of Conduct",
        text_gr: "Κώδικας δεοντολογίας",
      },
      {
        to: "/data-accuracy.html",
        text_en: "Data Accuracy Agreement",
        text_gr: "Συμφωνία Ακρίβειας Δεδομένων",
      },
      // {
      //     to: "/ordnance-survey-uprn.html",
      //     text: "Ordnance Survey terms of UPRN usage"
      // },
    ],
    [
      {
        to: "/contact.html",
        text_en: "Contact",
        text_gr: "Επικοινωνία",
      },
      ...(username != undefined
        ? [
            {
              to: "/my-account.html",
              text_en: `Account (${username})`,
              text_gr: `Λογαριασμός (${username})`,
            },
          ]
        : [
            {
              to: "/login.html",
              text_en: "Log in",
              text_gr: "Σύνδεση",
            },
            {
              to: "/sign-up.html",
              text_en: "Sign up",
              text_gr: "Εγγραφή",
            },
          ]),
    ],
  ];
}

const Menu: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => {
  const { user } = useAuth();
  const { i18n } = useTranslation();
  const menuLinkSections = getCurrentMenuLinks(user?.username);

  return (
    <WithSeparator separator={<hr />}>
      {menuLinkSections.map((section, idx) => (
        <ul key={`menu-section-${idx}`} className="navbar-nav flex-container">
          {section.map((item) => (
            <li
              className="nav-item"
              key={`${item.to}-${
                i18n.language === "gr" ? item.text_gr : item.text_en
              }`}
            >
              {item.disabled ? (
                <LinkStub note={item.note}>
                  {i18n.language === "gr" ? item.text_gr : item.text_en}
                </LinkStub>
              ) : item.external ? (
                <ExternalNavLink to={item.to}>
                  {i18n.language === "gr" ? item.text_gr : item.text_en}
                </ExternalNavLink>
              ) : (
                <InternalNavLink to={item.to} onClick={onNavigate}>
                  {i18n.language === "gr" ? item.text_gr : item.text_en}
                </InternalNavLink>
              )}
            </li>
          ))}
        </ul>
      ))}
    </WithSeparator>
  );
};

const InternalNavLink: React.FC<{ to: string; onClick: () => void }> = ({
  to,
  onClick,
  children,
}) => (
  <NavLink className="nav-link" to={to} onClick={onClick}>
    {children}
  </NavLink>
);

const ExternalNavLink: React.FC<{ to: string }> = ({ to, children }) => (
  <a className="nav-link" href={to}>
    {children}
  </a>
);

const LinkStub: React.FC<{ note: string }> = ({ note, children }) => (
  <a className="nav-link disabled">
    {children}
    <span className="link-note">{note}</span>
  </a>
);

let ls;

if (typeof window !== "undefined") {
  ls = window.localStorage;
} else {
  ls = {
    i18nextLng: "gr",
  };
}

export const Header: React.FC<{
  animateLogo: boolean;
}> = ({ animateLogo }) => {
  const [collapseMenu, setCollapseMenu] = useState(true);

  const toggleCollapse = () => setCollapseMenu(!collapseMenu);
  const handleNavigate = () => setCollapseMenu(true);

  const { t, i18n } = useTranslation();

  const lngs = {
    en: { nativeName: "EN" },
    gr: { nativeName: "GR" },
  };

  const [selected, setSelected] = React.useState<string | null>(null);
  const handleChange = (s) => {
    i18n.changeLanguage(s.target.value);
    localStorage.setItem("language", i18n.language);
    setSelected(s.target.value);
  };
  React.useEffect(() => {
    setSelected(i18n.language);
  });

  return (
    <header className="main-header navbar navbar-light">
      <div className="nav-header">
        <NavLink to="/">
          <Logo variant={animateLogo ? "animated" : "default"} />
        </NavLink>
        <select
          className="custom-select"
          style={{ width: 64 }}
          value={selected || undefined}
          onChange={handleChange}
        >
          {Object.keys(lngs).map((lng) => (
            <option value={lng} key={lng}>
              {lngs[lng].nativeName}
            </option>
          ))}
        </select>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
          aria-expanded={!collapseMenu}
          aria-label="Toggle navigation"
        >
          {t("menu")}&nbsp;
          {collapseMenu ? (
            <span className="navbar-toggler-icon"></span>
          ) : (
            <span className="close">&times;</span>
          )}
        </button>
      </div>
      <nav
        className={
          collapseMenu ? "collapse navbar-collapse" : "navbar-collapse"
        }
      >
        <Menu onNavigate={handleNavigate}></Menu>
      </nav>
    </header>
  );
};
