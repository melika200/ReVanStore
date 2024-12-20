import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const fetchChartData = async () => {
  const response = await axios.get("https://api.coincap.io/v2/assets");
  return response.data.data;
};

export default function RadarChartt() {
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
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.slice(0, 10)}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar
              name="Price"
              dataKey="rank"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
