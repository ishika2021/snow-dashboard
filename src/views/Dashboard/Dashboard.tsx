import CardStats from "../../data/dashboardCard.json";
import rows from "../../data/topProducts.json";
import Card from "../../components/Card";
import BarChart from "../../containers/BarChart";
import LineChart from "../../containers/LineChart";
import PieChart from "../../containers/PieChart";
import WorldMap from "../../containers/WorldMap";
import Table from "../../containers/Table";

const columns = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "price",
    headerName: "Price",
    flex: 0.5,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    align: "left",
    headerAlign: "left",
    flex: 0.5,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 0.5,
  },
];

const tableProps = {
  checkboxSelection: false,
  hideFooter: true,
  className: "dashboard-table",
};

const Dashboard = ({ pageTitle = "eCommerce" }) => {
    
  return (
    <section class="dashboard-wrapper">
      <p class="title">{pageTitle}</p>
      <section class="dashboard-content-wrapper">
        <div class="first-row-wrapper">
          <div className="all-card-wrapper">
            {CardStats?.map((item) => (
              <Card {...item} />
            ))}
          </div>

          <BarChart title="Projections vs Actuals" />
        </div>
        <div className="line-chart-wrapper">
          <LineChart title="Revenue" />
        </div>
        <div className="map-wrapper">
          <WorldMap title="Revenue by Location" />
        </div>
        <div className="table-wrapper">
          <Table
            title="Top Selling Products"
            columns={columns}
            rows={rows}
            properties={tableProps}
          />
        </div>
        <div className="pie-chart-wrapper">
          <PieChart title="Total Sales" />
        </div>
      </section>
    </section>
  );
  
};

export default Dashboard;
