import React from "react";
import { render } from "react-dom";

export default function Hi({ name }) {
  return <p>Hi. {name}</p>;
}
render(<Hi name="David" />, document.getElementById("app"));
