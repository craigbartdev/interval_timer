import { useState } from "react";
import Form from "./components/Form";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  const [formStatus, setFormStatus] = useState(true);
  const [timer, setTimer] = useState({
    workTime: 30,
    shortBreakTime: 10,
    longBreakTime: 30,
    rounds: 3
  });

  return (
    <div>
      {formStatus ? (
        <Form
          formStatus={formStatus}
          setFormStatus={setFormStatus}
          timer={timer}
          setTimer={setTimer}
        />
      ) : (
        <Timer
          formStatus={formStatus}
          setFormStatus={setFormStatus}
          timer={timer}
          setTimer={setTimer}
        />
      )}
    </div>
  );
}

export default App;
