// First JS animation
var first_option = {
        series: [{
          name: 'Offer',
          data: [10, 10]
        }, {
          name: 'Hiring Committee',
          data: [10, 0]
        }, {
          name: 'Vitual Onsite',
          data: [0, 10]
        }, {
          name: 'Onsite',
          data: [10, 0]
        }, {
          name: 'Phone Interview',
          data: [10, 10]
        }, {
          name: 'OA',
          data: [10, 10]
        }],
        chart: {
          type: 'bar',
          height: 340,
          stacked: true,
          stackType: '100%',
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        title: {
          text: 'Hiring Process'
        },
        xaxis: {
          categories: ['Google', 'Amazon'],
          labels: {
            formatter: function (val) {
              return val
            }
          }
        },
        yaxis: {
          show: false,
          title: {
            text: undefined
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.15,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        dataLabels: {
          enabled: true,
            formatter: function(value, { seriesIndex, dataPointIndex, w }) {
    return w.config.series[seriesIndex].name
  },
          style: {
            colors: ['#f3f4f5', '#fff']
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      };

var chart = new ApexCharts(document.querySelector("#chart_one"), first_option);
chart.render();

// Second JS animation
var second_option = {
    series: [
      {
        name: 'Google',
        data: [
          {
            x: 'OA',
            y: [
              new Date('2019-03-01').getTime(),
              new Date('2019-03-08').getTime()
            ]
          },
          {
            x: 'HR Call',
            y: [
              new Date('2019-03-08').getTime(),
              new Date('2019-03-12').getTime()
            ]
          },
          {
            x: 'Onsite',
            y: [
              new Date('2019-03-12').getTime(),
              new Date('2019-03-20').getTime()
            ]
          },
        ]
      },
      {
        name: 'Amazon',
        data: [
          {
            x: 'OA',
            y: [
              new Date('2019-03-01').getTime(),
              new Date('2019-03-05').getTime()
            ]
          },
          {
            x: 'HR Call',
            y: [
              new Date('2019-03-05').getTime(),
              new Date('2019-03-10').getTime()
            ]
          },
          {
            x: 'Onsite',
            y: [
              new Date('2019-03-10').getTime(),
              new Date('2019-03-25').getTime()
            ]
          },
        ]
      },
      {
        name: 'Apple',
        data: [
          {
            x: 'OA',
            y: [
              new Date('2019-03-01').getTime(),
              new Date('2019-03-10').getTime()
            ]
          },
          {
            x: 'HR Call',
            y: [
              new Date('2019-03-10').getTime(),
              new Date('2019-03-16').getTime()
            ]
          },
          {
            x: 'Onsite',
            y: [
              new Date('2019-03-16').getTime(),
              new Date('2019-03-25').getTime()
            ]
          },

        ]
      }
    ],
    chart: {
      height: 450,
      type: 'rangeBar'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%'
      }
    },
    xaxis: {
      type: 'datetime'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100]
      }
    },
    dataLabels: {
      enabled: true,
        formatter: function(value, { seriesIndex, dataPointIndex, w }) {
            return w.config.series[seriesIndex].name
        },
      style: {
        colors: ['#f3f4f5', '#fff']
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    }
  };

var chart = new ApexCharts(document.querySelector("#chart_two"), second_option);
chart.render();
