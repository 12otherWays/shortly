import { styled } from "@mui/material";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// chart js functions and object
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const Card = styled(motion.div)(({ theme }) => ({
  borderRadius: "20px",
  padding: "28px 32px 24px 32px",
  backgroundColor: "white",
}));

const Text = styled(motion.p)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  fontWeight: 600,
  textTransform: "capitalize",
  fontFamily: "'Poppins', sans-serif",
}));

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function GraphCard() {
  return (
    <Card
      sx={{
        display: "flex",
        width: "700px",
        height: "200px",
      }}
    >
      <Text>device compatible</Text>
      <Line options={options} data={data} />
    </Card>
  );
}

export default GraphCard;
