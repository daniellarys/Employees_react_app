import React, { useState } from "react";
import EmployeesTab from "./components/EmployeesTab";
import TaskTab from "./components/TaskTab";
import { PageContainer, TabButton, TabContainer } from "../src/components/Styl";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [activeTab, setActiveTab] = useState("employees"); // Přidali jsme stavovou proměnnou pro aktivní tab

  // Změnit aktivní tab na "employees"
  const showEmployeesTab = () => {
    setActiveTab("employees");
  };

  // Změnit aktivní tab na "task"
  const showTaskTab = () => {
    setActiveTab("task");
  };

  // Funkce pro získání počtu mužů a počtu žen ze seznamu zaměstnanců
  const getGenderCounts = () => {
    const maleCount = employees.filter(
      (employee) => employee.gender === "men"
    ).length;
    const femaleCount = employees.filter(
      (employee) => employee.gender === "woman"
    ).length;
    return { maleCount, femaleCount };
  };

  // Získání počtu mužů a počtu žen
  const { maleCount, femaleCount } = getGenderCounts();

  return (
    <PageContainer>
      <TabContainer>
        <TabButton
          active={activeTab === "employees"}
          onClick={showEmployeesTab}
        >
          List Of Employees
        </TabButton>
        <TabButton active={activeTab === "task"} onClick={showTaskTab}>
          Task
        </TabButton>
      </TabContainer>

      {activeTab === "employees" ? (
        <EmployeesTab employees={employees} setEmployees={setEmployees} />
      ) : (
        <TaskTab
          employees={employees}
          maleCount={maleCount}
          femaleCount={femaleCount}
        />
      )}
    </PageContainer>
  );
};

export default App;
