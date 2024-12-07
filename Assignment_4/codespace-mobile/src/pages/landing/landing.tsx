import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import "./landing.css";

const Landing: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>CodeSpace</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <section className="intro-section">
          <h1 className="intro-h1">
            Master Coding, Solve Problems, Build the Future
          </h1>
          <p className="intro-p">
            Learn by doing, challenge yourself, and collaborate with coders from
            around the globe.
          </p>
          <IonButton
            className="intro-button"
            expand="block"
            routerLink="/problems"
            aria-label="Get Started with Problems">
            Get Started
          </IonButton>
        </section>

        <section className="features-section">
          <h2 className="mb-5 features-title">Our Platform Features</h2>
          <IonGrid>
            <IonRow>
              <IonCol size="12" size-md="6" size-lg="3">
                <IonCard className="feature-item" routerLink="/courses">
                  <div className="feature-icon">📚</div>
                  <IonCardContent>
                    <h3>Courses</h3>
                    <p>
                      Access structured learning paths to master different
                      programming languages.
                    </p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="12" size-md="6" size-lg="3">
                <IonCard className="feature-item" routerLink="/problems">
                  <div className="feature-icon">🧠</div>
                  <IonCardContent>
                    <h3>Practice Problems</h3>
                    <p>
                      Solve problems of varying difficulty to hone your skills
                      and boost your confidence.
                    </p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="12" size-md="6" size-lg="3">
                <IonCard
                  className="feature-item"
                  routerLink="/coding_competition">
                  <div className="feature-icon">🏆</div>
                  <IonCardContent>
                    <h3>Coding Competitions</h3>
                    <p>
                      Challenge yourself with live competitions and win rewards.
                    </p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="12" size-md="6" size-lg="3">
                <IonCard className="feature-item" routerLink="/community">
                  <div className="feature-icon">👥</div>
                  <IonCardContent>
                    <h3>Community Support</h3>
                    <p>
                      Join a vibrant community of coders to ask questions and
                      share knowledge.
                    </p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        <section className="cta-section">
          <h2>Ready to Start Your Coding Journey?</h2>
          <IonButton expand="block" routerLink="/signup">
            Join Now
          </IonButton>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Landing;
