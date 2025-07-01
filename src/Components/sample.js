// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// // Sample data
// const dataSets = {
//   daily: [
//     { date: "June 1", harvested: 120 },
//     { date: "June 2", harvested: 150 },
//     { date: "June 3", harvested: 170 },
//     { date: "June 4", harvested: 130 },
//     { date: "June 5", harvested: 200 },
//     { date: "June 6", harvested: 180 },
//     { date: "June 7", harvested: 220 },
//   ],
//   weekly: [
//     { date: "Week 1", harvested: 1000 },
//     { date: "Week 2", harvested: 1250 },
//     { date: "Week 3", harvested: 1100 },
//     { date: "Week 4", harvested: 1400 },
//   ],
//   seasonal: [
//     { date: "Season 2021", harvested: 5000 },
//     { date: "Season 2022", harvested: 5800 },
//     { date: "Season 2023", harvested: 6200 },
//   ],
// };

// const HarvestChart = () => {
//   const [selectedView, setSelectedView] = useState("daily");
//   const [chartType, setChartType] = useState("bar");

//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-semibold mb-4">Sugarcane Harvested ({selectedView})</h2>

//       {/* Filters */}
//       <div className="flex items-center gap-4 mb-4">
//         <div>
//           <label className="mr-2 font-medium">View:</label>
//           <select
//             value={selectedView}
//             onChange={(e) => setSelectedView(e.target.value)}
//             className="border px-2 py-1 rounded"
//           >
//             <option value="daily">Daily</option>
//             <option value="weekly">Weekly</option>
//             <option value="seasonal">Seasonal</option>
//           </select>
//         </div>

//         <div>
//           <label className="mr-2 font-medium">Chart Type:</label>
//           <select
//             value={chartType}
//             onChange={(e) => setChartType(e.target.value)}
//             className="border px-2 py-1 rounded"
//           >
//             <option value="bar">Bar Chart</option>
//             <option value="line">Line Chart</option>
//           </select>
//         </div>
//       </div>

//       {/* Chart */}
//       <ResponsiveContainer width="100%" height={400}>
//         {chartType === "bar" ? (
//           <BarChart
//             data={dataSets[selectedView]}
//             margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="harvested" fill="#82ca9d" />
//           </BarChart>
//         ) : (
//           <LineChart
//             data={dataSets[selectedView]}
//             margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="harvested" stroke="#82ca9d" strokeWidth={3} />
//           </LineChart>
//         )}
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default HarvestChart;

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

// Sample data: Sugarcane harvested per farm (tons)
const data = [
  { farmName: "Farm A", harvestedTons: 45 },
  { farmName: "Farm B", harvestedTons: 60 },
  { farmName: "Farm C", harvestedTons: 30 },
  { farmName: "Farm D", harvestedTons: 75 },
  { farmName: "Farm E", harvestedTons: 50 }
];

const HarvestBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="farmName" />
        <YAxis label={{ value: 'Tons', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="harvestedTons" fill="#82ca9d" name="Harvested (Tons)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HarvestBarChart;

