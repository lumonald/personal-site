import React from "react";
import { hydrate, render } from 'react-dom';

import App from "./components/App";

import "tachyons/css/tachyons.min.css";

const rootElement = document.getElementById('root');

rootElement.hasChildNodes() ? (hydrate(<App />, rootElement)) : ( render(<App />, rootElement))
