"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const ChartSection = () => {
  const data = [
    {
      name: "Monday",
      post: 4000,
      user: 2400,
    },
    {
      name: "Tuesday",
      post: 3000,
      user: 1398,
    },
    {
      name: "Wednesday",
      post: 2000,
      user: 9800,
    },
    {
      name: "Thursday",
      post: 2780,
      user: 3908,
    },
    {
      name: "Friday",
      post: 1890,
      user: 4800,
    },
    {
      name: "Saturday",
      post: 2390,
      user: 3800,
    },
    {
      name: "Sunday",
      post: 3490,
      user: 4300,
    },
  ];
  return (
    <div className="h-[450px] bg-slate-200 p-4 rounded-md my-8">
      <h1 className="font-medium font-Rale mb-4">Weekly Report</h1>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" style={{color:"#fff"}} />
          <YAxis />
          <Tooltip contentStyle={{ background: "#021E20", border: "none", color:"#fff", borderRadius:"10px" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="post"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="user"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSection;
