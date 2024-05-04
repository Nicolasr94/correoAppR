import { initializeApp } from "firebase/app";
import { getDatabase,ref, set, onValue } from "firebase/database";

export default class  FirebaseFunction{
    #database;
    #firebaseConfig = {
    apiKey: "AIzaSyDdrkhgz6gN8y8fr6fE6aE3L_k1gg0eYWg",
    authDomain: "fir-correo-f505c.firebaseapp.com",
    databaseURL: "https://fir-correo-f505c-default-rtdb.firebaseio.com",
    projectId: "fir-correo-f505c",
    storageBucket: "fir-correo-f505c.appspot.com",
    messagingSenderId: "763543170600",
    appId: "1:763543170600:web:c2ee9aaed718d3160c4f1d"
    }

    constructor(){
        const app = initializeApp(this.#firebaseConfig);
        this.#database = getDatabase(app);
    }
    
    getAllPackagesSubsidiary (subsidiaryName) {
        const dbRef = ref(this.#database,`/sucursales/SANISIDRO/paquetes`);
        let dataToReturn;
        console.log("Fui creado")
        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
              const childKey = childSnapshot.key;
              const childData = childSnapshot.val();
              dataToReturn +=
              {
                  key:childKey,
                  data:childData
                }
                console.log(dataToReturn)
            });
            return dataToReturn;
          });
    }


   writePackagesData(subsidiaryName, packagesId, name,tyt){
    set(ref(this.#database,`/sucursales/${subsidiaryName}/paquetes/${packagesId}`),{
        name:name,
        codgTyT:tyt,
        date:"12/12/12",
        delivered:false
    })  
    .then((promise) =>{
        console.log({
            info:promise,
            setInfoIs:true})
        
    })
    .catch((error) => {
        console.log({
            info:error,
                setInfoIs:false
        })
                
            
    })
   }
}

