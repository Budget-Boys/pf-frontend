import styled from "styled-components";
import { theme } from "../../styles/themes";
interface ButtonProps {
  label: string;
}

// Usando a tag HTML button diretamente com styled-components
const RoutineStyled = styled.div`
  width: 45%;
  
  input {
        display: none;
  }

  label {
    display: flex;
    background-color: ${theme.gray};
    border: 1px solid transparent;
    font-size: 16px;
    padding: .8rem;
    height: 71px;
    align-items: center;
    justify-content: center;
    transition: .3s ease-in-out;
    cursor: pointer;
    border-radius: 35px;
    
    p {
      font-weight: 500;
      text-transform: capitalize;
      text-align: center;
      }
    }   

  input:checked + label {
    background-color: ${theme.pink}; 
    p {
      color: white;
      }   
    }
`;

const Radio: React.FC<ButtonProps> = ({ label }) => {
  return (
    <>
      <RoutineStyled>
        <input type="radio" id={`radio-${label}`} name="routine-option" />
        <label htmlFor={`radio-${label}`}>
          <p>{label}</p>
        </label>
      </RoutineStyled>
    </>
  );
};

export default Radio;
