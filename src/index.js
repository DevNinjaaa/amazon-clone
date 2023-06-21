import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CountryProvider } from "./context/countryContext/country.context";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/userContext/userContext";
import { ApolloProvider } from "@apollo/client";

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CountryProvider>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </CountryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
