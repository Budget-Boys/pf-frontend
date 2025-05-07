import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/themes";
import { Drawer } from "@mui/material";

// Usando a tag HTML button diretamente com styled-components
const ButtonStyled = styled.button`
  background-color: ${theme.pink};
  color: ${theme.white};
  border-radius: 15px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.blue_second};
    color: ${theme.pink};
  }

  &:focus {
    outline: none;
  }
  @media (min-width: 968px) {
    padding: 14px 30px;
    font-size: 18px;
  }
`;

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Abrir o Drawer */}
      <ButtonStyled onClick={toggleDrawer}>{label}</ButtonStyled>

      {/* Drawer do MUI */}
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer}>
        <div style={{ width: "100%", padding: "20px" }}>
          <h2>Este é o conteúdo do Drawer</h2>
          <p>Você pode colocar qualquer conteúdo aqui!</p>
        </div>
      </Drawer>
    </>
  );
};

export default Button;
