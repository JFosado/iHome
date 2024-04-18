<template>
    <div class="container">
      <h1 class="title-bano1">Cantidad de Sensores y Actuadores por Habitación</h1>
      <div class="chart-container">
        <div class="hello" ref="chartdiv"></div>
      </div>
    </div>
  </template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default {
    name: "SensoresActuadoresView",
    data() {
        return {
            chartData: [
                {
                    category: "Cocina",
                    sensores: -0.1,
                    actuadores: 0.3
                },
                {
                    category: "Sala",
                    sensores: -0.2,
                    actuadores: 0.3
                },
                {
                    category: "Garaje",
                    sensores: -0.3,
                    actuadores: 0.6
                },
                {
                    category: "Baño 1",
                    sensores: -0.5,
                    actuadores: 0.8
                },
                {
                    category: "Baño 2",
                    sensores: -0.8,
                    actuadores: 1.0
                },
                {
                    category: "Habitacion1",
                    sensores: -1.1,
                    actuadores: 1.3
                },
                {
                    category: "Habitacion2",
                    sensores: -1.7,
                    actuadores: 1.9
                },
                {
                    category: "Habitacion3",
                    sensores: -2.2,
                    actuadores: 2.5
                }
            ],
        };
    },
    mounted() {
        this.createChart();
        setInterval(this.updateData, 1000);
    },
    methods: {
        createChart() {
            let root = am5.Root.new(this.$refs.chartdiv);

            root.setThemes([am5themes_Animated.new(root)]);

            let chart = root.container.children.push(
                am5xy.XYChart.new(root, {
                    panX: false,
                    panY: false,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    layout: root.verticalLayout,
                    arrangeTooltips: false,
                    paddingLeft: 0,
                    paddingRight: 10
                })
            );

            chart.getNumberFormatter().set("numberFormat", "#.#s");

            let yAxis = chart.yAxes.push(
                am5xy.CategoryAxis.new(root, {
                    categoryField: "category",
                    renderer: am5xy.AxisRendererY.new(root, {
                        inversed: true,
                        cellStartLocation: 0.1,
                        cellEndLocation: 0.9,
                        minorGridEnabled: true,
                        minGridDistance: 20
                    })
                })
            );

            yAxis.data.setAll(this.chartData);

            let xAxis = chart.xAxes.push(
                am5xy.ValueAxis.new(root, {
                    renderer: am5xy.AxisRendererX.new(root, {
                        minGridDistance: 60,
                        strokeOpacity: 0.1
                    })
                })
            );

            const createSeries = (field, labelCenterX, pointerOrientation, rangeValue) => {
                let series = chart.series.push(
                    am5xy.ColumnSeries.new(root, {
                        xAxis: xAxis,
                        yAxis: yAxis,
                        valueXField: field,
                        categoryYField: "category",
                        sequencedInterpolation: true,
                        clustered: false,
                        tooltip: am5.Tooltip.new(root, {
                            pointerOrientation: pointerOrientation,
                            labelText: "{categoryY}: {valueX}"
                        })
                    })
                );

                series.columns.template.setAll({
                    height: am5.p100,
                    strokeOpacity: 0,
                    fillOpacity: 0.8
                });

                series.bullets.push(function () {
                    return am5.Bullet.new(root, {
                        locationX: 1,
                        locationY: 0.5,
                        sprite: am5.Label.new(root, {
                            centerY: am5.p50,
                            text: "{valueX}",
                            populateText: true,
                            centerX: labelCenterX
                        })
                    });
                });

                series.data.setAll(this.chartData);
                series.appear();

                let rangeDataItem = xAxis.makeDataItem({
                    value: rangeValue
                });
                xAxis.createAxisRange(rangeDataItem);
                rangeDataItem.get("grid").setAll({
                    strokeOpacity: 1,
                    stroke: series.get("stroke")
                });

                let label = rangeDataItem.get("label");
                label.setAll({
                    text: field.toUpperCase(),
                    fontSize: "1.1em",
                    fill: series.get("stroke"),
                    paddingTop: 10,
                    isMeasured: false,
                    centerX: labelCenterX
                });
                label.adapters.add("dy", function () {
                    return -chart.plotContainer.height();
                });

                return series;
            };

            createSeries("sensores", am5.p100, "right", -1.5);
            createSeries("actuadores", 0, "left", 1.5);

            let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                behavior: "zoomY"
            }));
            cursor.lineY.set("forceHidden", true);
            cursor.lineX.set("forceHidden", true);

            chart.appear(1000, 100);

            this.chart = chart;
        },
        updateData() {
            fetch("https://back-integradora-production.up.railway.app/consults/chart/v2")
                .then((response) => response.json())
                .then((data) => {
                    let garajesS = data.garajes.sensores;
                    let bat1S = data.bathroom1.sensores;
                    let bat2S = data.bathroom2.sensores;
                    let hab1S = data.room1.sensores;
                    let hab2S = data.room2.sensores;
                    let hab3S = data.room3.sensores.sensores;
                    let salaS = data.livingrooms.sensores;
                    let cocinaS = data.kitchens.sensores;
                    let garajesA = data.garajes.actuadores;
                    let bat1A = data.bathroom1.actuadores;
                    let bat2A = data.bathroom2.actuadores;
                    let hab1A = data.room1.actuadores;
                    let hab2A = data.room2.actuadores;
                    let hab3A = data.room3.sensores.actuadores;
                    let salaA = data.livingrooms.actuadores;
                    let cocinaA = data.kitchens.actuadores;

                    this.chartData = [
                        {
                            category: "Cocina",
                            sensores: cocinaS*-1,
                            actuadores: cocinaA
                        },
                        {
                            category: "Sala",
                            sensores: salaS*-1,
                            actuadores: salaA
                        },
                        {
                            category: "Garaje",
                            sensores: garajesS*-1,
                            actuadores: garajesA
                        },
                        {
                            category: "Baño 1",
                            sensores: bat1S*-1,
                            actuadores: bat1A
                        },
                        {
                            category: "Baño 2",
                            sensores: bat2S*-1,
                            actuadores: bat2A
                        },
                        {
                            category: "Habitacion1",
                            sensores: hab1S*-1,
                            actuadores: hab1A
                        },
                        {
                            category: "Habitacion2",
                            sensores: hab2S*-1,
                            actuadores: hab2A
                        },
                        {
                            category: "Habitacion3",
                            sensores: hab3S*-1,
                            actuadores: hab3A
                        }
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.hello {
  width: 80%; /* Ajusta el ancho según sea necesario */
  max-width: 800px; /* Establece un ancho máximo para la gráfica */
  height: 500px;
}

.title-bano1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px; /* Ajusta el margen inferior según sea necesario */
}
</style>