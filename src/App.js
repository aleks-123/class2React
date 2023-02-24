import { AppClass } from "./AppClass";
import Hello from "./components/Hello";
import HelloinMacedonia from "./components/HelloinMacedonia";
import Hobies from "./components/Hobies";

import "./css/style.css";

// Imeto na komponentite mora da pocnuva so golema bukva
function App() {
  let number = 10;

  const student = {
    name: "Laura",
    lastName: "Angelova",
  };

  function studentFullName(student) {
    return student.name + " " + student.lastName;
  }

  const print = () => {
    console.log("Hello from the console");
  };

  return (
    <div>
      {/* <h1>Hello from Martin</h1>
      <h1>Hello from React!!</h1>
      <p>5 + 5</p>
      <p>{5 + 5 + number} </p>
      <p>the Result is: {5 + 5 + number} </p>
      <h2 className="hello">Hello, {studentFullName(student)}</h2>
      <button onClick={print}>Click me</button>
      <a target="_blank" rel="noreferrer" href="http://www.google.com">
        Google
      </a>
      <AppClass /> */}
      <Hello />
      <HelloinMacedonia />
      <Hobies />
    </div>
  );
}

// Kreirajte komponenta kade vo nekoj element stavete gi vasite 3 hobija
// Potoa da kreirame druga komponenta kade vo nekoj element kje go stavite vaseto omileno hobi
// I da kreirame treta komponenta kade sto kje napisime nekoj text my favorite hoby is tavete nekoja slika od vaseto

export default App;
