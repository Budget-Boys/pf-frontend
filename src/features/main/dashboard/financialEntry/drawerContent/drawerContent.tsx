import { useState, type ChangeEvent } from "react";
import Input from "../../../../../components/input/input";
import GroupExpanses from "../groups/groupExpanse";
import GroupIncome from "../groups/groupIncome";
import style from "./drawerContent.module.sass";

interface FinancialProps {
  type: string;
}

const DrawerFinancialData: React.FC<FinancialProps> = ({ type }) => {
  const [form, setForm] = useState({
    price: "",
    radio: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function handleRadioChange(value: string) {
    setForm((prev) => ({
      ...prev,
      radio: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = await POST("http://localhost:8080/gymbro/person", form);

    if (result.success) {
      console.log(form);
    } else {
      console.error("Erro ao registrar usuário:", result.message);
    }
  }

  return (
    <>
      <div className={style.container_financialData}>
        <div className={style.title_drawer}>
          <h1>Quanto você deseja adicionar?</h1>
        </div>
        <form
          className={style.form_financialData}
          onSubmit={handleSubmit}
          id="finance-form"
        >
          <Input
            placeholder={"R$: 100,00"}
            icon={"money"}
            type={"number"}
            onChange={handleChange}
            inputName={"price"}
          />

          <div className={style.lineTitle}>
            <h4>Fonte: </h4>
          </div>
          {type === "Renda" ? (
            <GroupIncome onChange={handleRadioChange} />
          ) : (
            <GroupExpanses onChange={handleRadioChange} />
          )}
        </form>
      </div>
      <div className={style.btn_container}>
        <button className={style.btn_submit} form="finance-form" type="submit">
          Adicionar
        </button>
      </div>
    </>
  );
};

export default DrawerFinancialData;
