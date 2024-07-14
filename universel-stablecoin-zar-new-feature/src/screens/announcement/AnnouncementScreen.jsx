import { AreaCards } from "../../components"
import Announcement1 from "../../components/announcement/Announcement";
import AreaTop from "../../components/announcement/areaTop/AreaTop"

const Announcement = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <Announcement1 />
    </div>
  );
};

export default Announcement;