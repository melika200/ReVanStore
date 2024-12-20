import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
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

const fetchChartData = async () => {
  const response = await axios.get("https://api.coincap.io/v2/assets");
  return response.data.data;
};

export default function LineChartt() {
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
      <div className="container mt-28 p-8">
        <ResponsiveContainer width="99%" height={400}>
          <LineChart data={data.slice(0, 10)}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
                contentStyle={{background:"transparent",border:"none"}}
                labelStyle={{display:"none"}}
                position={{x:10,y:70}}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="rank"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="marketCapUsd" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
