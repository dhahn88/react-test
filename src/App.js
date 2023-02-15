import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        {/* ${process.env.PUBLIC_URL} */}
        <Route path={`/movie/:id`}>
          <Detail />
        </Route>
        <Route path={`/`}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
