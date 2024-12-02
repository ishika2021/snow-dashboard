import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Direct $300.56", value: 300.56, color: "#1C1C1C" },
  { label: "Affiliate $135.18", value: 135.18, color: "#BAEDBD" },
  { label: "Sponsored $154.02", value: 154.02, color: "#95A4FC" },
  { label: "E-mail $48.96", value: 48.96, color: "#B1E3FF" },
];

const CustomPieChart = ({ title }:Title) => {
    
  return (
    <Stack direction="row" className="pie-chart">
      <h6>{title}</h6>
      <PieChart
        series={[
          {
            paddingAngle: 1,
            innerRadius: 55,
            outerRadius: 80,
            data,
            cornerRadius: 50,
            cy: 90,
          },
        ]}
        margin={{ right: 5 }}
        width={200}
        height={300}
        slotProps={{
          legend: {
            direction: "column",
            itemMarkWidth: 5,
            itemMarkHeight: 5,
            position: { horizontal: "middle", vertical: "bottom" },
            padding: 10,
          },
        }}
      />
    </Stack>
  );
  
}

export default CustomPieChart;
