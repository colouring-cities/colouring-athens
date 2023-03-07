import React from "react";
import { useTranslation } from "react-i18next";

const DataAccuracyPage = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "gr") {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Συμφωνία Ακρίβειας Δεδομένων</h1>
          <p>
            Τα δεδομένα Colouring Athens παρέχονται «ως έχουν», χωρίς καμία
            εγγύηση, ρητή ή σιωπηρή, συμπεριλαμβανομένων, ενδεικτικά, των
            εγγυήσεων εμπορευσιμότητας, ακρίβειας, καταλληλότητας για
            συγκεκριμένο σκοπό και μη παράβασης. Σε καμία περίπτωση το Εθνικό
            Μετσόβιο Πολυτεχνείο δεν ευθύνεται για την αξιοπιστία των δεδομένων
            ή για τον τρόπο με τον οποίο χρησιμοποιούνται τα δεδομένα, ούτε για
            οποιαδήποτε αξίωση, αποζημίωση ή άλλη ευθύνη, που προκύπτει από ή σε
            σύνδεση με τα δεδομένα ή τη χρήση τους ή άλλες συναλλαγές των
            δεδομένων.
          </p>
          <p>
            Τα δεδομένα Colouring Athens προέρχονται από πολλές πηγές και
            ενδέχεται να περιέχουν σφάλματα. Αν και δεν μπορούμε να σχολιάσουμε
            την ακρίβεια των δεδομένων, συνεχίζουμε να σχεδιάζουμε
            χαρακτηριστικά για να βοηθήσουμε τους χρήστες να αξιολογήσουν οι
            ίδιοι την αξιοπιστία των συνόλων δεδομένων και την καταλληλότητά
            τους για συγκεκριμένους σκοπούς χρήσης. Η πρόσβαση στις πηγές των
            πληροφοριών είναι πολύ σημαντική και οι συνεισφέροντες καλούνται να
            τις προσθέτουν για να βοηθούν άλλους χρήστες και να κάνουν τη βάση
            δεδομένων όσο το δυνατόν πιο χρήσιμη. Ζητάμε επίσης από τους
            συνεισφέροντες να επαληθεύσουν τις υπάρχουσες καταχωρίσεις
            δεδομένων, κάνοντας κλικ στα κουμπιά «επαλήθευσης» όπου χρειάζεται.
          </p>
        </section>
      </article>
    );
  } else {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Data Accuracy Agreement</h1>
          <p>
            Colouring Athens data are provided "as is", without warranty of any
            kind, express or implied, including but not limited to the
            warranties of merchantability, accuracy, fitness for a particular
            purpose and non-infringement. In no event shall the Alan Turing
            Institute be liable for any reliance that you place on or how you
            use the data nor any claim, damages or other liability, whether in
            an action of contract, tort or otherwise, arising from, out of or in
            connection with the data or the use or other dealings in the data.
          </p>
          <p>
            Colouring Athens data are crowdsourced from multiple sources and may
            contain errors. Though we cannot comment on data accuracy, we try to
            include as many features as possible to help users assess their
            reliability and suitability for specific types of use (be this a
            school project or scientific paper). As information on sources is
            very important, contributors are asked to add these, and to verify
            data, wherever possible.
          </p>
        </section>
      </article>
    );
  }
};

export default DataAccuracyPage;
