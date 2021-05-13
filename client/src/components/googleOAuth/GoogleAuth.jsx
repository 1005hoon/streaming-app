import React, { useEffect } from "react";
import HeaderButton from "../common/button/HeaderButton";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";

const GoogleAuth = (props) => {
  // actual sign in logic
  const signInHandler = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signIn();
  };

  // actual sign out logic
  const signOutHandler = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signOut();
  };

  // state management for user state updates
  const authStateChangeHandler = (authInstance) => {
    const isLoggedIn = authInstance.isSignedIn.get();

    if (isLoggedIn) {
      const user = {
        id: authInstance.currentUser.get().getBasicProfile().getId(),
        email: authInstance.currentUser.get().getBasicProfile().getEmail(),
        name: authInstance.currentUser.get().getBasicProfile().getName(),
        avatar: authInstance.currentUser.get().getBasicProfile().getImageUrl(),
      };

      props.signIn(user);
    } else {
      props.signOut();
    }
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

      authStateChangeHandler(authInstance);

      // listening to change in auth state
      authInstance.isSignedIn.listen(() =>
        authStateChangeHandler(authInstance)
      );
    });
  }, []);

  const renderAuthButton = ({ isSignedIn, className }) => {
    if (isSignedIn === false) {
      return (
        <HeaderButton
          width="10rem"
          className={className}
          onClick={signInHandler}
        >
          로그인
        </HeaderButton>
      );
    } else {
      return (
        <HeaderButton
          width="10rem"
          className={className}
          onClick={signOutHandler}
        >
          로그아웃
        </HeaderButton>
      );
    }
  };

  return renderAuthButton(props);
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
