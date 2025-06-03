import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/themes";
import { Drawer } from "@mui/material";
import Account from "../../features/account/account";

interface ButtonProps {
  label: string;
  variant: string;
}

// Usando a tag HTML button diretamente com styled-components
const ButtonStyled = styled.button<{ variant?: string }>`
  background-color: ${theme.pink};
  color: ${theme.white};
  border-radius: 15px;
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

  /* Estilo base por variante */
  ${({ variant }) => {
    switch (variant) {
      case "banner":
        return `
          padding: 1rem;
          font-size: 18px;
          width: 100%;
        `;
      default:
        return `
          padding: 12px 20px;
          font-size: 16px;
        `;
    }
  }}

  @media (min-width: 992px) {
    padding: 14px 30px;
    font-size: 18px;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, variant }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Abrir o Drawer */}
      <ButtonStyled onClick={toggleDrawer} variant={variant}>
        {label}
      </ButtonStyled>

      {/* Drawer do MUI */}
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer} >
        <Account route={"register"}/>
      </Drawer>
    </>
  );
};

export default Button;
