import React, { useState } from "react";
import {
  EmployeeList,
  EmployeeItem,
  Container,
  InputWrapper,
  Input,
  InputRadio,
  Button,
  Radlabel,
} from "../components/Styl";

const EmployeesTab = ({ employees, setEmployees }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("men");
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isSurnameEmpty, setIsSurnameEmpty] = useState(false);

  const handleAddEmployee = () => {
    if (!name || !surname) {
      if (!name) setIsNameEmpty(true);
      if (!surname) setIsSurnameEmpty(true);
      return;
    }

    const newEmployee = {
      name: name,
      surname: surname,
      gender: gender,
    };

    setEmployees([...employees, newEmployee]);

    setName("");
    setSurname("");
    setGender("men");
    setIsNameEmpty(false);
    setIsSurnameEmpty(false);
  };

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <EmployeeList>
        <ul>
          {employees.map((employee, index) => (
            <EmployeeItem key={index}>
              {employee.name} {employee.surname}- {employee.gender}
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "red",
                  fontWeight: "bolder",
                  borderRadius: 50 + "%",
                  height: 25 + "px",
                  width: 25 + "px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleDeleteEmployee(index)}
              >
                X
              </button>
            </EmployeeItem>
          ))}
        </ul>
      </EmployeeList>
      <Container>
        <InputWrapper>
          <Input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
              setIsNameEmpty(false);
            }}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            value={surname}
            placeholder="Surname"
            onChange={(e) => {
              setSurname(e.target.value);
              setIsSurnameEmpty(false);
            }}
          />
        </InputWrapper>

        <InputWrapper>
          <InputRadio
            type="radio"
            value="men"
            checked={gender === "men"}
            onChange={(e) => setGender(e.target.value)}
          />
        </InputWrapper>
        <Radlabel>MEN</Radlabel>

        <InputWrapper>
          <InputRadio
            type="radio"
            value="woman"
            checked={gender === "woman"}
            onChange={(e) => setGender(e.target.value)}
          />
        </InputWrapper>
        <Radlabel> WOMAN</Radlabel>

        <InputWrapper>
          <Button onClick={handleAddEmployee}>Add Employee</Button>
        </InputWrapper>
      </Container>
      {isNameEmpty && <span>Please enter the name.</span>}
      <br></br>
      {isSurnameEmpty && <span>Surname must be set!</span>}
    </div>
  );
};

export default EmployeesTab;
