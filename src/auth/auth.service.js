import { firebaseAuth } from '../firebase/firebase';

class AuthService {
  signIn = () => {
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebaseAuth.GoogleAuthProvider.PROVIDER_ID,
        firebaseAuth.EmailAuthProvider.PROVIDER_ID
      ]
    };

    const ui = new firebaseui.auth.AuthUI(firebaseAuth());
    ui.start('#auth-container', uiConfig);
  };

  signOut = () => {
    firebaseAuth().signOut();
  };
}

export default AuthService;
