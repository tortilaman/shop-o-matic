// Packages
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// Modules
import DataDump from './components/DataDump'
import './App.css';

require('dotenv').config();

// The Apollo client
const client = new ApolloClient({
    uri: process.env.GQL_URI || 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <DataDump/>
      </div>
    </ApolloProvider>
  );
}

export default App;
