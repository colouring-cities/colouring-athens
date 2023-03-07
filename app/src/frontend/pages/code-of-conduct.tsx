import React from "react";
import InfoBox from "../components/info-box";
import { useTranslation } from "react-i18next";

const CodeOfConductPage = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "gr") {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Κώδικας Δεοντολογίας Συνεισφερόντων</h1>

          <p>
            Αυτός ο Κώδικας Δεοντολογίας έχει προσαρμοστεί στη βάση του Κώδικα
            Δεοντολογίας, έκδοση 1.4, διαθέσιμου στο{" "}
            <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html">
              https://www.contributor-covenant.org/version/1/4/code-of-conduct.html
            </a>
          </p>

          <h2 className="h3">Η υπόσχεσή μας</h2>

          <p>
            Θέλοντας να καλλιεργήσουμε ανοιχτό και φιλόξενο κλίμα προς όλους
            τους συμμετέχοντες -ανεξαρτήτως ηλικίας, μεγέθους σώματος,
            εθνικότητας, φύλου, ιθαγένειας, θρησκείας ή σεξουαλικής ταυτότητας
            και προσανατολισμού - δεσμευόμαστε πως κανείς δε θα υφίσταται
            παρενόχληση.
          </p>
          <h2 className="h3">Τα πρότυπά μας</h2>
          <p>
            Παραδείγματα συμπεριφοράς που συμβάλλουν στη δημιουργία θετικού
            περιβάλλοντος αποτελούν τα ακόλουθα:
          </p>
          <ul>
            <li>Η χρήση φιλόξενου και κατανοητού λόγου</li>
            <li>Ο σεβασμός προς τις διαφορετικές απόψεις και εμπειρίες </li>
            <li>Η καλότροπη αποδοχή της εποικοδομητικής κριτικής </li>
            <li>Η επικέντρωση στο κοινό, αντί το προσωπικό, όφελος </li>
            <li>Η επίδειξη κατανόησης και συμπάθειας </li>
          </ul>

          <p>Παραδείγματα ανεπίτρεπτης συμπεριφοράς συμπεριλαμβάνουν:</p>

          <ul>
            <li>
              Την έκφραση και απεικόνιση σεξουαλικού περιεχομένου και τις
              ανεπιθύμητες σεξουαλικές προτάσεις
            </li>
            <li>
              Σχόλια προσβλητικά και απαξιωτικά, και προσωπικές ή πολιτικές
              επιθέσεις
            </li>
            <li>Τη δημόσια και ιδιωτική παρενόχληση</li>
            <li>
              Την άνευ συγκατάθεσης δημοσίευση προσωπικών δεδομένων (π.χ.
              ηλεκτρονικών διευθύνσεων ή διευθύνσεων οικίας)
            </li>
            {/* <li>
              Other conduct which could reasonably be considered inappropriate
              in a professional setting
            </li> */}
          </ul>

          <h2 className="h3">Οι υποχρεώσεις μας </h2>
          <p>
            Οι διαχειριστές αναλαμβάνουν την ευθύνη να διευκρινίζουν τα πρότυπα
            επιτρεπτής συμπεριφοράς και καλούνται να δρουν δεόντως όταν αυτά
            παραβιάζονται.
          </p>

          <p>
            Οι διαχειριστές έχουν την αρμοδιότητα να αφαιρούν, να τροποποιούν, ή
            να απορρίπτουν σχόλια, κώδικα, αναφορές προβλημάτων και άλλες
            συνεισφορές που δεν συμπίπτουν με τον κώδικα δεοντολογίας και να
            αποβάλλουν προσωρινά, ή και μόνιμα, συμμετέχοντες για συμπεριφορά
            που κρίνουν ως ανάρμοστη, απειλητική ή προσβλητική.
          </p>

          <h2 className="h3">Εύρος</h2>
          <p>
            Ο κώδικας δεοντολογίας έχει ισχύ εντός χώρων του έργου, όπως και σε
            δημόσιους χώρους όπου ο καθένας εκπροσωπεί το έργο. Παραδείγματα
            εκπροσώπησης αποτελούν: η χρήση ηλεκτρονικής διεύθυνσης συνδεδεμένης
            με το έργο· η ανάρτηση δημοσιεύσεων σε μέσα μαζικής δικτύωσης από
            επίσημο λογαριασμό· ή η επίσημη εκπροσώπηση του έργου σε κάποια
            εκδήλωση, μέσω του διαδικτύου ή με φυσική παρουσία. Οι κανόνες περί
            εκπροσώπησης μπορούν να επεκταθούν ή να αποσαφηνιστούν από τους
            διαχειριστές του κάθε έργου.
          </p>

          <h2 className="h3">Εφαρμογή</h2>
          <p>
            Περιστατικά παρενόχλησης και καταχρηστικής ή ευρέως ανεπίτρεπτης
            συμπεριφοράς μπορούν να αναφερθούν στην ομάδα του έργου στην
            ακόλουθη διεύθυνση:{" "}
            <a href="mailto:Athens@colouringcities.org">
              Athens@colouringcities.org
            </a>
            . Όλα τα παράπονα θα εξετάζονται και θα αντιμετωπίζονται κατάλληλα
            και ανάλογα με τις περιστάσεις. Η ομάδα του έργου έχει υποχρέωση να
            διαφυλάξει την εμπιστευτικότητα στοιχείων που αφορούν τον
            καταγγέλλοντα. Περαιτέρω λεπτομέρειες σχετικά με τους κανόνες
            εφαρμογής δύναται να δημοσιευτούν ξεχωριστά.
          </p>

          {/* <p>
            Project maintainers who do not follow or enforce the Code of Conduct
            in good faith may face temporary or permanent repercussions as
            determined by other members of the project's leadership.
          </p> */}

          <p>
            Για απαντήσεις σε συνήθεις ερωτήσεις σχετικά με αυτόν τον κώδικα
            δεοντολογίας, ανατρέξτε στη διεύθυνση{" "}
            <a href="https://www.contributor-covenant.org/faq">
              https://www.contributor-covenant.org/faq
            </a>
            .
          </p>
        </section>
      </article>
    );
  } else {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Contributor Code of Conduct</h1>

          <p>
            This Code of Conduct is adapted from the Contributor Covenant,
            version 1.4, available at{" "}
            <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html">
              https://www.contributor-covenant.org/version/1/4/code-of-conduct.html
            </a>
          </p>

          <h2 className="h3">Our Pledge</h2>

          <p>
            In the interest of fostering an open and welcoming environment, we
            as contributors and maintainers pledge to make participation in our
            project and our community a harassment-free experience for everyone,
            regardless of age, body size, disability, ethnicity, sex
            characteristics, gender identity and expression, level of
            experience, education, socio-economic status, nationality, personal
            appearance, race, religion, or sexual identity and orientation.
          </p>
          <h2 className="h3">Our Standards</h2>
          <p>
            Examples of behaviour that contributes to creating a positive
            environment include:
          </p>
          <ul>
            <li>Using welcoming and inclusive language</li>
            <li>Being respectful of differing viewpoints and experiences</li>
            <li>Gracefully accepting constructive criticism</li>
            <li>Focusing on what is best for the community</li>
            <li>Showing empathy towards other community members</li>
          </ul>

          <p>Examples of unacceptable behaviour by participants include:</p>

          <ul>
            <li>
              The use of sexualized language or imagery and unwelcome sexual
              attention or
            </li>
            advances
            <li>
              Trolling, insulting/derogatory comments, and personal or political
              attacks
            </li>
            <li>Public or private harassment</li>
            <li>
              Publishing others' private information, such as a physical or
              electronic address, without explicit permission
            </li>
            <li>
              Other conduct which could reasonably be considered inappropriate
              in a professional setting
            </li>
          </ul>

          <h2 className="h3">Our Responsibilities</h2>
          <p>
            Project maintainers are responsible for clarifying the standards of
            acceptable behaviour and are expected to take appropriate and fair
            corrective action in response to any instances of unacceptable
            behaviour.
          </p>

          <p>
            Project maintainers have the right and responsibility to remove,
            edit, or reject comments, commits, code, wiki edits, issues, and
            other contributions that are not aligned to this Code of Conduct, or
            to ban temporarily or permanently any contributor for other
            behaviours that they deem inappropriate, threatening, offensive, or
            harmful.
          </p>

          <h2 className="h3">Scope</h2>
          <p>
            This Code of Conduct applies within all project spaces, and it also
            applies when an individual is representing the project or its
            community in public spaces. Examples of representing a project or
            community include using an official project e-mail address, posting
            via an official social media account, or acting as an appointed
            representative at an online or offline event. Representation of a
            project may be further defined and clarified by project maintainers.
          </p>

          <h2 className="h3">Enforcement</h2>
          <p>
            Instances of abusive, harassing, or otherwise unacceptable behaviour
            may be reported by contacting the project team at{" "}
            <a href="mailto:Athens@colouringcities.org">
              Athens@colouringcities.org
            </a>
            . All complaints will be reviewed and investigated and will result
            in a response that is deemed necessary and appropriate to the
            circumstances. The project team is obligated to maintain
            confidentiality with regard to the reporter of an incident. Further
            details of specific enforcement policies may be posted separately.
          </p>

          <p>
            Project maintainers who do not follow or enforce the Code of Conduct
            in good faith may face temporary or permanent repercussions as
            determined by other members of the project's leadership.
          </p>

          <p>
            For answers to common questions about this code of conduct, see{" "}
            <a href="https://www.contributor-covenant.org/faq">
              https://www.contributor-covenant.org/faq
            </a>
          </p>
        </section>
      </article>
    );
  }
};

export default CodeOfConductPage;
