import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Drawer } from "@mui/material";
import Account from "./account";

const Teste: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Abre o Drawer automaticamente quando for /account
    if (location.pathname === "/account/register") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [location]);

  return (
    <>
      {/* Drawer que aparece automaticamente em /account */}
      <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
        <Account route={"register"} />
      </Drawer>
    </>
  );
};

export default Teste;
