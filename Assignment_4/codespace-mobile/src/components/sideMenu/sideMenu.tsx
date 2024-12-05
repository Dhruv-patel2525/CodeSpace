import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle,
} from "@ionic/react";
import "./sideMenu.css";

const SideMenu: React.FC = () => {
  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem button routerLink="/login">
              Login
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem button routerLink="/home">
              Home
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem button routerLink="/courses">
              Courses
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem button routerLink="/problems">
              Problems
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
