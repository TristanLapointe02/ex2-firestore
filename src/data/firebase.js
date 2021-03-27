import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBj5u00ZQj4DGNkngaFJjBidnqHQOz2Clg",
  authDomain: "iwra-react.firebaseapp.com",
  projectId: "iwra-react",
  storageBucket: "iwra-react.appspot.com",
  messagingSenderId: "914527943765",
  appId: "1:914527943765:web:59cf81b461c88e28d968dc"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();

/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) ci-dessous la référence à "bd" obtenue ci-dessus (pour pouvoir l'utiliser dans le composant ListeProduits)

export default bd;