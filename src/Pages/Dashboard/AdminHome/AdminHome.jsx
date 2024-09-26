import { FaPhone, FaShop, FaWallet } from "react-icons/fa6";
import CanvasJSReact from '@canvasjs/react-charts';
import { useRef } from "react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const AdminHome = () => {

  // Original sales data in units
	const totalSalesData = [
		{ label: "Dessert", value: 250 },
		{ label: "Pizza", value: 300 },
		{ label: "Salad", value: 150 },
		{ label: "Soup", value: 100 },
		{ label: "Drinks", value: 200 },
		{ label: "Others", value: 50 }
	];
  
  const totalSales = totalSalesData.reduce((acc, item) => acc + item.value, 0);

  const dataPoints = totalSalesData.map(item => ({y: Math.round((item.value / totalSales) * 100), label: item.label}))

  console.log(dataPoints);

  const option = {
		animationEnabled: true,
		exportEnabled: true,
		theme: "dark1", // "light1", "dark1", "dark2"
		title: {
			text: ""
		},
		data: [{
			type: "pie",
			indexLabel: "{label}: {y}%",		
			startAngle: 180,
			dataPoints: dataPoints 
		}]
	};

  //weekly sales chart code 

  const chartRef = useRef(null);
  // Common date points for all categories
	const dates = [
		new Date(2024, 5, 25),
		new Date(2024, 5, 26),
		new Date(2024, 5, 27),
		new Date(2024, 5, 28),
		new Date(2024, 5, 29),
		new Date(2024, 5, 30),
		new Date(2024, 6, 1)
	];

  	// Y-values for each category
	const salesData = {
		Salad: [56, 45, 71, 41, 60, 75, 98],
		Pizza: [86, 95, 71, 58, 60, 65, 89],
		Soup: [48, 45, 41, 55, 80, 85, 83],
		Dessert: [61, 55, 61, 75, 80, 85, 105],
		Drinks: [52, 55, 20, 35, 30, 45, 25],
		Others: [52, 55, 20, 35, 30, 45, 25]
	};

  // Define colors for each data series
  const colors = {
		Salad: "red",
		Pizza: "violet",
		Soup: "purple",
		Dessert: "blue",
		Drinks: "#FFC300",
		Others: "#FF5733",
	};

  // Construct dataPoints array for each category
	const createDataSeries = (name, yValues) => {
		return {
			type: "stackedBar",
			name: name,
			showInLegend: true,
      color: colors[name],
			xValueFormatString: "DD, MMM",
			yValueFormatString: "$#,##0",
			dataPoints: dates.map((date, index) => ({ x: date, y: yValues[index] }))
		};
	};

  // Construct all the data series
	const dataSeries = Object.keys(salesData).map(category => 
		createDataSeries(category, salesData[category])
	);

  //weekly Chart options
	const options = {
		animationEnabled: true,
		theme: "dark1",
		title: {
			text: ""
		},
		axisX: {
			valueFormatString: "DDD"
		},
		axisY: {
			prefix: "$"
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: (e) => {
				if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
					e.dataSeries.visible = false;
				} else {
					e.dataSeries.visible = true;
				}
				chartRef.current.render();
			}
		},
		data: dataSeries
	};

  
  return (
    <div>
      <h4 className="h3 text-3xl mb-10">HI, WELCOME BACK</h4>

      <div className="grid md:grid-cols-4 gap-5 mb-10">
        <div className="flex gap-5 p-5 bg-violet-400">
          <FaWallet className="text-3xl text-white"></FaWallet>
          <div>
            <p>Revenue</p>
            <span>205</span>
          </div>
        </div>
        <div className="flex gap-5 p-5 bg-violet-400">
          <FaShop className="text-3xl text-white"></FaShop>
          <div>
            <p>Customers</p>
            <span>205</span>
          </div>
        </div>
        <div className="flex gap-5 p-5 bg-violet-400">
          <FaPhone className="text-3xl text-white"></FaPhone>
          <div>
            <p>Products</p>
            <span>205</span>
          </div>
        </div>
        <div className="flex gap-5 p-5 bg-violet-400">
          <FaPhone className="text-3xl text-white"></FaPhone>
          <div>
            <p>Orders</p>
            <span>205</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="my-20">
          <div>
            <h4>Weekly sales in restaurent</h4>
          <CanvasJSChart options={options} onRef={ref => chartRef.current = ref} />
          </div>  
        </div>
        <div>
          <h4>Menu sale in percentage</h4>
        <CanvasJSChart options={option} />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
