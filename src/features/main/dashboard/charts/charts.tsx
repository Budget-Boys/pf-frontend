import style from "./charts.module.sass";
import IncomeExpenseChart from "./graphics/pieCharts";
import ChartLineBalance from "./graphics/lineCharts";

const Charts: React.FC = () => {
  return (
    <>
      <div className={style.section_charts}>
        <div className={style.container_pie}>
          <IncomeExpenseChart />
        </div>
        <div className={style.container_line}>
          <ChartLineBalance />
        </div>
      </div>
    </>
  );
};

export default Charts;
