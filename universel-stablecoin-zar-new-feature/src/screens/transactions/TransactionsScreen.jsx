import { AreaCards } from "../../components"
import Transactions1 from "../../components/transactions/Transactions";
import AreaTop from "../../components/transactions/areaTop/AreaTop"

const Transactions = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <Transactions1 />
    </div>
  );
};

export default Transactions;