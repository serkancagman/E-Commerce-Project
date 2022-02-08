// SALES CHART DATAS

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

export const salesData = {
  labels,
  datasets: [
    {
      data: [30, 20, 40, 10, 20, 30, 20, 80, 70, 60],
      borderColor: "rgb(53, 162, 235)",
      label: "Sales",
    },
  ],
};

export const salesOptions = {
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

// ORDERS CHART DATAS

export const ordersData = {
  labels,
  datasets: [
    {
      data: [30, 20, 40, 30, 80, 70, 60],
      borderColor: "rgb(159, 43, 104)",
      borderColorHover: "rgb(159, 43, 104)",
      borderWidth: 3,
      pointHitWidth: 1,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 0,
    },
  ],
};




export const orderDataOptions = {
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

// CHANNELS CHART DATAS

export const channelData = [
  {
    title: "Social Media",
    value: 480,
    color: "#F7464A",
  },
  {
    title: "Email",
    value: 220,
    color: "#715CF3",
  },
  {
    title: "Google",
    value: 300,
    color: "#67CDF0",
  },
];

const totalData = (chartData) => {
  let total, title, rasyonel, color, final;

  total = chartData.reduce((acc, curr) => acc + curr.value, 0);
  final = [];
  chartData.map((item) => {
    rasyonel = (100 * item.value) / total;
    title = item.title;
    color = item.color;
    final = [...final, { title: title, value: rasyonel, color: color }];
  });
  console.log(final);
  return final;
};

export const getChart = totalData(channelData).map((item) => item);

// SALE MINI CHART DATAS

export const saleMiniData = {
  labels,
  datasets: [
    {
      data: [30, 20, 40, 30, 80, 70, 60],
      borderColor: "#F7464A",
      borderColorHover: "rgb(159, 43, 104)",
      borderWidth: 3,
      pointHitWidth: 1,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 0,
    },
  ],
};

// RECENT REVIEWS DATAS

export const recentReviews = [
  {
    id: 1,
    name: "John Doe",
    stars: 5,
    profile:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1385&q=80",
    date: "01 Feb",
    review: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    name: "Alice Smith",
    stars: 4,
    profile:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "02 Feb",
    review: "Lorem ipsum dolor sit amet",
  },

  {
    id: 3,
    name: "Merry Alex",
    stars: 5,
    profile:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    date: "03 Feb",
    review: "Lorem ipsum dolor sit amet",
  },
];

// PRODUCT SALE CHART

export const productSaleConfig = {
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
export const productData = {
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