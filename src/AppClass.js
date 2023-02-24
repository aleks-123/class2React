import React from "react";
import { PlaceClass } from "./PlaceClass";
import { TestKomponenta } from "./TestKompnenta";

export class AppClass extends React.Component {
  render() {
    return (
      <div>
        <h1>This is class component</h1>
        <PlaceClass />
        <TestKomponenta />
      </div>
    );
  }
}
