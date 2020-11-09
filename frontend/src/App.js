// Packages
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Modules
import DataDump from "./components/DataDump";
import NavigationPanel from "./components/NavigationPanel";
import FoodLibrary from "./components/FoodLibrary/index";
import ShoppingList from "./components/ShoppingList/index";

require("dotenv").config();

// The Apollo client
const client = new ApolloClient({
  uri: process.env.GQL_URI || "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App flex">
        <Router>
          <NavigationPanel />
          <main className="container">
            <Switch>
              <Route path="/list">
                <ShoppingList />
              </Route>
              <Route path="/food">
                <FoodLibrary />
              </Route>
              <Route path="/">
                <DataDump />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
