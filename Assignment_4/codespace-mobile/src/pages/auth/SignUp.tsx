import React, { useRef, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonText,
  useIonRouter,
} from "@ionic/react";
import authService from "../../services/authService";
import "./signup.css";

const SignUp: React.FC = () => {
  const nameRef = useRef<HTMLIonInputElement>(null);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const roleRef = useRef<HTMLIonSelectElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const confirmPasswordRef = useRef<HTMLIonInputElement>(null);

  const [error, setError] = useState<string | null>(null);
  const router = useIonRouter(); // Use Ionic router for navigation

  const onHandleSignUp = async (signUpData: any) => {
    try {
      if (signUpData.password !== signUpData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      console.log(signUpData);
      const  { name, email, role, password, confirmPassword }=signUpData;

      const data = await authService.register(name,email,role,password,confirmPassword);
      console.log("Signup Successful:", data);

      setError(null); // Clear any errors
      router.push("/login", "root"); // Redirect to login page after successful signup
    } catch (err) {
      console.error("Signup failed:", err);
      setError("Signup failed. Please try again.");
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const role = roleRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const confirmPassword = confirmPasswordRef.current?.value || "";

    const signUpData = { name, email, role, password, confirmPassword };
    onHandleSignUp(signUpData);

    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (roleRef.current) roleRef.current.value = undefined;
    if (passwordRef.current) passwordRef.current.value = "";
    if (confirmPasswordRef.current) confirmPasswordRef.current.value = "";
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Your Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={submitHandler}>
          <IonItem>
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput type="text" ref={nameRef} required />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" ref={emailRef} required />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Select Role</IonLabel>
            <IonSelect ref={roleRef} placeholder="Select your role">
              <IonSelectOption value="coder">Coder</IonSelectOption>
              <IonSelectOption value="instructor">Instructor</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" ref={passwordRef} required />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Confirm Password</IonLabel>
            <IonInput type="password" ref={confirmPasswordRef} required />
          </IonItem>

          {error && (
            <IonText color="danger">
              <p className="ion-padding-start">{error}</p>
            </IonText>
          )}

          <IonButton expand="block" type="submit" className="ion-margin-top">
            Sign Up
          </IonButton>
        </form>

        <div className="ion-text-center ion-margin-top">
          <IonText>
            Already have an account?{" "}
            <a href="/login" className="signup-link">
              Login
            </a>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
