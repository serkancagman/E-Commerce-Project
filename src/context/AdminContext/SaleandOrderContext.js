import React from "react";

export const SaleandOrderContext = React.createContext();

export const SaleandOrderProvider = ({ children }) => {
  const labels = [
    "01 Feb",
    "02 Feb",
    "03 Feb",
    "04 Feb",
    "05 Feb",
    "06 Feb",
    "07 Feb",
    "08 Feb",
    "09 Feb",
    "10 Feb",
  ];

  const salesData = {
    labels,
    datasets: [
      {
        data: [30, 20, 40, 10, 20, 30, 20, 80, 70, 60],
        borderColor: "rgb(53, 162, 235)",
        borderWidth: 3,
        pointHitWidth: 0,
        pointRadius: 5,
        tension: 0.5,

        label: "Sales",
      },
    ],
  };
  const subSalesData = {
    labels,
    datasets: [
      {
        data: [30, 20, 40, 10, 20, 30, 20, 80, 70, 60],
        borderColor: "rgb(53, 162, 235)",
        tension: 0.5,
        pointRadius: 0,

        label: "Sales",
      },
    ],
  };
  const orderProductData = {
   
      labels,
    datasets: [
      {
        data:  [30, 20, 40, 10, 20, 30, 20, 80, 70, 60],
        borderColor: "transparent",
        borderColorHover: "rgb(159, 43, 104)",
        backgroundColor:"#f4f4ff",
        borderWidth: 0,
  
        pointHoverBorderWidth: 2,
      },
    ],
  } 
  const salesOptions = {
    responsive: true,
    plugins: {},

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  const subSalesOptions = {
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  // ORDER

  const ordersData = {
    labels,
    datasets: [
      {
        data: [30, 20, 40, 30, 80, 70, 60],
        borderColor: "rgb(159, 43, 104)",
        borderColorHover: "rgb(159, 43, 104)",
        tension: 0.5,

        borderWidth: 2,
        pointHitWidth: 0,
        pointRadius: 0,
      },
    ],
  };

  const orderDataOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  const ProductDataOptions = {
    type: "bar",

    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  const values = {
    salesOptions,
    salesData,
    ordersData,
    orderDataOptions,
    subSalesData,
    subSalesOptions,
    ProductDataOptions,
    orderProductData,
  };

  return (
    <SaleandOrderContext.Provider value={values}>
      {children}
    </SaleandOrderContext.Provider>
  );
};
