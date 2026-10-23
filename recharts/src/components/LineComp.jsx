import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  minWidth: 0,
};

const LineComp = () => {
  const lineData = [
    { month: "Jan", revenue: 2400 },
    { month: "Feb", revenue: 3200 },
    { month: "Mar", revenue: 2800 },
    { month: "Apr", revenue: 4500 },
    { month: "May", revenue: 3900 },
    { month: "Jun", revenue: 5200 },
  ];

  const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];
  return (
    <div>
      <div style={cardStyle}>
        <h3>Monthly Revenue</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineComp;
