import React, { useEffect, useState } from "react";
import HeaderButton from "../common/button/HeaderButton";

const GoogleAuth = ({ className }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signInHandler = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signIn();
  };

  const signOutHandler = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signOut();
  };

  const authStateChangeHandler = (authInstance) => {
    const userAuthStatus = authInstance.isSignedIn.get();
    setIsSignedIn(userAuthStatus);
  };

  useEffect(() => {
    // init google oauth
    window.gapi.load("auth2", async () => {
      await window.gapi.auth2.init({
        clientId:
          "675704102971-6e83bhek30dmgj0r8bedforl3th7ubg7.apps.googleusercontent.com",
        scope: "email",
      });
      const authInstance = window.gapi.auth2.getAuthInstance();
      const userAuthStatus = authInstance.isSignedIn.get();

      setIsSignedIn(userAuthStatus);

      // listening to change in auth state
      authInstance.isSignedIn.listen(() =>
        authStateChangeHandler(authInstance)
      );
    });
  }, []);

  const renderAuthButton = (style) => {
    if (isSignedIn === false) {
      return (
        <HeaderButton width="10rem" className={style} onClick={signInHandler}>
          로그인
        </HeaderButton>
      );
    } else {
      return (
        <HeaderButton width="10rem" className={style} onClick={signOutHandler}>
          로그아웃
        </HeaderButton>
      );
    }
  };

  return renderAuthButton(className);
};

export default GoogleAuth;
