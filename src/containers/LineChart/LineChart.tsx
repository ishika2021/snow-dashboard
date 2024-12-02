import { LineChart } from "@mui/x-charts/LineChart";

const uData = [13, 18, 13, 3, 16, 9];
const pData = [18, 12, 6, 16, 14, 4];
const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const CustomLineChart = ({ title }: Title) => {
    
  return (
    <div className="line-chart-wrapper">
      <h6 className="graph-title">{title}</h6>
      <LineChart
        height={365}
        borderRadius={4}
        className="line-chart"
        grid={{ horizontal: true }}
        series={[
          {
            data: pData,
            id: "pvId",
            stack: "total",
            curve: "natural",
            color: "#A8C5DA",
            label: "Current Week  $58,211",
            showMark: false,
          },
          {
            data: uData,
            id: "uvId",
            stack: "total",
            curve: "natural",
            color: "#C1C1C1",
            label: "Previous Week  $68,768",
            showMark: false,
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band", categoryGapRatio: 0.5 }]}
        yAxis={[
          {
            valueFormatter: (value) => `${value}M`,
          },
        ]}
        leftAxis={{ disableLine: true, disableTicks: true }}
        bottomAxis={{ disableTicks: true }}
        slotProps={{
          legend: {
            itemMarkWidth: 5,
            itemMarkHeight: 5,
            position: { horizontal: "middle", vertical: "top" },
          },
        }}
      />
    </div>
  );
  
}

export default CustomLineChart;
