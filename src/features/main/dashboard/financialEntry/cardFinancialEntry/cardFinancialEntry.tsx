import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../styles/themes";
import { Drawer } from "@mui/material";
import DrawerFinancialData from "../drawerContent/drawerContent";

interface FinancialEntryProps {
  text: string;
  icon: string;
}

// Usando a tag HTML button diretamente com styled-components
const CardFinancialEntryStyled = styled.button<{ variant?: string }>`
  background-color: ${theme.gray};
  border-radius: 25px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  width: 50%;

  i {
    font-size: 20px;
    background-color: ${theme.pink_second};
    padding: 0.75rem;
    border-radius: 50%;
    color: ${theme.pink_third};
  }
  p {
    font-weight: 500;
    font-size: 16px;
  }

  &:hover {
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 992px) {
    font-size: 18px;
    width: 20%;
    border: 2px solid transparent;
    transition: .3s ease;
    cursor: pointer;

    &:hover {
      border-color: ${theme.pink};
    }
  }
`;

const drawerStyle: React.CSSProperties = {
  padding: "3rem 2rem 2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  justifyContent: "space-between",
};

const BtnCloseButton = styled.button`
  position: absolute;
  right: 5%;
  top: 3%;
  border-radius: 50%;
  cursor: pointer;

  i {
    border-radius: 50%;
    width: 45px;
    height: 45px;
    border: 2px solid transparent;
    font-size: 32px;
    color: ${theme.pink};
    background-color: ${theme.gray};
    transition: all 0.2s ease;
  }

  i:hover {
    border-color: ${theme.pink};
  }
`;

const CardFinancialEntry: React.FC<FinancialEntryProps> = ({ text, icon }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Abrir o Drawer */}
      <CardFinancialEntryStyled onClick={toggleDrawer}>
        <i className={`fi fi-sr-${icon}`}></i>
        <p>{text}</p>
      </CardFinancialEntryStyled>

      {/* Drawer do MUI */}
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer}>
        <section style={drawerStyle}>
          {/* Fechar drawer do MUI */}
          <BtnCloseButton onClick={toggleDrawer}>
            <i className="fi fi-sr-minus-small"></i>
          </BtnCloseButton>

          {/* Conteudo drawer do MUI */}
          <DrawerFinancialData type={text} />
        </section>
      </Drawer>
    </>
  );
};

export default CardFinancialEntry;
