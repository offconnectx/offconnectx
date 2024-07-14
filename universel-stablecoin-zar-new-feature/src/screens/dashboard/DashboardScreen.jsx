import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components"
import Transactions from "../../components/Transactions";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      <AreaTable />
      <Transactions />
    </div>
  );
};

export default Dashboard;