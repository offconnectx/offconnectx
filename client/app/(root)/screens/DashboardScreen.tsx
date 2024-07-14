import AreaCards from "../components/dashboard/areaCards/AreaCards";
import AreaCharts from "../components/dashboard/areaCharts/AreaCharts";
import AreaTable from "../components/dashboard/areaTable/AreaTable";
import AreaTop from "../components/dashboard/areaTop/AreaTop";


const Dashboard = () => {
	return (
		<div className="content-area">
			<AreaTop />
			<AreaCards />
			{/* <AreaCharts /> */}
			<AreaTable />
		</div>
	);
};

export default Dashboard;