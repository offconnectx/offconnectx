import { AreaCards } from "../../components"
import Send1 from "../../components/send/Send";
import AreaTop from "../../components/send/areaTop/AreaTop"

const Send = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <Send1 />
    </div>
  );
};

export default Send;