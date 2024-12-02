import { BarChart } from "@mui/x-charts/BarChart";

const uData = [13, 18, 13, 12, 16, 9];
const pData = [7, 8, 6, 10, 14, 4];
const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const CustomBarChart = ({ title }:Title) => {
    
  return (
    <div className="bar-chart-wrapper">
      <h6 className="graph-title">{title}</h6>
      <BarChart
        height={262}
        borderRadius={4}
        className="bar-chart"
        grid={{ horizontal: true }}
        series={[
          { data: pData, id: "pvId", stack: "total", color: "#A8C5DA" },
          { data: uData, id: "uvId", stack: "total", color: "#CFDEEA" },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band", categoryGapRatio: 0.5 }]}
        yAxis={[
          {
            valueFormatter: (value) => `${value}M`,
          },
        ]}
        leftAxis={{ disableLine: true, disableTicks: true }}
        bottomAxis={{ disableTicks: true, stroke: "#FF0000" }}
      />
    </div>
  );
  
}

export default CustomBarChart;