import { AreaCards } from "../../components"
import Transfer1 from "../../components/transfer/Transfer";
import AreaTop from "../../components/transfer/areaTop/AreaTop"

const Transfer = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <Transfer1 />
    </div>
  );
};

export default Transfer;