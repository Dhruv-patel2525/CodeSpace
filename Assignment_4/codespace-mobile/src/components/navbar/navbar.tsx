import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuButton,
  IonButton,
} from "@ionic/react";

const NavBar: React.FC = () => {
  const logoutHandler = () => {
    console.log("Logout triggered");
  };

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button routerLink="/home">
              Home
            </IonItem>
            <IonItem button routerLink="/about">
              About
            </IonItem>
            <IonItem button routerLink="/contact">
              Contact
            </IonItem>
            <IonItem button onClick={logoutHandler}>
              Logout
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Code Space</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default NavBar;
