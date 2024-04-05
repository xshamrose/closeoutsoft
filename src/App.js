// import PieChart from "./components/piechart/PieChart";
import "./App.css";
import { PolarCharts } from "./components/Polar/PolarCharts";
import PieChart from "./components/charts/PieChart";
import "./components/charts/PieChart.css";
// import Group from "./components/piechart/Group/Group";
function App() {
  // const dataMapping = {
  //   Electrical: { color: "red", value: 10 },
  //   Mechanical: { color: "#97AE4D", value: 20 },
  //   Chemical: { color: "#8A5689", value: 20 },
  //   Chart: { color: "#8A5689", value: 50 },
  // };
  const data = [
    { value: 70, color: "#8A5689" },
    { value: 30, color: "#97AE4D" },
    // { value: 20, color: "#00f" },
    // { value: 50, color: "#ff0" },
  ];
  return (
    <div className='App'>
      <div>{/* <Group dataMapping={dataMapping} /> */}</div>
      <div>
        <PolarCharts />
      </div>
      <div style={{ height: "auto", width: "350px" }}>
        <PieChart data={data} />
      </div>
    </div>
  );
}

export default App;
