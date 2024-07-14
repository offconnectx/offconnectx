import { AreaCards } from "../../components"
import Deposit1 from "../../components/deposit/Deposit1";
import AreaTop from "../../components/deposit/areaTop/AreaTop"

const Deposit = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <Deposit1 />
    </div>
  );
};

export default Deposit;