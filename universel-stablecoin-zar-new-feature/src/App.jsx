import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login1";
import Signup from "./components/Signup1";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword1";
import Landing from "./landing";
import Transactions from "./components/Transactions";
import Transfer from "./components/Transfer";
import Send from "./components/Send";
import Deposit from "./components/Deposit1";
import Announcement from "./components/Announcement";

function App() {
  return (
    <div className="min-h-screen items-center justify-center">
       
      <div className=" w-full mt-24">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/transactions" component={Transactions} />
              <PrivateRoute exact path="/transfer" component={Transfer} />
              <PrivateRoute exact path="/send" component={Send} />
              <PrivateRoute path="/deposit" component={Deposit} />
              <PrivateRoute path="/announcement" component={Announcement} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/landing" component={Landing} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
