import { useState, type ChangeEvent } from "react";
import Input from "../../../../../components/input/input";
import GroupExpanses from "../groups/groupExpanse";
import GroupIncome from "../groups/groupIncome";
import style from "./drawerContent.module.sass";
import { POST } from "../../../../../services/post";
import { toast } from "react-toastify";

interface FinancialProps {
  type: string;
  onReload: () => void;
}

const DrawerFinancialData: React.FC<FinancialProps> = ({ type, onReload }) => {

  const [form, setForm] = useState({
    userId: localStorage.getItem("userId"),
    amount: 0.0,
    category: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: id === "amount" ? parseFloat(value) : value,
    }));
  }

  function handleRadioChange(value: string) {
    setForm((prev) => ({
      ...prev,
      category: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const endpoint =
      type === "Renda"
        ? "http://localhost:9000/api/finance/incomes"
        : "http://localhost:9000/api/finance/expenses";

    const result = await POST(endpoint, form);
    if (result.success) {
      toast.success("Dados enviados com sucesso!");
      setForm({
        userId: localStorage.getItem("userId"),
        amount: 0.0,
        category: "",
      });
      onReload();
    } else {
      toast.error("Erro ao registrar: " + result.message);
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
            inputName={"amount"}
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
