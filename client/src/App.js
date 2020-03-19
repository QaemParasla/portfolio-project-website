import React from "react";
import "./App.css";
const axios = require("axios");
let country = [];

axios
  .get("/api/countrylist")
  .then(function(response) {
    console.log("Response: " + JSON.stringify(response.data[0].countryAll));
    country = response.data[0].countryAll;
  })
  .catch(function(error) {
    console.log(error);
  });

function App() {
  return <>Hello</>;
}

export default App;
