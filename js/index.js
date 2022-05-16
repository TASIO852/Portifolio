import {
    initializeApp
} from "firebase/app";
import {
    getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvdPF1UUEY52hk_CyvyihUA9R5NjbA73k",
    authDomain: "portifolio-33048.firebaseapp.com",
    projectId: "portifolio-33048",
    storageBucket: "portifolio-33048.appspot.com",
    messagingSenderId: "274958013113",
    appId: "1:274958013113:web:0fbfa1537ba2d0c180c168",
    measurementId: "G-738V8MQN63"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const form = document.querySelector('form');

form.addEventListener(('submit'), (e) => {

    e.preventDefault();

    let Name = document.querySelector('input[Name=Nome]').value;
    let Telefone = document.querySelector('input[Name=Telefone]').value;
    let Email = document.querySelector('input[Name=Email]').value;

    db.collection('Name').add({
        Name: Name
    });
    db.collection('Telefone').add({
        Telefone: Telefone
    });
    db.collection('Email').add({
        Email: Email
    });

    alert('Formulario feito com sucesso!');
    form.reset();
});