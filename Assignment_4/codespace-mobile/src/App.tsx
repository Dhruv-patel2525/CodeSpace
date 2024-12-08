import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Storage } from "@ionic/storage";

import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Dark Mode */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import SideMenu from "./components/sideMenu/sideMenu";
import Landing from "./pages/landing/landing";
import CourseList from "./pages/courses/courses";
import InstructorPage from "./pages/instructor/instructor";
import ViewCourse from "./pages/courses/viewCourse";
import AddCourse from "./pages/instructor/addCourse";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

setupIonicReact();

let storage: Storage;

const initStorage = async () => {
  storage = new Storage();
  await storage.create();
};

// Call the init function on app load
initStorage();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* Side Menu */}
      <SideMenu />

      {/* Router Outlet with Content */}
      <IonRouterOutlet id="main-content">
        <Route exact path="/landing">
          <Landing />
        </Route>
        <Route exact path="/courses" component={CourseList} />
        <Route exact path="/instructor" component={InstructorPage} />
        <Route exact path="/courses/:id" component={ViewCourse} />
        <Route exact path="/instructor/addCourse" component={AddCourse} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/">
          <Redirect to="/landing" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export { storage };
export default App;
