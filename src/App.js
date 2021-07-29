// Import Statements
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Resume from "./components/resume";
import Project from "./components/project";
import Blog from "./blog/blog";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/projects" exact component={Project} />
        <Route
          path="/blog/posts"
          exact
          render={({ history, match }) => (
            <Blog history={history} basename={match.url} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
