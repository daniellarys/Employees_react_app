import styled from "styled-components";
export const PageContainer = styled.div`
  position: relative;

  display: flex;

  flex-direction: column;

  min-height: 100vh;

  width: 100%;

  align-items: center;

  background-color: #eadbcb;
`;

export const EmployeeList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #c9ada7;
  text-align: center;
`;
/* Barva pro pridane zamestnance */ 
export const EmployeeItem = styled.div`
  display: flex;
  flex-grow: 1;
  height: 45px;
  padding: 0 15px;
  width:100%;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  background-color: #c9ada7;
  color: #22333b;
  font-size: 15px;
  font-weight: bold;
  &:nth-child(even) {
    background-color: #22333b;
    color: #c9ada7;
  }
  
`;

export const EmployeeForm = styled.div`
  flex-direction: row;
  margin: 50px 0;
  padding-top: 0;
  justify-content: space-between;
  align-items: center;
`;
export const Input = styled.input`
  width: 130px;
  height: 25px;
  padding-left: 10px;
  background-color: #c9ada7;
`;

export const Button = styled.button`
  height: 40px;
  width:120px;
  color: red;
  cursor: pointer;
  background-color: #22333b;
  color: #c6ac8f;
  font-weight: bold;
`;

export const Buttons = styled(EmployeeForm)`
  width:250px;
  margin: 30px 0;
  height: 40px;
`;

export const TabButton = styled.button`
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 48%;
  margin: 0; 
  color: #22333b;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  margin-right: 10px;  
 background-color: ${(props) => (props.active ? "#C6AC8F" : "#22333b")};
  color: ${(props) => (props.active ? "#22333b" : "#C6AC8F")}; 

  }
`;

export const TaskForm = styled.div`
  flex-direction: column;
`;

/* Tohle je nastaveni pro text Planning Excavation works */
export const Header = styled.h2`
  margin-top: 20px;
  font-size: 20px;
  justify-content: center;
  color: #9c6a4f;
`;

/* Tohle je nastaveni pro udaj o poctu pohlavi */
export const Recap = styled.p`
  margin-top: 20px;
  font-size: 15px;
  text-align: center;
  color: #9c6a4f;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div`
  margin-right: 10px;
`;

export const InputRadio = styled.input`
  width: 10px;
  height: 25px;
  padding-left: 10px;
  cursor: pointer;
`;
 /* slouzi pro nastaveni RadioButton Labelu */
export const Radlabel = styled.label`
  font-weight: bold;
`;

/* Slouzi pro nastaveni containeru obalujici tlacitka pro prepinani mezi taby */
export const TabContainer = styled.div`
  display: flex;
  width: 450px;
  align-items: center;
`;
 /* Slouzi pro nastaveni poctu metru a casu */
export const InputTask = styled.input`
  display: grid;
  margin: auto;
  margin-top: 15px;
  width: 200px;
  height: 25px;
  padding-left: 10px;
  background-color: #c9ada7;
  align-items: center;
  display: flex;
  justify-content: center;
`;

/*Slouzi k nastaveni samotneho tlacitka, ktere ukazuje zda prace bude nebo ne */
export const ButtonWork = styled.button`
  display: grid;
  margin:auto;
  place-items: center; /* Zarovnání obsahu tlačítka na střed */
  width: 200px;
  height: 50px;
  background-color: #c6ac8f;
  font-weight: bold;
  margin-top: 20px; /* Odsazení z vrchní strany */
  color: #c6ac8f;

`;

/* Tohle je nastaveni pro udaj o poctu pohlavi */
export const RecapTwo = styled.p`
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
  color: green;
  font-weight: bold;
`;