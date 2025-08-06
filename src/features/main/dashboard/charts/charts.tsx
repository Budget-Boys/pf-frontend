import style from "./charts.module.sass";
import IncomeExpenseChart from "./graphics/pieCharts";
import ChartLineBalance from "./graphics/lineCharts";
interface ChartsProps {
  reloadTrigger: number;
}
const Charts: React.FC<ChartsProps> = ({ reloadTrigger }) => {
  return (
    <>
      <div className={style.section_charts}>
        <div className={style.container_pie}>
          <IncomeExpenseChart reloadTrigger={reloadTrigger}/>
        </div>
        <div className={style.container_line}>
          <ChartLineBalance reloadTrigger={reloadTrigger} />
        </div>
      </div>
    </>
  );
};

export default Charts;
