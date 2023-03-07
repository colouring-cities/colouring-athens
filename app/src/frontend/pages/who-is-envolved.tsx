import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./who-is-envolved.css";

const WhoIsEnvolved = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "gr") {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Ποιος εμπλέκεται;</h1>
          <h1 className="h3">Οι συντελεστές μας</h1>
          <p>
            Το Colouring Athens βασίστηκε στον πρωτότυπο κώδικα Colouring London
            και αναπτύχθηκε ως μια ανοιχτή βάση δεδομένων και μια πλατφόρμα
            ανταλλαγής γνώσεων μεταξύ αυτών που χρησιμοποιούν, δημιουργούν και
            διαχειρίζονται κτίρια ή εκπονούν έρευνα σχετικά με το κτιριακό
            απόθεμα. Είτε είστε κάτοικος που μπορεί να χρωματίσει ένα μόνο
            κτίριο, είτε μια εξειδικευμένη εταιρεία ή κυβερνητικός φορέας που
            μπορεί να παρέχει δεδομένα για την πόλη στο σύνολό της, η συνεισφορά
            σας εκτιμάται ιδιαίτερα. Κάθε καταχώριση υποστηρίζει την έρευνα για
            ανοιχτά δεδομένα και εργαλεία που μας βοηθούν να κάνουμε τις πόλεις
            μας πιο βιώσιμες.
          </p>
          <h1 className="h3">Η ομάδα μας</h1>
          <p>
            Το έργο διευθύνεται από μια μικρή διεπιστημονική ομάδα και συνδέεται
            με διεθνή δίκτυα που συγκεντρώνουν τεχνογνωσία στην αρχιτεκτονική,
            την προστασία κτιρίων, την ιστορία της αρχιτεκτονικής, τον
            προγραμματισμό, την επιστήμη δεδομένων, τη γραφιστική, το
            συμμετοχικό σχεδιασμό, τα ανοιχτά δεδομένα και τη δημιουργία
            εργαλείων συλλογικής συντήρησης που έχουν σχεδιαστεί με σκοπό τη
            βελτίωση της ποιότητας του κτιριακού αποθέματος. Η πλατφόρμα
            αναπτύχθηκε από το Σπουδαστήριο Πολεοδομικών Ερευνών της Σχολής
            Αρχιτεκτόνων Μηχανικών του ΕΜΠ και το Εργαστήριο Γεωγραφίας και
            Ανάλυσης Χώρου GeoChoros της Σχολής Αγρονόμων & Τοπογράφων Μηχανικών
            - Μηχανικών Γεωπληροφορικής του ΕΜΠ. Το Colouring Athens αποτελεί
            μέρος του διεθνούς ερευνητικού προγράμματος Colouring Cities
            Research Programme του The Alan Turing Institute, του εθνικού
            ινστιτούτου επιστήμης δεδομένων και τεχνητής νοημοσύνης του Ηνωμένου
            Βασιλείου.
          </p>
          <h1 className="h3">Οι χρηματοδότες μας</h1>
          <p>
            Το Colouring Athens χρηματοδοτείται από την Εταιρεία Ανάπτυξης και
            Τουριστικής Προβολής του Δήμου Αθηναίων.
          </p>
          <h1 className="h3">Σύμβουλοι</h1>
          <p>
            Οι ευχαριστίες μας απευθύνονται σε όλους τους παρακάτω φορείς και
            άτομα που παρείχαν χρόνο, ενθάρρυνση και ιδέες σχετικά με το
            περιεχόμενο και τη δομή του έργου κατά την αρχική φάση σχεδιασμού
            του το 2021: την Εταιρεία Ανάπτυξης και Τουριστικής Προβολής του
            Δήμου Αθηναίων, εκπροσώπους του Υπουργείου Περιβάλλοντος και
            Ενέργειας, τη Monumenta, την Ελληνική Εταιρεία Περιβάλλοντος και
            Πολιτισμού (ΕΛΛΕΤ), το Global Sustainable Tourism Council,
            εκπροσώπους των μελετητικών γραφείων Θύμιος Παπαγιάννης & Συνεργάτες
            και Γεωχώρος Μελετητική, εκπροσώπους των Σχολών Αρχιτεκτόνων
            Μηχανικών, Αγρονόμων & Τοπογράφων Μηχανικών - Μηχανικών
            Γεωπληροφορικής, Ηλεκτρολόγων Μηχανικών και Χημικών Μηχανικών του
            Ε.Μ.Π. και της Αρχιτεκτονικής Σχολής του Αριστοτελείου Πανεπιστημίου
            Θεσσαλονίκης και περισσότερους από 500 επαγγελματίες, ακαδημαϊκούς
            και φοιτητές που εξέφρασαν τις ανάγκες, τις απόψεις και τις ιδέες
            τους για το έργο στην αρχική του φάση απαντώντας στα ερωτηματολόγιά
            μας.
          </p>
          <h1 className="h3">Οι διεθνείς συνεργάτες μας</h1>
          <p>
            Οι διεθνείς μας εταίροι είναι: Τhe Alan Turing Institute (Colouring
            London and Colouring Cities Research Programme), The American
            University of Beirut (Colouring Beirut), The University of Bahrain
            και Bahrain Authority for Culture and Antiquities (Colouring
            Bahrain), The University of New South Wales (Colouring Australia),
            Leibniz Institute for Ecological Urban and Regional Development
            (Colouring Dresden), King’s College London & Institut Teknologi
            Bandung (Colouring Athens), και The Colour Research Institute,
            China Academy of Art.
          </p>
          <h1 className="h3">Ιδιαίτερες ευχαριστίες</h1>
          <p>
            Ιδιαίτερες ευχαριστίες απευθύνονται στα ακόλουθα άτομα που παρείχαν
            ουσιαστική υποστήριξη, ενθάρρυνση και βοήθεια στο Colouring Athens
            κατά την πρώτη φάση ανάπτυξής του (2021-2022):
          </p>
          {/* <p>Βοηθήστε μας να χρωματίσουμε τα κτίρια της Αθήνας τώρα! </p> */}
          <p>
            Polly Hudson, Φάλλη Παλαιολόγου, Tom Russell, Ed Chalstrey, Mateusz
            Konieczny, Ευάγγελος Βλάχος, Χάρης Μπίσκος, Αλεξία Παναγιωτοπούλου,
            Αθανάσιος Παγώνης, Αρχοντούλα Βασιλαρά, Τσιατσιάμης Αλέξανδρος,
            Τάκης Παναγιωτόπουλος, Ελένη Μυριβήλη, Αναστασία Στρατηγέα, Ευθύμιος
            Μπακογιάννης, Αυγή Βάσση, Ήβη Νανοπούλου, Ειρήνη Τσακιροπούλου,
            Αθηνά Γιαννακού, Γεωργία Σπηλιοπούλου, Γεωργία Γκουμοπούλου, Ειρήνη
            Γρατσία, Στέλιος Λεκάκης, Μιράντα Δανδουλάκη, Ευάγγελος Αγγέλης,
            Θεοδώρα Αντωνακάκη, Φρόσω Δημητρακοπούλου, Χάρης Δούκας, Μιλτιάδης
            Λαζόγλου, Στέλιος Λεκάκης, Ιωάννης Λεμέσιος, Ελένη Μαΐστρου, Ιωάννης
            Παππάς, Γιάννης Παρασκευόπουλος, Γιάννης Σέμπος, Άγγελος
            Σωτηρόπουλος, Ιωάννα Τσαλακανίδου, Μαργαρίτα Πετρολιάγκη, Ελένη
            Χολέβα, Γεώργιος Κουνενής, Δημήτρης Στουρνάρας.{" "}
          </p>
        </section>
      </article>
    );
  } else {
    return (
      <article>
        <section className="main-col">
          <h1 className="h2">Who's involved?</h1>
          <h1 className="h3">Our contributors</h1>
          <p>
            Colouring Athens was developed based on the prototype of Colouring
            London, as an open database and knowledge sharing platform built by
            and for those using, creating, managing, monitoring buildings and
            those undertaking research into the building stock. Whether you're a
            resident able to colour in information for just one building, or a
            specialist society or government body providing datasets for the
            city as a whole, your contribution is greatly appreciated. Each
            entry will support research into open tools that help us make our
            cities more sustainable.
          </p>
          <h1 className="h3">Our team</h1>
          <p>
            The project is run by a small multidisciplinary team, and links into
            international networks which bring together expertise in local
            areas, software engineering, data science, architecture, building
            conservation and history, graphic design, open data, colour, and the
            development of community-led collaborative maintenance tools
            designed to improve the quality of the building stock. The platform
            is developed by the Urban Planning Research Lab of the School of
            Architecture and the Geochoros Geospatial Analysis and GIS Research
            Group of the School of Rural, Surveying and Geoinformatics
            Engineering of the National Technical University of Athens.
            Colouring Athens is part of the international Colouring Cities
            Research Programme run by The Alan Turing Institute, the United
            Kingdom's national institute for data science and artificial
            intelligence.
          </p>
          <h1 className="h3">Our funders</h1>
          <p>
            Colouring Athens is funded by the Athens Development and Destination
            Management Agency.
          </p>
          <h1 className="h3">Advisors</h1>
          <p>
            Our thanks go to the many Greek organisations, government and
            academic departments for providing time, encouragement, and ideas on
            content, since 2021, including the Athens Development and
            Destination Management Agency, the City of Athens, representatives
            of the Ministry of Environment and Energy, Monumenta, Elliniki
            Etairia (Society for the Environment and Cultural Heritage - ELLET
            ), the Global Sustainable Tourism Council, Thymio Papayiannis &
            Associates, Geochoros Meletitiki, representatives of the Schools of
            Architecture, Electrical Engineering, Rural, Surveying and
            Geoinformatics Engineering, and Chemical Engineering of the National
            Technical University of Athens and of the School of Architecture of
            the Aristotle University of Thessaloniki, and to more than 500
            professionals, academics and students who expressed their needs,
            opinions and ideas on the project at its initial phase by responding
            to our questionnaires.
          </p>
          <h1 className="h3">Our international partners</h1>
          <p>
            Our international partners are: The Alan Turing Institute (Colouring
            London and Colouring Cities Research Programme); The American
            University of Beirut (Colouring Beirut); The University of Bahrain &
            the Bahrain Authority for Culture and Antiquities (Colouring
            Bahrain); The University of New South Wales (Colouring Australia);
            the Leibniz Institute for Ecological Urban and Regional Development
            (Colouring Dresden); King’s College London & Institut Teknologi
            Bandung (Colouring Athens), and The Colour Research Institute,
            China Academy of Art.
          </p>
          <h1 className="h3">Special thanks</h1>
          <p>
            Special thanks go to the following individuals who provided
            exceptional support, encouragement and assistance to Colouring
            Athens during its first development phase (2021-2022):
          </p>
          {/* <p>Help us colour Athens’ buildings now!</p> */}
          <p>
            Polly Hudson, Falli Palaiologou, Tom Russell, Ed Chalstrey, Mateusz
            Konieczny, Evangelos Vlachos, Charis Biskos, Alexia Panayiotopoulou,
            Athanasios Pagonis, Archontoula Vasilara, Tsiatsiamis Alexandros,
            Takis Panayiotopoulos, Eleni Mirivili, Anastasia Stratigea,
            Efthymios Bakoyiannis, Avgi Vassi, Ivi Nanopoulou, Eirini
            Tsakiropoulou, Athena Giannakou, Georgia Spiliopoulou, Georgia
            Gkoumopoulou, Eirini Gratsia, Stelios Lekakis, Miranta Dandoulaki,
            Evangelos Angelis, Theodora Antonakaki, Froso Dimitrakopoulou,
            Charis Doukas, Miltiadis Lazoglou, Stelios Lekakis, Ioannis
            Lemesios, Eleni Maistrou, Ioannis Pappas, Yiannis Paraskevopoulos,
            Giannis Sempos, Angelos Sotiropoulos, Ioanna Tsalakanidou, Margarita
            Petroliagki, Eleni Choleva, Georgios Kounenis, Dimitris Stournaras.
          </p>
        </section>
      </article>
    );
  }
};

export default WhoIsEnvolved;
