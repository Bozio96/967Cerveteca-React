import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAq5ISBG5xcoKezHHan8fQJjCeyrJ7LC5k",
  authDomain: "cerveteca-e0de4.firebaseapp.com",
  projectId: "cerveteca-e0de4",
  storageBucket: "cerveteca-e0de4.appspot.com",
  messagingSenderId: "37028754971",
  appId: "1:37028754971:web:17ad4228ca57536033eabe"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const productosColeccion = collection(db, "productos")
export const ventasColeccion = collection(db, "ventas")