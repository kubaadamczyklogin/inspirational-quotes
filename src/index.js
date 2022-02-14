import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import App from './App';

const Url = "https://examples.devmastery.pl/random-stuff/graphql";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: Url
  })
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);