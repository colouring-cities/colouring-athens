import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ContributorAgreementPage: React.SFC<any> = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "gr") {
    return (
      <article>
        <section className="main-col">
          <h1>Σύμβαση Συνεισφερόντων</h1>

          <h2 className="h2">Ευθύνες συνεισφερόντων</h2>

          <p>Ζητάμε από όλους τους συνεισφέροντες:</p>
          <ul>
            <li>να τηρούν τον κώδικα δεοντολογίας μας</li>
            <li>
              να μην προσθέτουν ποτέ εν γνώσει τους δεδομένα που προέρχονται από
              περιορισμένη, προστατευόμενη από πνευματικά δικαιώματα ή παράνομη
              πηγή
            </li>
            <li>
              να μας βοηθήσουν να δημιουργήσουμε μια πλατφόρμα ανοιχτών
              δεδομένων που υποστηρίζει το κοινό καλό και ενθαρρύνει τη χρήση
              των δεδομένων για το κοινό καλό
            </li>
            <li>
              να προσθέτουν πηγές ώστε να ωφελήσουν τους άλλους, όπου είναι
              δυνατόν
            </li>
            <li>
              να επαληθεύουν δεδομένα προς όφελος άλλων, όποτε είναι δυνατόν
            </li>
            <li>
              να βεβαιώνονται ότι τηρούνται πλήρως οι όροι ανοιχτής άδειας όπου
              χρησιμοποιούνται ανοιχτά δεδομένα ή ανοιχτός κώδικας σε νέες
              εφαρμογές να παρέχουν όσο το δυνατόν λιγότερα προσωπικά δεδομένα
            </li>
            {/* <li>provide us with as little personal data as possible</li> */}
            <li>
              να αναλαμβάνουν την ευθύνη για την αξιολόγηση της αξιοπιστίας των
              δεδομένων που μπορεί να χρησιμοποιήσουν και της καταλληλότητάς
              τους για συγκεκριμένες εφαρμογές
            </li>
            <li>
              να παρέχουν ανατροφοδότηση σχετικά με ηθικές ανησυχίες,
              συμπεριλαμβανομένων πραγματικών ή πιθανών ζητημάτων απορρήτου και
              ασφάλειας
            </li>
          </ul>

          <h2 className="h2">Σημειώσεις για τους συνεισφέροντες</h2>

          <h3 className="h3">Ανοιχτά δεδομένα</h3>
          <p>
            Το Colouring Athens είναι μια πλατφόρμα ανοιχτών δεδομένων της
            οποίας οι συνεισφορές είναι ανοιχτά δεδομένα, υπό την άδεια Open
            Data Commons Open Database License (
            <a href="https://opendatacommons.org/licenses/odbl/">
              https://opendatacommons.org/licenses/odbl/
            </a>
            ). «ΥΠΟ ΑΥΤΗ ΤΗΝ ΑΔΕΙΑ» είστε ελεύθεροι να αντιγράψετε, να
            διανείμετε, να μεταδώσετε και να προσαρμόσετε τα δεδομένα μας, αρκεί
            να αναφέρετε το Colouring Athens και τους συντελεστές του. Εάν
            τροποποιήσετε ή βασιστείτε στα δεδομένα μας, μπορείτε να διανείμετε
            το αποτέλεσμα μόνο με την ίδια άδεια (
            <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">
              https://www.gnu.org/licenses/gpl-3.0.en.html
            </a>
            ).
          </p>

          <h3 className="h3">Σε τι συνεισφέρετε</h3>

          <p>
            Το Colouring Athens είναι μια πλατφόρμα ελεύθερης ανταλλαγής γνώσεων
            και μια δημόσια ανοιχτή βάση δεδομένων που έχει σχεδιαστεί για το
            κοινό καλό, για να υποστηρίξει μια συνολική προσέγγιση της κοινωνίας
            για την ανάπτυξη βιώσιμων, ανθεκτικών και χωρίς αποκλεισμούς πόλεων.
            Η πλατφόρμα καθοδηγείται από τη Νέα Αστική Ατζέντα των Ηνωμένων
            Εθνών, το Open Data Charter, τα Gemini Principles και από τις αρχές
            των προσωπικών δεδομένων και δεδομένων υποδομής που σχετίζονται με
            πρωτοβουλίες ανοιχτών δεδομένων, όπως ορίζονται από το Open Data
            Institute. Περισσότερες πληροφορίες είναι διαθέσιμες σε άλλες
            σελίδες του Μενού, συμπεριλαμβανομένων των σελίδων «Σχετικά με» και
            «Ηθική Δεδομένων». Εστιάζουμε στην καταγραφή χωρικών δεδομένων για
            δημόσια χρήση, συμπεριλαμβανομένης της δημόσιας οπτικοποίησης και
            της ακαδημαϊκής έρευνας, και δε συλλέγουμε (προς το παρόν) κείμενο ή
            εικόνες. Όλοι οι τύποι χωρικών δεδομένων που συλλέγουμε μπορούν να
            προβληθούν κάνοντας κλικ στην κατηγορία δεδομένων μας στο έγχρωμο
            πλέγμα και στο σύνδεσμο Επεξεργασία της σελίδας «Κατηγορίες δεδομένων
            κτιρίου/Building data categories». Σχεδιάζουμε επίσης μια ενότητα
            «Έκθεσης/Showcase» για να επιτρέψουμε την εύκολη μεταφόρτωση και
            προβολή εφαρμογών των δεδομένων.
          </p>

          <h3 className="h3">Ποικιλομορφία και μη αποκλεισμός</h3>

          <p>
            Είμαστε ευγνώμονες για όλες τις εποικοδομητικές συνεισφορές που
            προσφέρουν οι συντελεστές μας. Σεβόμαστε και επιζητούμε ενεργά τη
            διαφορετικότητα των συντελεστών και του κοινού, και επικροτούμε την
            ποικιλομορφία της γνώσης. Η πλατφόρμα μας έχει σχεδιαστεί για όλους
            και εργαζόμαστε για να την κάνουμε όσο το δυνατόν πιο περιεκτική,
            φιλόξενη και προσβάσιμη. Ενθαρρύνουμε ρητά τη συμμετοχή της
            κοινότητας και χρησιμοποιούμε χρώμα, crowdsourcing και μη τεχνική
            γλώσσα για να μειώσουμε τα εμπόδια στη συμμετοχή όλων και για να
            κάνουμε τη διαδικασία συνεισφοράς ικανοποιητική και ενδιαφέρουσα.
            Προσβλέπουμε, επίσης, μέσω αυτής της διαδικασίας να ενθαρρύνουμε τις
            κοινότητες να εμπλακούν περισσότερο στην ενημέρωση και τη βελτίωση
            της αστικής διακυβέρνησης και να υποστηρίξουμε μια συνολική
            κοινωνική προσπάθεια για τη βελτίωση της αστικής βιωσιμότητας. Η
            ποικιλομορφία των συντελεστών, του κοινού και των ηλικιών των
            χρηστών, των φύλων, και του πολιτιστικού υπόβαθρου είναι επίσης
            απαραίτητη για να μας επιτρέψει, ως κοινότητες, να κάνουμε τις
            πόλεις και τους οικισμούς μας πιο δίκαιους, βιώσιμους, ανθεκτικούς
            και χωρίς αποκλεισμούς. Για να γίνει αυτό, πρέπει να συλλέξουμε
            πληροφορίες όχι μόνο για τη σύνθεση των κτιριακών αποθεμάτων μας,
            την ενεργειακή τους απόδοση και τη δυναμική τους συμπεριφορά, αλλά
            και για την ποιότητα των κτιρίων και το πόσο καλά λειτουργούν
            συγκεκριμένοι τύποι τους, για να βοηθήσουμε στη βελτίωσή τους και να
            ενημερώσουμε τις γνώσεις μας για το τι πρέπει να
            επαναχρησιμοποιήσουμε ή να κατεδαφίσουμε, και για το πώς πρέπει να
            χτίζουμε στο μέλλον.
          </p>

          <h3 className="h3">
            Πνευματικά δικαιώματα - Ακρίβεια και ποιότητα δεδομένων
          </h3>

          <p>
            Δεν μπορούμε να δεχτούμε δεδομένα που προέρχονται από πηγές που
            προστατεύονται από πνευματικά δικαιώματα ή παράνομες πηγές και
            επομένως είναι σημαντικό να ελέγχονται οι πηγές δεδομένων βάσει
            αυτών των κριτηρίων. Επίσης, δεν μπορούμε να αναλάβουμε την ευθύνη
            για την ποιότητα των δεδομένων, καθώς δεν είναι εφικτός ο έλεγχος
            κάθε καταχώρισης δεδομένων και καθώς οι χρήστες θα απαιτούν
            διαφορετικούς βαθμούς ακρίβειας ανάλογα με το σκοπό για τον οποίο
            χρησιμοποιούν τα δεδομένα (π.χ. σχολικό έργο ή επιστημονική
            εργασία). Ωστόσο, στόχος μας είναι να κάνουμε τα δεδομένα μας όσο το
            δυνατόν πιο χρήσιμα και αξιόπιστα. Ο καλύτερος τρόπος για να γίνει
            αυτό είναι να συμπεριληφθούν πηγές. Σας ζητάμε λοιπόν να προσθέσετε
            πηγές όπου είναι δυνατόν - αυτό μπορεί να κυμαίνεται από την
            αξιολόγηση των χαρακτηριστικών του κτιρίου από το δρόμο, έως
            πληροφορίες από βιβλία, χάρτες ή άλλες ανοιχτές βάσεις δεδομένων.
            Σας ζητάμε επίσης να επαληθεύσετε άλλες καταχωρίσεις δεδομένων όπου
            μπορείτε, κάνοντας κλικ στο κουμπί επαλήθευσης. Αυτό σημαίνει ότι
            οποιοσδήποτε χρησιμοποιεί τα δεδομένα μας μπορεί να κρίνει πιο
            τεκμηριωμένα εάν τα δεδομένα είναι κατάλληλα (από άποψη
            ακρίβειας/ποιότητας) για τον συγκεκριμένο σκοπό του.
          </p>

          <div className="buttons-container">
            <Link to="sign-up.html" className="btn btn-outline-dark">
              Εγγραφή
            </Link>
          </div>
        </section>
      </article>
    );
  } else {
    return (
      <article>
        <section className="main-col">
          <h1>Contributor Agreement</h1>

          <h2 className="h2">Contributor responsibilities</h2>

          <p>We ask all our contributors to:</p>
          <ul>
            <li>adhere to our Code of Conduct</li>
            <li>
              never knowingly add data that derives from a restricted,
              copyrighted, malicious or illegal source
            </li>
            <li>
              help us create an open data platform that supports the development
              of sustainable, resilient, inclusive, and equitable cities, and
              encourages the use of data for the public good
            </li>
            <li>add sources wherever possible, to benefit others</li>
            <li>verify data, whenever possible, to benefit others</li>
            <li>
              ensure our open licencing terms are fully adhered to with regard
              to our open data, and our open code
            </li>
            <li>provide us with as little personal data as possible</li>
            <li>
              take full responsibility for assessing the reliability of
              Colouring Athens data and its suitability for any intended use
              (see also our 'Data Accuracy Agreement')
            </li>
            <li>
              provide feedback on actual or potential privacy and security
              concerns
            </li>
          </ul>

          <h2 className="h2">Additional notes for contributors</h2>

          <h3 className="h3">Open data</h3>
          <p>
            Colouring Athens is an open data project. Open data are licensed
            under the Open Data Commons Open Database License (
            <a href="https://opendatacommons.org/licenses/odbl/">
              https://opendatacommons.org/licenses/odbl/
            </a>
            ) by Colouring Athens contributors. Under this licence you are free
            to copy, distribute, transmit and adapt our data, as long as you
            credit Colouring Athens and our contributors. If you alter or build
            upon our data, you may distribute the result only under the same
            licence. Our open platform code are available under a GNU, General
            Public Licence (
            <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">
              https://www.gnu.org/licenses/gpl-3.0.en.html
            </a>
            ).
          </p>

          <h3 className="h3">What you are contributing to</h3>

          <p>
            Colouring Athens is a free knowledge exchange platform and open
            database designed for public use. It has been set up to support a
            whole-of-society approach to improving the sustainability,
            resilience and inclusivity of cities. Its design is guided by
            principles set out in the United Nations New Urban Agenda, the Open
            Data Charter, the General Data Protection Regulation (GDPR), The
            Gemini Principles, the Open Data Institute's recommendations on
            personal data and data infrastructure, and specific Articles within
            the Declaration of Human rights. These are discussed on our 'Data
            ethics' page, where we also use the Open Data Institute's data
            ethics canvas to answer questions on how we use and manage our data.
            We capture spatial statistics and do not collect text or images,
            though images may be integrated in the future. The type of spatial
            data we collect can be viewed by clicking on each data category, on
            'Info' buttons and on the 'Building data categories' page. We are
            also planning a 'Showcase section' to enable platform users to
            share, and view ways in which Colouring Athens data are used.
          </p>

          <h3 className="h3">Diversity and inclusivity</h3>

          <p>
            We are very grateful for all constructive contributions provided by
            our contributors. Our platform is designed for everyone, and we are
            working to make it as inclusive, welcoming and accessible as
            possible. We respect and actively seek diversity of contributors and
            audiences, and celebrate diversity of knowledge. We use colour,
            crowdsourcing, and non-technical language to reduce barriers to the
            contribution of statistical information and to make the process
            rewarding and interesting. Diversity of age, gender, skills and
            abilities, and cultural background is also essential to allow us, as
            communities, to make our cities and towns more inclusive, equitable,
            sustainable and resilient places. Our collective knowledge on the
            composition, dynamic behaviour and energy performance of our stocks,
            and how well our buildings work, is critical to inform policies on
            what buildings we should reuse, demolish and build anew, to
            accelerate retrofit, and to better understand stocks as dynamic
            systems, so that they may be improved.
          </p>

          <h3 className="h3">Copyright and data accuracy and quality</h3>

          <p>
            We are unable to accept any data derived from copyrighted or
            restricted sources, other than those covered by fair use, nor from
            illegal sources, and we ask contributors to carefully check sources
            prior to upload. We are also unable to take responsibility for the
            quality of datasets as it is not feasible to check each data entry,
            and as different degrees of accuracy and precision will be required
            by different users, depending on what they are using the data for
            (e.g. a school project or scientific paper). However our aim is to
            make our data as reliable and useful as possible. We therefore ask
            contributors to include sources and to verify other data entries
            wherever possible.
          </p>

          <p>
            For information on data privacy and security please see our Privacy
            and Security page.
          </p>

          <div className="buttons-container">
            <Link to="sign-up.html" className="btn btn-outline-dark">
              Back to sign up
            </Link>
          </div>
        </section>
      </article>
    );
  }
};

export default ContributorAgreementPage;
