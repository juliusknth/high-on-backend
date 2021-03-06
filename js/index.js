$(document).ready(function() {
    $('#example, #example1, #example2').dataTable( {
        "pagingType": "full_numbers",
        stateSave: true
    } );

    $('#dropdown3-tab').click(function() {        
        window.open(window.location.href);
    });

    var table = $('#example, #example1').DataTable();
 
	$('#example tbody').on( 'click', 'td', function () {
	    alert( table.cell( this ).data() );
	} );

	$('#example1 tbody').on( 'click', 'td', function () {
	    alert( table.cell( this ).data() );
	} );

	$('#dropdown2-tab').click(function() {
	    toggleFullScreen();
	});

	function toggleFullScreen() {
	  if (!document.fullscreenElement &&    // alternative standard method
	      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
	    if (document.documentElement.requestFullscreen) {
	      document.documentElement.requestFullscreen();
	    } else if (document.documentElement.msRequestFullscreen) {
	      document.documentElement.msRequestFullscreen();
	    } else if (document.documentElement.mozRequestFullScreen) {
	      document.documentElement.mozRequestFullScreen();
	    } else if (document.documentElement.webkitRequestFullscreen) {
	      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
	    }
	  } else {
	    if (document.exitFullscreen) {
	      document.exitFullscreen();
	    } else if (document.msExitFullscreen) {
	      document.msExitFullscreen();
	    } else if (document.mozCancelFullScreen) {
	      document.mozCancelFullScreen();
	    } else if (document.webkitExitFullscreen) {
	      document.webkitExitFullscreen();
	    }
	  }
	}

	$(function () {
        $('#container1').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Average Monthly Weather Data for Tokyo'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}°C',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true

            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Rainfall',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} mm',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                }

            }, { // Tertiary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Sea-Level Pressure',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    format: '{value} mb',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 55,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Rainfall',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                tooltip: {
                    valueSuffix: ' mm'
                }

            }, {
                name: 'Sea-Level Pressure',
                type: 'spline',
                yAxis: 2,
                data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
                marker: {
                    enabled: false
                },
                dashStyle: 'shortdot',
                tooltip: {
                    valueSuffix: ' mb'
                }

            }, {
                name: 'Temperature',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    valueSuffix: ' °C'
                }
            }]
        });
    });

    /**
     * Dark theme for Highcharts JS
     * @author Torstein Honsi
     */

    // Load the fonts
    Highcharts.createElement('link', {
       href: '//fonts.googleapis.com/css?family=Unica+One',
       rel: 'stylesheet',
       type: 'text/css'
    }, null, document.getElementsByTagName('head')[0]);

    Highcharts.theme = {
       colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
          "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
       chart: {
          backgroundColor: {
             linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
             stops: [
                [0, '#2a2a2b'],
                [1, '#3e3e40']
             ]
          },
          style: {
             fontFamily: "'Unica One', sans-serif"
          },
          plotBorderColor: '#606063'
       },
       title: {
          style: {
             color: '#E0E0E3',
             textTransform: 'uppercase',
             fontSize: '20px'
          }
       },
       subtitle: {
          style: {
             color: '#E0E0E3',
             textTransform: 'uppercase'
          }
       },
       xAxis: {
          gridLineColor: '#707073',
          labels: {
             style: {
                color: '#E0E0E3'
             }
          },
          lineColor: '#707073',
          minorGridLineColor: '#505053',
          tickColor: '#707073',
          title: {
             style: {
                color: '#A0A0A3'

             }
          }
       },
       yAxis: {
          gridLineColor: '#707073',
          labels: {
             style: {
                color: '#E0E0E3'
             }
          },
          lineColor: '#707073',
          minorGridLineColor: '#505053',
          tickColor: '#707073',
          tickWidth: 1,
          title: {
             style: {
                color: '#A0A0A3'
             }
          }
       },
       tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          style: {
             color: '#F0F0F0'
          }
       },
       plotOptions: {
          series: {
             dataLabels: {
                color: '#B0B0B3'
             },
             marker: {
                lineColor: '#333'
             }
          },
          boxplot: {
             fillColor: '#505053'
          },
          candlestick: {
             lineColor: 'white'
          },
          errorbar: {
             color: 'white'
          }
       },
       legend: {
          itemStyle: {
             color: '#E0E0E3'
          },
          itemHoverStyle: {
             color: '#FFF'
          },
          itemHiddenStyle: {
             color: '#606063'
          }
       },
       credits: {
          style: {
             color: '#666'
          }
       },
       labels: {
          style: {
             color: '#707073'
          }
       },

       drilldown: {
          activeAxisLabelStyle: {
             color: '#F0F0F3'
          },
          activeDataLabelStyle: {
             color: '#F0F0F3'
          }
       },

       navigation: {
          buttonOptions: {
             symbolStroke: '#DDDDDD',
             theme: {
                fill: '#505053'
             }
          }
       },

       // scroll charts
       rangeSelector: {
          buttonTheme: {
             fill: '#505053',
             stroke: '#000000',
             style: {
                color: '#CCC'
             },
             states: {
                hover: {
                   fill: '#707073',
                   stroke: '#000000',
                   style: {
                      color: 'white'
                   }
                },
                select: {
                   fill: '#000003',
                   stroke: '#000000',
                   style: {
                      color: 'white'
                   }
                }
             }
          },
          inputBoxBorderColor: '#505053',
          inputStyle: {
             backgroundColor: '#333',
             color: 'silver'
          },
          labelStyle: {
             color: 'silver'
          }
       },

       navigator: {
          handles: {
             backgroundColor: '#666',
             borderColor: '#AAA'
          },
          outlineColor: '#CCC',
          maskFill: 'rgba(255,255,255,0.1)',
          series: {
             color: '#7798BF',
             lineColor: '#A6C7ED'
          },
          xAxis: {
             gridLineColor: '#505053'
          }
       },

       scrollbar: {
          barBackgroundColor: '#808083',
          barBorderColor: '#808083',
          buttonArrowColor: '#CCC',
          buttonBackgroundColor: '#606063',
          buttonBorderColor: '#606063',
          rifleColor: '#FFF',
          trackBackgroundColor: '#404043',
          trackBorderColor: '#404043'
       },

       // special colors for some of the
       legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
       background2: '#505053',
       dataLabelsColor: '#B0B0B3',
       textColor: '#C0C0C0',
       contrastTextColor: '#F0F0F3',
       maskColor: 'rgba(255,255,255,0.3)'
    };

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);

    $(function () {

        // Get the CSV and create the chart
        $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=analytics.csv&callback=?', function (csv) {

            $('#container2').highcharts({

                data: {
                    csv: csv
                },

                title: {
                    text: 'Daily visits at www.highcharts.com'
                },

                subtitle: {
                    text: 'Source: Google Analytics'
                },

                xAxis: {
                    tickInterval: 7 * 24 * 3600 * 1000, // one week
                    tickWidth: 0,
                    gridLineWidth: 1,
                    labels: {
                        align: 'left',
                        x: 3,
                        y: -3
                    }
                },

                yAxis: [{ // left y axis
                    title: {
                        text: null
                    },
                    labels: {
                        align: 'left',
                        x: 3,
                        y: 16,
                        format: '{value:.,0f}'
                    },
                    showFirstLabel: false
                }, { // right y axis
                    linkedTo: 0,
                    gridLineWidth: 0,
                    opposite: true,
                    title: {
                        text: null
                    },
                    labels: {
                        align: 'right',
                        x: -3,
                        y: 16,
                        format: '{value:.,0f}'
                    },
                    showFirstLabel: false
                }],

                legend: {
                    align: 'left',
                    verticalAlign: 'top',
                    y: 20,
                    floating: true,
                    borderWidth: 0
                },

                tooltip: {
                    shared: true,
                    crosshairs: true
                },

                plotOptions: {
                    series: {
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function (e) {
                                    hs.htmlExpand(null, {
                                        pageOrigin: {
                                            x: e.pageX || e.clientX,
                                            y: e.pageY || e.clientY
                                        },
                                        headingText: this.series.name,
                                        maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                                            this.y + ' visits',
                                        width: 200
                                    });
                                }
                            }
                        },
                        marker: {
                            lineWidth: 1
                        }
                    }
                },

                series: [{
                    name: 'All visits',
                    lineWidth: 4,
                    marker: {
                        radius: 4
                    }
                }, {
                    name: 'New visitors'
                }]
            });
        });

    });

    $(function () {
        $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

            $('#container3').highcharts({
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'USD to EUR exchange rate over time'
                },
                subtitle: {
                    text: document.ontouchstart === undefined ?
                            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Exchange rate'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },

                series: [{
                    type: 'area',
                    name: 'USD to EUR',
                    data: data
                }]
            });
        });
    });

    $(function () {

        var colors = Highcharts.getOptions().colors,
            categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
            data = [{
                y: 56.33,
                color: colors[0],
                drilldown: {
                    name: 'MSIE versions',
                    categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0', 'MSIE 10.0', 'MSIE 11.0'],
                    data: [1.06, 0.5, 17.2, 8.11, 5.33, 24.13],
                    color: colors[0]
                }
            }, {
                y: 10.38,
                color: colors[1],
                drilldown: {
                    name: 'Firefox versions',
                    categories: ['Firefox v31', 'Firefox v32', 'Firefox v33', 'Firefox v35', 'Firefox v36', 'Firefox v37', 'Firefox v38'],
                    data: [0.33, 0.15, 0.22, 1.27, 2.76, 2.32, 2.31, 1.02],
                    color: colors[1]
                }
            }, {
                y: 24.03,
                color: colors[2],
                drilldown: {
                    name: 'Chrome versions',
                    categories: ['Chrome v30.0', 'Chrome v31.0', 'Chrome v32.0', 'Chrome v33.0', 'Chrome v34.0',
                        'Chrome v35.0', 'Chrome v36.0', 'Chrome v37.0', 'Chrome v38.0', 'Chrome v39.0', 'Chrome v40.0', 'Chrome v41.0', 'Chrome v42.0', 'Chrome v43.0'
                        ],
                    data: [0.14, 1.24, 0.55, 0.19, 0.14, 0.85, 2.53, 0.38, 0.6, 2.96, 5, 4.32, 3.68, 1.45],
                    color: colors[2]
                }
            }, {
                y: 4.77,
                color: colors[3],
                drilldown: {
                    name: 'Safari versions',
                    categories: ['Safari v5.0', 'Safari v5.1', 'Safari v6.1', 'Safari v6.2', 'Safari v7.0', 'Safari v7.1', 'Safari v8.0'],
                    data: [0.3, 0.42, 0.29, 0.17, 0.26, 0.77, 2.56],
                    color: colors[3]
                }
            }, {
                y: 0.91,
                color: colors[4],
                drilldown: {
                    name: 'Opera versions',
                    categories: ['Opera v12.x', 'Opera v27', 'Opera v28', 'Opera v29'],
                    data: [0.34, 0.17, 0.24, 0.16],
                    color: colors[4]
                }
            }, {
                y: 0.2,
                color: colors[5],
                drilldown: {
                    name: 'Proprietary or Undetectable',
                    categories: [],
                    data: [],
                    color: colors[5]
                }
            }],
            browserData = [],
            versionsData = [],
            i,
            j,
            dataLen = data.length,
            drillDataLen,
            brightness;


        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {

            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });

            // add version data
            drillDataLen = data[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                brightness = 0.2 - (j / drillDataLen) / 5;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }

        // Create the chart
        $('#container4').highcharts({
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Browser market share, January, 2015 to May, 2015'
            },
            subtitle: {
                text: 'Source: <a href="http://netmarketshare.com/">netmarketshare.com</a>'
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: 'Browsers',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function () {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Versions',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function () {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
                    }
                }
            }]
        });
    });

    $(function () {

        $('#container5').highcharts({

            chart: {
                polar: true,
                type: 'line'
            },

            title: {
                text: 'Budget vs spending',
                x: -80
            },

            pane: {
                size: '80%'
            },

            xAxis: {
                categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
                        'Information Technology', 'Administration'],
                tickmarkPlacement: 'on',
                lineWidth: 0
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 70,
                layout: 'vertical'
            },

            series: [{
                name: 'Allocated Budget',
                data: [43000, 19000, 60000, 35000, 17000, 10000],
                pointPlacement: 'on'
            }, {
                name: 'Actual Spending',
                data: [50000, 39000, 42000, 31000, 26000, 14000],
                pointPlacement: 'on'
            }]

        });
    });

    $(function () {

        // Parse the data from an inline table using the Highcharts Data plugin
        $('#container6').highcharts({
            data: {
                table: 'freq',
                startRow: 1,
                endRow: 17,
                endColumn: 7
            },

            chart: {
                polar: true,
                type: 'column'
            },

            title: {
                text: 'Wind rose for South Shore Met Station, Oregon'
            },

            subtitle: {
                text: 'Source: or.water.usgs.gov'
            },

            pane: {
                size: '85%'
            },

            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 100,
                layout: 'vertical'
            },

            xAxis: {
                tickmarkPlacement: 'on'
            },

            yAxis: {
                min: 0,
                endOnTick: false,
                showLastLabel: true,
                title: {
                    text: 'Frequency (%)'
                },
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                },
                reversedStacks: false
            },

            tooltip: {
                valueSuffix: '%'
            },

            plotOptions: {
                series: {
                    stacking: 'normal',
                    shadow: false,
                    groupPadding: 0,
                    pointPlacement: 'on'
                }
            }
        });
    });

    $(function () {

        $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=world-population-history.csv&callback=?', function (csv) {

            // Parse the CSV Data
            /*Highcharts.data({
                csv: data,
                switchRowsAndColumns: true,
                parsed: function () {
                    console.log(this.columns);
                }
            });*/

            // Very simple and case-specific CSV string splitting
            function CSVtoArray(text) {
                return text.replace(/^"/, '')
                    .replace(/",$/, '')
                    .split('","');
            };

            csv = csv.split(/\n/);

            var countries = {},
                mapChart,
                countryChart,
                numRegex = /^[0-9\.]+$/,
                quoteRegex = /\"/g,
                categories = CSVtoArray(csv[1]).slice(4);

            // Parse the CSV into arrays, one array each country
            $.each(csv.slice(2), function (j, line) {
                var row = CSVtoArray(line),
                    data = row.slice(4);

                $.each(data, function (i, val) {
                    
                    val = val.replace(quoteRegex, '');
                    if (numRegex.test(val)) {
                        val = parseInt(val);
                    } else if (!val) {
                        val = null;
                    }
                    data[i] = val;
                });
                countries[row[1]] = {
                    name: row[0],
                    code3: row[1],
                    data: data
                };
            });

            // For each country, use the latest value for current population
            var data = [];
            for (var code3 in countries) {
                var value = null,
                    year,
                    itemData = countries[code3].data,
                    i = itemData.length;

                while (i--) {
                    if (typeof itemData[i] === 'number') {
                        value = itemData[i];
                        year = categories[i];
                        break;
                    }
                }
                data.push({
                    name: countries[code3].name,
                    code3: code3,
                    value: value,
                    year: year
                });
            }
            
            // Add lower case codes to the data set for inclusion in the tooltip.pointFormat
            var mapData = Highcharts.geojson(Highcharts.maps['custom/world']);
            $.each(mapData, function () {
                this.id = this.properties['hc-key']; // for Chart.get()
                this.flag = this.id.replace('UK', 'GB').toLowerCase();
            });

            // Wrap point.select to get to the total selected points
            Highcharts.wrap(Highcharts.Point.prototype, 'select', function (proceed) {

                proceed.apply(this, Array.prototype.slice.call(arguments, 1));

                var points = mapChart.getSelectedPoints();

                if (points.length) {
                    if (points.length === 1) {
                        $('#info #flag').attr('class', 'flag ' + points[0].flag);
                        $('#info h2').html(points[0].name);
                    } else {
                        $('#info #flag').attr('class', 'flag');
                        $('#info h2').html('Comparing countries');

                    }
                    $('#info .subheader').html('<h4>Historical population</h4><small><em>Shift + Click on map to compare countries</em></small>')

                    if (!countryChart) {
                        countryChart = $('#country-chart').highcharts({
                            chart: {
                                height: 250,
                                spacingLeft: 0
                            },
                            credits: {
                                enabled: false
                            },
                            title: {
                                text: null
                            },
                            subtitle: {
                                text: null
                            },
                            xAxis: {
                                tickPixelInterval: 50,
                                crosshair: true
                            },
                            yAxis: {
                                title: null,
                                opposite: true
                            },
                            tooltip: {
                                shared: true
                            },
                            plotOptions: {
                                series: {
                                    animation: {
                                        duration: 500
                                    },
                                    marker: {
                                        enabled: false
                                    },
                                    threshold: 0,
                                    pointStart: parseInt(categories[0]),
                                }
                            }
                        }).highcharts();
                    }

                    $.each(points, function (i) {
                        // Update
                        if (countryChart.series[i]) {
                            /*$.each(countries[this.code3].data, function (pointI, value) {
                                countryChart.series[i].points[pointI].update(value, false);
                            });*/
                            countryChart.series[i].update({
                                name: this.name,
                                data: countries[this.code3].data,
                                type: points.length > 1 ? 'line' : 'area'
                            }, false);
                        } else {
                            countryChart.addSeries({
                                name: this.name,
                                data: countries[this.code3].data,
                                type: points.length > 1 ? 'line' : 'area'
                            }, false);
                        }
                    });
                    while (countryChart.series.length > points.length) {
                        countryChart.series[countryChart.series.length - 1].remove(false);
                    }
                    countryChart.redraw();

                } else {
                    $('#info #flag').attr('class', '');
                    $('#info h2').html('');
                    $('#info .subheader').html('');
                    if (countryChart) {
                        countryChart = countryChart.destroy();
                    }
                }

                

            });
            
            // Initiate the map chart
            mapChart = $('#container7').highcharts('Map', {
                
                title : {
                    text : 'Population history by country'
                },

                subtitle: {
                    text: 'Source: <a href="http://data.worldbank.org/indicator/SP.POP.TOTL/countries/1W?display=default">The World Bank</a>'
                },

                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },

                colorAxis: {
                    type: 'logarithmic',
                    endOnTick: false,
                    startOnTick: false,
                    min: 50000
                },

                tooltip: {
                    footerFormat: '<span style="font-size: 10px">(Click for details)</span>'
                },

                series : [{
                    data : data,
                    mapData: mapData,
                    joinBy: ['iso-a3', 'code3'],
                    name: 'Current population',
                    allowPointSelect: true,
                    cursor: 'pointer',
                    states: {
                        select: {
                            color: '#a4edba',
                            borderColor: 'black',
                            dashStyle: 'shortdot'
                        }
                    }
                }]
            }).highcharts();

            // Pre-select a country
            mapChart.get('us').select();
        });
    });

    $(function () {
        $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlcv.json&callback=?', function (data) {

            // split the data set into ohlc and volume
            var ohlc = [],
                volume = [],
                dataLength = data.length,
                // set the allowed units for data grouping
                groupingUnits = [[
                    'week',                         // unit name
                    [1]                             // allowed multiples
                ], [
                    'month',
                    [1, 2, 3, 4, 6]
                ]],

                i = 0;

            for (i; i < dataLength; i += 1) {
                ohlc.push([
                    data[i][0], // the date
                    data[i][1], // open
                    data[i][2], // high
                    data[i][3], // low
                    data[i][4] // close
                ]);

                volume.push([
                    data[i][0], // the date
                    data[i][5] // the volume
                ]);
            }


            // create the chart
            $('#container17').highcharts('StockChart', {

                rangeSelector: {
                    selected: 1
                },

                title: {
                    text: 'AAPL Historical'
                },

                yAxis: [{
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'OHLC'
                    },
                    height: '60%',
                    lineWidth: 2
                }, {
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'Volume'
                    },
                    top: '65%',
                    height: '35%',
                    offset: 0,
                    lineWidth: 2
                }],

                series: [{
                    type: 'candlestick',
                    name: 'AAPL',
                    data: ohlc,
                    dataGrouping: {
                        units: groupingUnits
                    }
                }, {
                    type: 'column',
                    name: 'Volume',
                    data: volume,
                    yAxis: 1,
                    dataGrouping: {
                        units: groupingUnits
                    }
                }]
            });
        });
    });

    $(function () {
        var seriesOptions = [],
            seriesCounter = 0,
            names = ['MSFT', 'AAPL', 'GOOG'],
            // create the chart when all data is loaded
            createChart = function () {
    
                $('#container18').highcharts('StockChart', {
    
                    rangeSelector: {
                        selected: 4
                    },
    
                    yAxis: {
                        labels: {
                            formatter: function () {
                                return (this.value > 0 ? ' + ' : '') + this.value + '%';
                            }
                        },
                        plotLines: [{
                            value: 0,
                            width: 2,
                            color: 'silver'
                        }]
                    },
    
                    plotOptions: {
                        series: {
                            compare: 'percent'
                        }
                    },
    
                    tooltip: {
                        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                        valueDecimals: 2
                    },
    
                    series: seriesOptions
                });
            };
    
        $.each(names, function (i, name) {
    
            $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=' + name.toLowerCase() + '-c.json&callback=?',    function (data) {
    
                seriesOptions[i] = {
                    name: name,
                    data: data
                };
    
                // As we're loading the data asynchronously, we don't know what order it will arrive. So
                // we keep a counter and create the chart when all the data is loaded.
                seriesCounter += 1;
    
                if (seriesCounter === names.length) {
                    createChart();
                }
            });
        });
    });

    $(function() { 
        // for bootstrap 3 use 'shown.bs.tab', for bootstrap 2 use 'shown' in the next line
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            // save the latest tab; use cookies if you like 'em better:
            localStorage.setItem('lastTab', $(this).attr('href'));
        });

        // go to the latest tab, if it exists:
        var lastTab = localStorage.getItem('lastTab');
        if (lastTab) {
            $('[href="' + lastTab + '"]').tab('show');
        }
    });

    $('#nav').affix({});

});