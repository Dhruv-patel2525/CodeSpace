import React, { useRef, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonCheckbox,
  IonText,
  IonButtons,
  IonMenuButton,
  useIonRouter,
} from "@ionic/react";
import authService from "../../services/authService";
import "./login.css";

const Login: React.FC = () => {
  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useIonRouter(); // Use Ionic router for navigation

  const onHandleLogin = async (email: string, password: string) => {
    try {
      const data = await authService.login(email, password);
      console.log("Login Successful:", data);

      setError(null); // Clear any previous error
      router.push("/courses", "root"); // Navigate to /courses page
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password. Please try again.");
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (emailRef.current?.value as string) || "";
    const password = (passwordRef.current?.value as string) || "";
    onHandleLogin(email, password);

    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
  };

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={submitHandler}>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" ref={emailRef} required />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" ref={passwordRef} required />
          </IonItem>

          <IonItem lines="none">
            <IonCheckbox slot="start" />
            <IonLabel>Remember Me</IonLabel>
          </IonItem>

          {error && (
            <IonText color="danger">
              <p className="ion-padding-start">{error}</p>
            </IonText>
          )}

          <IonButton expand="block" type="submit" className="ion-margin-top">
            Login
          </IonButton>
        </form>

        <div className="ion-text-center ion-margin-top">
          <IonText>
            <a href="#" className="login-link">
              Forgot Password?
            </a>
          </IonText>
          <br />
          <IonText>
            <a href="/signup" className="login-link">
              Sign Up
            </a>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
