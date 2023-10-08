import React, { useState } from "react";
import EmployeesTab from "./components/EmployeesTab";
import TaskTab from "./components/TaskTab";
import { PageContainer, TabButton, TabContainer } from "../src/components/Styl";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [activeTab, setActiveTab] = useState("employees"); // Add useState value for active tab

  // Change active to employees
  const showEmployeesTab = () => {
    setActiveTab("employees");
  };

  // Change ctive tab to task
  const showTaskTab = () => {
    setActiveTab("task");
  };

  // Function for retrieving numbers of mens and women
  const getGenderCounts = () => {
    const maleCount = employees.filter(
      (employee) => employee.gender === "men"
    ).length;
    const femaleCount = employees.filter(
      (employee) => employee.gender === "woman"
    ).length;
    return { maleCount, femaleCount };
  };

  // Get count of mens and women
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
