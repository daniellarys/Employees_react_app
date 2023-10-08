
import React, { useState, useEffect } from "react";
import { InputTask, TaskForm, ButtonWork, Header,Recap, RecapTwo } from "../components/Styl";

const TaskTab = ({ employees, maleCount, femaleCount }) => {
  const [requiredMeters, setRequiredMeters] = useState(0);
  const [timeLimit, setTimeLimit] = useState(0);
  const [canPlanTask, setCanPlanTask] = useState(false);

  useEffect(() => {
    // Get all employees per hour
    const metersPerHour = employees.reduce(
      (totalMeters, employee) =>
        totalMeters + (employee.gender === "men" ? 1 : 0.5),
      0
    );

    // Is there sufficient amount of persons to be job done? :-)
    const totalMeters = metersPerHour * timeLimit;
    setCanPlanTask(
      requiredMeters > 0 && timeLimit > 0 && totalMeters >= requiredMeters
    );
  }, [requiredMeters, timeLimit, employees]);

  const handlePlanTask = () => {

    console.log("Jde planovat? Ano!");
  };

  return (
    <TaskForm>
      <Header>
        <h2>PLANNING EXCAVATION WORKS</h2>
      </Header>
      <Recap>
        <p>MEN: {maleCount}</p>
        <p>WOMAN: {femaleCount}</p>
      </Recap>

      <InputTask
        type="number"
        placeholder="Enter meters"
        value={requiredMeters}
        onChange={(e) => setRequiredMeters(e.target.value)}
      />

      <InputTask
        type="number"
        placeholder="Enter hours"
        value={timeLimit}
        onChange={(e) => setTimeLimit(e.target.value)}
      />

      <ButtonWork
        onClick={handlePlanTask}
        style={{ backgroundColor: canPlanTask ? "green" : "red" }}
        disabled={!canPlanTask}
      >
        Work planning
      </ButtonWork>
      {canPlanTask ? (
        <RecapTwo>
          Conditions are met! YAAAYYY!!!
        </RecapTwo>
      ) : null}
    </TaskForm>
  );
};

export default TaskTab;
