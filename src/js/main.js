import "../css/main.css";

import request from "./request";
import { createCountries } from "./updataUI";

const API = "https://restcountries.com/v3.1/all";

request(API)
  .then((data) => {
    createCountries(data);
  })
  .then(() => {})
  .catch((err) => {
    alert(err.message);
  });
