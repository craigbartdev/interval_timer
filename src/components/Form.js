import { useRef } from "react";

export default function Form(props) {
  const workTimeRef = useRef();
  const shortBreakTimeRef = useRef();
  const longBreakTimeRef = useRef();
  const roundsRef = useRef();

  function submitForm(e) {
    e.preventDefault();

    props.setTimer({
      workTime: workTimeRef.current.value,
      shortBreakTime: shortBreakTimeRef.current.value,
      longBreakTime: longBreakTimeRef.current.value,
      rounds: roundsRef.current.value
    });

    props.setFormStatus(false);
  }

  return (
    <div>
      <h1>Get Started</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="workTime">Work Time: </label>
          <input
            type="number"
            name="workTime"
            required
            defaultValue={props.timer.workTime}
            ref={workTimeRef}
            step="10"
            min="30"
            max="60"
          />{" "}
          seconds
        </div>
        <div>
          <label htmlFor="shortBreakTime">Break Time: </label>
          <input
            type="number"
            name="shortBreakTime"
            required
            defaultValue={props.timer.shortBreakTime}
            ref={shortBreakTimeRef}
            step="5"
            min="5"
            max="30"
          />{" "}
          seconds
        </div>
        <div>
          <label htmlFor="longBreakTime">Long Break Time: </label>
          <input
            type="number"
            name="longBreakTime"
            required
            defaultValue={props.timer.longBreakTime}
            ref={longBreakTimeRef}
            step="10"
            min="10"
            max="60"
          />{" "}
          seconds
        </div>
        <div>
          <label htmlFor="rounds">Circuits: </label>
          <input
            type="number"
            name="rounds"
            required
            defaultValue={props.timer.rounds}
            ref={roundsRef}
            min="1"
            max="10"
          />
        </div>
        <div>
          <button>Start</button>
        </div>
      </form>
    </div>
  );
}
