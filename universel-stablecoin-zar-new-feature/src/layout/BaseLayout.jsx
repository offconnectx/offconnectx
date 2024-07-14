import { Switch, Route } from "react-router-dom";
import { Sidebar } from "../components";

const BaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* left of page */}
      <Sidebar />
      {/* right side/content of the page */}
      <div className="content-wrapper">
        <Switch>
          {/* Define your routes here */}
          <Route exact path="/" render={() => <div>Home Page Content</div>} />
          <Route path="/about" render={() => <div>About Page Content</div>} />
          <Route path="/contact" render={() => <div>Contact Page Content</div>} />
        </Switch>
      </div>
    </main>
  );
};

export default BaseLayout;



/*
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

const BaseLayout = () => {
  return (
    <main className="page-wrapper">
      
      <Sidebar />
      
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default BaseLayout;
*/