import React, { useState, useEffect } from 'react';
import PhotoList from '../PhotoList/PhotoList';

//---------- import firebase

import { collection, getDocs, query, where } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyDmOA93VjTz_2iC48f338SfKfd6VJEojds",
    authDomain: "ana-bauer-portfolio.firebaseapp.com",
    projectId: "ana-bauer-portfolio",
    storageBucket: "ana-bauer-portfolio.appspot.com",
    messagingSenderId: "761410560127",
    appId: "1:761410560127:web:e68692637d7e5051569f4a"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  async function getItemsFromDatabase() {
    const photosColectionRef = collection(db, 'photos');
    let snapshotPhotos = await getDocs(photosColectionRef);
    const documents = snapshotPhotos.docs;
    const dataPhotos = documents.map((doc) => ({ ...doc.data(), id: doc.id}))
    return dataPhotos;  
}

async function getItemsByCategoryFromDatabase(categoryURL) {
    const productsColectionRef = collection(db, 'photos');
  
    const q = query(productsColectionRef, where("category", "==", categoryURL));
  
    let snapshotPhotos = await getDocs(q);
    const documents = snapshotPhotos.docs;
    const dataPhotos = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataPhotos;
  }
  
function PhotoListContainer() {
  const [photos, setPhotos] = useState([]);

  const params = useParams();
  const idCategory = params.idCategory;
  
  async function leerDatos() {
    if(idCategory === undefined) {
        let respuesta = await getItemsFromDatabase();
        setPhotos(respuesta);
    } else {
        let respuesta = await getItemsByCategoryFromDatabase(idCategory);
        setPhotos(respuesta);
    }
  }

  useEffect(() => {
    leerDatos();
  }, [idCategory]);


  return (
    <div>
        <PhotoList photos={ photos }/>
    </div>
  )
}

export default PhotoListContainer;