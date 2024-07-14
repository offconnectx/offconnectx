import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "From",
  "Amount",
  "Account",
  "Country",
  "Status",
  "Currency",
  "Date",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "0xD9b...2686",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Ghana",
    status: "delivered",
    amount: 400,
  },
  {
    id: 101,
    name: "0xD9b...2686",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Ghana",
    status: "pending",
    amount: 288,
  },
  {
    id: 102,
    name: "0xD9b...2686",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Ghana",
    status: "canceled",
    amount: 500,
  },
  {
    id: 103,
    name: "0xD9b...2686",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Ghana",
    status: "delivered",
    amount: 100,
  },
  {
    id: 104,
    name: "0xD9b...2686",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Ghana",
    status: "delivered",
    amount: 60,
  },
  {
    id: 105,
    name: "0xD9b...2686",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Ghana",
    status: "delivered",
    amount: 80,
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Transactions</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>${dataItem.amount.toFixed(2)}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;