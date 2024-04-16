<template>
	<div class="hello" ref="chartdiv"></div>
	<button @click="updateData" class="actualizar-actuadores">Actualizar Datos</button>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default {
	name: "ActuadoresView",
	data() {
		return {
  

			data: [
				{
					category: "Cocina",
					value1: 10
				},
				{
					category: "Sala",
					value1: 10
				},
				{
					category: "Garaje",
					value1: 10
				},
                {
					category: "Baño 1",
					value1: 10
				},
                {
					category: "Baño 2",
					value1: 10
				},
                {
					category:"Habitacion1",
					value1: 10
				},
                {
					category: "Habitacion2",
					value1: 10
				},
                {
					category: "Habitacion3",
					value1: 10
				}
			],
		};
	},
	mounted() {
		this.createChart();
	},
	methods: {
		createChart() {
			let root = am5.Root.new(this.$refs.chartdiv);

			root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX: true,
  paddingLeft:0,
  paddingRight:1
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, { 
  minGridDistance: 30, 
  minorGridEnabled: true
});

xRenderer.labels.template.setAll({
  rotation: -90,
  centerY: am5.p50,
  centerX: am5.p100,
  paddingRight: 15
});

xRenderer.grid.template.setAll({
  location: 1
})

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0.3,
  categoryField: "category",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

var yRenderer = am5xy.AxisRendererY.new(root, {
  strokeOpacity: 0.1
})

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.3,
  renderer: yRenderer
}));

// Create series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Series 1",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value1",
  sequencedInterpolation: true,
  categoryXField: "category",
  tooltip: am5.Tooltip.new(root, {
    labelText: "{valueY}"
  })
}));

series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
series.columns.template.adapters.add("fill", function (fill, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});

series.columns.template.adapters.add("stroke", function (stroke, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});


// Set data


xAxis.data.setAll(this.data);
series.data.setAll(this.data);



series.appear(1000);
chart.appear(1000, 100);


			// Store chart instance
			this.chart = chart;
			this.root = root;
		},
		updateData() {
			fetch("http://192.168.137.1:3000/consults/kitchen/avg")
				.then((response) => response.json())
				.then((data) => {
           let promedioHumedad = data[0].humedadPromedio;
           let promedioTemperatura = data[0].temperaturaPromedio;
           let gasPromedio = data[0].gasPromedio;

    
				
         this.chartData = [
		
				{ category: "Promedio temperatura", value1:promedioTemperatura , value2: 15 },
				{ category: "Promedio Humedad", value1: promedioHumedad, value2: 16 },
				{ category: "3", value1: gasPromedio, value2: 10 },
				{ category: "4", value1: gasPromedio, value2: 10 },
				{ category: "5", value1: gasPromedio, value2: 10 },
				{ category: "Promedio Gas", value1: gasPromedio, value2: 10 },
				{ category: "Promedio Gas", value1: gasPromedio, value2: 10 },
				{ category: "Promedio Gas", value1: gasPromedio, value2: 10 },
			];
				})
				.catch((error) => {
					console.error("Error al obtener datos:", error);
				});
			
		},
	},
	watch: {
		chartData(newData) {
			this.chart.xAxes.getIndex(0).data.setAll(newData);
			this.chart.series.getIndex(0).data.setAll(newData);
			this.chart.series.getIndex(1).data.setAll(newData);
		},
	},
	beforeDestroy() {
		if (this.root) {
			this.root.dispose();
		}
	},
};
</script>

<style scoped>
.hello {
	width: 60%;
	height: 400px;
	padding: 50px;
	position: absolute;
	left: 400px;
}
.actualizar-actuadores{
    position: relative;
    left: 55%;
    top: 82%;
    background-color: var(--darkpurple);
    color: white;
    border-style: none;
    padding: 5px;
    border-radius: 5px;

}
</style>
