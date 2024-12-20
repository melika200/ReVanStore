import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const fetchChartData = async () => {
  const response = await axios.get("https://api.coincap.io/v2/assets");
  return response.data.data;
};

export default function SimpleAreaChart() {
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
          <AreaChart data={data.slice(0, 10)}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
                contentStyle={{background:"transparent",border:"none"}}
                labelStyle={{display:"none"}}
                position={{x:10,y:70}} />
            <Area
              type="monotone"
              dataKey="rank"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
