import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';

const fetchChartData = async () => {
  const response = await axios.get("https://api.coincap.io/v2/assets");
  return response.data.data;
};

export default function LineBarChart() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["chartData"],
    queryFn: fetchChartData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }
  console.log(data);

  return (
    <div>
      <div className="container mt-1 p-8">
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
       
          data={data.slice(0,10)}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="priceUsd" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="rank" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="supply" stroke="#ff7300" />
          <Scatter dataKey="vwap24Hr" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}
