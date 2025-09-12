// Importar Firebase SDK modular
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD9JZ_d2XSv6sVM9TiPlPxaQMzrfgevyKY",
  authDomain: "cardlearnliberty.firebaseapp.com",
  projectId: "cardlearnliberty",
  storageBucket: "cardlearnliberty.firebasestorage.app",
  messagingSenderId: "87566608361",
  appId: "1:87566608361:web:9bd9239ef1a51862534d78"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configurar proveedor Google
const provider = new GoogleAuthProvider();

// Botón de login
const googleBtn = document.getElementById("google-login");
const mensaje = document.getElementById("mensaje");

googleBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      mensaje.textContent = `✅ Bienvenido ${user.displayName} (${user.email})`;
      console.log("Usuario:", user);
    })
    .catch((error) => {
      mensaje.textContent = "❌ Error: " + error.message;
      console.error(error);
    });
});
