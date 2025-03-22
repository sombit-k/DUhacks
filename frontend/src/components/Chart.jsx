import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useInventoryStore } from "../../store/useInventorystore";
import Loader from "../components/utils/Loader";

export default function Chart() {
  const { chartData, seriesData, isFetchingInventory } = useInventoryStore(); // Destructure chartData and seriesData from the store

  // Ensure chartData and seriesData are arrays
  const validatedChartData = Array.isArray(chartData) ? chartData : [];
  const validatedSeriesData = Array.isArray(seriesData) ? seriesData : [];

  return (
    <div className="p-5 shadow-sm border rounded-md bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center text-black">
        Inventory Overview
      </h2>

      {/* Conditional Rendering: Show Loader or BarChart */}
      {isFetchingInventory ? (
        <div className="flex justify-center items-center h-64">
          <Loader /> {/* Show loader while fetching data */}
        </div>
      ) : (
        <BarChart
          className="mx-auto"
          xAxis={[
            {
              id: "barCategories",
              data: validatedChartData, // Use validatedChartData
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: validatedSeriesData, // Use validatedSeriesData
            },
          ]}
          width={1000}
          height={300}
        />
      )}
    </div>
  );
}
