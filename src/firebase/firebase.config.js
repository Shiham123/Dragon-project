import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBGZ5Wu_Bx9LGEn3XWu03zhhnyQD90IzUc',
  authDomain: 'dragon-project-93949.firebaseapp.com',
  projectId: 'dragon-project-93949',
  storageBucket: 'dragon-project-93949.appspot.com',
  messagingSenderId: '637941661537',
  appId: '1:637941661537:web:30db6f3ab16afcf7914f20',
};

const app = initializeApp(firebaseConfig);
const globalAuth = getAuth(app);

export default globalAuth;
