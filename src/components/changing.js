import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const ContinuousGraph = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Dynamic Data',
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [],
      },
    ],
  });

  // Function to update the chart data
  const updateChart = () => {
    const newDataPoint = Math.random() * 100; // Generate random data
    const currentTime = new Date().toLocaleTimeString();

    // Update the state to add a new data point
    setChartData((prevState) => {
      const updatedData = { ...prevState };
      updatedData.labels.push(currentTime);
      updatedData.datasets[0].data.push(newDataPoint);

      // Limit the dataset to a maximum number of data points (e.g., 10)
      if (updatedData.labels.length > 10) {
        updatedData.labels.shift();
        updatedData.datasets[0].data.shift();
      }

      return updatedData;
    });
  };

  // Call the updateChart function periodically to update the graph
  useEffect(() => {
    const intervalId = setInterval(updateChart, 1000); // Update every 1 second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default ContinuousGraph;
