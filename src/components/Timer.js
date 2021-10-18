import { useState } from "react";

export default function Timer(props) {
  // 0 for work, 1 for short break, 2 for long break
  const [breakStatus, setBreakStatus] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [currentExercize, setCurrentExercize] = useState(1);
  const exercizes = 10;

  function exitTimer() {
    props.setFormStatus(true);
  }

  // go between work, long break, and short break at end of circuit
  function goToNext() {
    if (breakStatus === 0) {
        // exit if last exercize of last round
      currentRound >= props.timer.rounds && currentExercize >= exercizes
        ? exitTimer()
        : exercizes > currentExercize // else go to correct break
        ? setBreakStatus(1)
        : setBreakStatus(2);
    } else if (breakStatus === 1) {
      setBreakStatus(0);
      setCurrentExercize(currentExercize + 1);
    } else {
      setCurrentRound(currentRound + 1);
      setCurrentExercize(1);
      setBreakStatus(0);
    }
  }

  return (
    <div>
      <h1>This is the Timer Component</h1>
      <h1>{breakStatus}</h1>
      <h3>
        Rounds: {currentRound} / {props.timer.rounds}
      </h3>
      <h3>
        Exercize: {currentExercize} / {exercizes}
      </h3>
      <button onClick={goToNext}>Next</button>
      <button onClick={exitTimer}>Exit</button>
    </div>
  );
}
