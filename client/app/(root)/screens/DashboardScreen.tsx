import { useEffect, useState } from "react";
import AreaCards from "../components/dashboard/areaCards/AreaCards";
import AreaCharts from "../components/dashboard/areaCharts/AreaCharts";
import AreaTable from "../components/dashboard/areaTable/AreaTable";
import AreaTop from "../components/dashboard/areaTop/AreaTop";
import { useWallet } from "../hooks/useWallet";


const Dashboard = () => {
	const [balance, setBalance] = useState<number>();

	const wallet = useWallet;

	useEffect(() => {
		wallet.getBalance().then((b) => {
			setBalance(b);
		});
	}, [balance])


	const updateTransaction = (value: number) => {
		setBalance(value);
	}

	return (
		<div className="content-area">
			<AreaTop update={updateTransaction} />
			<AreaCards balance={balance} />
			{/* <AreaCharts /> */}
			<AreaTable />
		</div>
	);
};

export default Dashboard;