import Input from "../../../../../components/input/input";
import GroupExpanses from "../groups/groupExpanse";
import GroupIncome from "../groups/groupIncome";
import style from "./drawerContent.module.sass";

interface FinancialProps {
  type: string;
}

const DrawerFinancialData: React.FC<FinancialProps> = ({type}) => {



  return (
    <>
      <div className={style.title_drawer}>
        <h1>Quanto você deseja adicionar?</h1>
      </div>
      <div className={style.container_financialData}>
        <div>
          <Input placeholder={"R$: 100,00"} icon={"money"} type={"number"} />

          <div className={style.lineTitle}>
            <h4>Fonte: </h4>
          </div>
          {type === "Renda" ? <GroupIncome onChange={function (): void {
            throw new Error("Function not implemented.");
          } } /> : <GroupExpanses onChange={function (): void {
              throw new Error("Function not implemented.");
            } }/>}
          
        </div>

        <button>Adicionar</button>
      </div>
    </>
  );
};

export default DrawerFinancialData;
