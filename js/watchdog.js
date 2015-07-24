$(function () {

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

    $('#dropdown3-tab').click(function() {        
        window.open(window.location.href);
    });

    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#container1').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Live random data'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
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

    $('#container2').highcharts({
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

    $('#container3').bind('mousemove touchmove', function (e) {
        var chart,
            point,
            i;

        for (i = 0; i < Highcharts.charts.length; i++) {
            chart = Highcharts.charts[i];
            e = chart.pointer.normalize(e); // Find coordinates within the chart
            point = chart.series[0].searchPoint(e, true); // Get the hovered point

            if (point) {
                point.onMouseOver(); // Show the hover marker
                chart.tooltip.refresh(point); // Show the tooltip
                chart.xAxis[0].drawCrosshair(e, point); // Show the crosshair
            }
        }
    });
    /**
     * Override the reset function, we don't need to hide the tooltips and crosshairs.
     */
    Highcharts.Pointer.prototype.reset = function () {};

    /**
     * Synchronize zooming through the setExtremes event handler.
     */
    function syncExtremes(e) {
        var thisChart = this.chart;

        Highcharts.each(Highcharts.charts, function (chart) {
            if (chart !== thisChart) {
                if (chart.xAxis[0].setExtremes) { // It is null while updating
                    chart.xAxis[0].setExtremes(e.min, e.max);
                }
            }
        });
    }

    // Get the data. The contents of the data file can be viewed at 
    // https://github.com/highslide-software/highcharts.com/blob/master/samples/data/activity.json
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=activity.json&callback=?', function (activity) {
        $.each(activity.datasets, function (i, dataset) {

            // Add X values
            dataset.data = Highcharts.map(dataset.data, function (val, i) {
                return [activity.xData[i], val];
            });

            $('<div class="chart">')
                .appendTo('#container3')
                .highcharts({
                    chart: {
                        marginLeft: 40, // Keep all charts left aligned
                        spacingTop: 20,
                        spacingBottom: 20
                        // zoomType: 'x',
                        // pinchType: null // Disable zoom on touch devices
                    },
                    title: {
                        text: dataset.name,
                        align: 'left',
                        margin: 0,
                        x: 30
                    },
                    credits: {
                        enabled: false
                    },
                    legend: {
                        enabled: false
                    },
                    xAxis: {
                        crosshair: true,
                        events: {
                            setExtremes: syncExtremes
                        },
                        labels: {
                            format: '{value} km'
                        }
                    },
                    yAxis: {
                        title: {
                            text: null
                        }
                    },
                    tooltip: {
                        positioner: function () {
                            return {
                                x: this.chart.chartWidth - this.label.width, // right aligned
                                y: -1 // align to title
                            };
                        },
                        borderWidth: 0,
                        backgroundColor: 'none',
                        pointFormat: '{point.y}',
                        headerFormat: '',
                        shadow: false,
                        style: {
                            fontSize: '18px'
                        },
                        valueDecimals: dataset.valueDecimals
                    },
                    series: [{
                        data: dataset.data,
                        name: dataset.name,
                        type: dataset.type,
                        color: Highcharts.getOptions().colors[i],
                        fillOpacity: 0.3,
                        tooltip: {
                            valueSuffix: ' ' + dataset.unit
                        }
                    }]
                });
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
            mapChart = $('#container10').highcharts('Map', {
                
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

        /**
         * This is a complicated demo of Highmaps, not intended to get you up to speed
         * quickly, but to show off some basic maps and features in one single place.
         * For the basic demo, check out http://www.highcharts.com/maps/demo/geojson instead.
         */

        // Base path to maps
        var baseMapPath = "http://code.highcharts.com/mapdata/",
            showDataLabels = false, // Switch for data labels enabled/disabled
            mapCount = 0,
            searchText,
            mapOptions = '';

        // Populate dropdown menus and turn into jQuery UI widgets
        $.each(Highcharts.mapDataIndex, function (mapGroup, maps) {
            if (mapGroup !== "version") {
                mapOptions += '<option class="option-header">' + mapGroup + '</option>';
                $.each(maps, function (desc, path) {
                    mapOptions += '<option value="' + path + '">' + desc + '</option>';
                    mapCount += 1;
                });
            }
        });
        searchText = 'Search ' + mapCount + ' maps';
        mapOptions = '<option value="custom/world.js">' + searchText + '</option>' + mapOptions;
        $("#mapDropdown").append(mapOptions).combobox();

        // Change map when item selected in dropdown
        $("#mapDropdown").change(function () {
            var $selectedItem = $("option:selected", this),
                mapDesc = $selectedItem.text(),
                mapKey = this.value.slice(0, -3),
                svgPath = baseMapPath + mapKey + '.svg',
                geojsonPath = baseMapPath + mapKey + '.geo.json',
                javascriptPath = baseMapPath + this.value,
                isHeader = $selectedItem.hasClass('option-header');

            // Dim or highlight search box
            if (mapDesc === searchText || isHeader) {
                $('.custom-combobox-input').removeClass('valid');
                location.hash = '';
            } else {
                $('.custom-combobox-input').addClass('valid');
                location.hash = mapKey;
            }

            if (isHeader) {
                return false;
            }

            // Show loading
            if ($("#container11").highcharts()) {
                $("#container11").highcharts().showLoading('<i class="fa fa-spinner fa-spin fa-2x"></i>');
            }


            // When the map is loaded or ready from cache...
            function mapReady() {

                var mapGeoJSON = Highcharts.maps[mapKey],
                    data = [],
                    parent,
                    match;

                // Update info box download links
                $("#download").html(
                    '<a class="button" target="_blank" href="http://jsfiddle.net/gh/get/jquery/1.11.0/' +
                        'highslide-software/highcharts.com/tree/master/samples/mapdata/' + mapKey + '">' +
                        'View clean demo</a>' +
                        '<div class="or-view-as">... or view as ' +
                        '<a target="_blank" href="' + svgPath + '">SVG</a>, ' +
                        '<a target="_blank" href="' + geojsonPath + '">GeoJSON</a>, ' +
                        '<a target="_blank" href="' + javascriptPath + '">JavaScript</a>.</div>'
                );

                // Generate non-random data for the map
                $.each(mapGeoJSON.features, function (index, feature) {
                    data.push({
                        key: feature.properties['hc-key'],
                        value: index
                    });
                });

                // Show arrows the first time a real map is shown
                if (mapDesc !== searchText) {
                    $('.selector .prev-next').show();
                    $('#sideBox').show();
                }

                // Is there a layer above this?
                match = mapKey.match(/^(countries\/[a-z]{2}\/[a-z]{2})-[a-z0-9]+-all$/);
                if (/^countries\/[a-z]{2}\/[a-z]{2}-all$/.test(mapKey)) { // country
                    parent = {
                        desc: 'World',
                        key: 'custom/world'
                    };
                } else if (match) { // admin1
                    parent = {
                        desc: $('option[value="' + match[1] + '-all.js"]').text(),
                        key: match[1] + '-all'
                    };
                }
                $('#up').html('');
                if (parent) {
                    $('#up').append(
                        $('<a><i class="fa fa-angle-up"></i> ' + parent.desc + '</a>')
                            .attr({
                                title: parent.key
                            })
                            .click(function () {
                                $('#mapDropdown').val(parent.key + '.js').change();
                            })
                    );
                }


                // Instantiate chart
                $("#container11").highcharts('Map', {

                    title: {
                        text: null
                    },

                    mapNavigation: {
                        enabled: true
                    },

                    colorAxis: {
                        min: 0,
                        stops: [
                            [0, '#EFEFFF'],
                            [0.5, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.5).get()]
                        ]
                    },

                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        verticalAlign: 'bottom'
                    },

                    series: [{
                        data: data,
                        mapData: mapGeoJSON,
                        joinBy: ['hc-key', 'key'],
                        name: 'Random data',
                        states: {
                            hover: {
                                color: Highcharts.getOptions().colors[2]
                            }
                        },
                        dataLabels: {
                            enabled: showDataLabels,
                            formatter: function () {
                                return mapKey === 'custom/world' || mapKey === 'countries/us/us-all' ?
                                        (this.point.properties && this.point.properties['hc-a2']) :
                                        this.point.name;
                            }
                        },
                        point: {
                            events: {
                                // On click, look for a detailed map
                                click: function () {
                                    var key = this.key;
                                    $('#mapDropdown option').each(function () {
                                        if (this.value === 'countries/' + key.substr(0, 2) + '/' + key + '-all.js') {
                                            $('#mapDropdown').val(this.value).change();
                                        }
                                    });
                                }
                            }
                        }
                    }, {
                        type: 'mapline',
                        name: "Separators",
                        data: Highcharts.geojson(mapGeoJSON, 'mapline'),
                        nullColor: 'gray',
                        showInLegend: false,
                        enableMouseTracking: false
                    }]
                });

                showDataLabels = $("#chkDataLabels").attr('checked');

            }

            // Check whether the map is already loaded, else load it and
            // then show it async
            if (Highcharts.maps[mapKey]) {
                mapReady();
            } else {
                $.getScript(javascriptPath, mapReady);
            }
        });

        // Toggle data labels - Note: Reloads map with new random data
        $("#chkDataLabels").change(function () {
            showDataLabels = $("#chkDataLabels").attr('checked');
            $("#mapDropdown").change();
        });

        // Switch to previous map on button click
        $("#btn-prev-map").click(function () {
            $("#mapDropdown option:selected").prev("option").prop("selected", true).change();
        });

        // Switch to next map on button click
        $("#btn-next-map").click(function () {
            $("#mapDropdown option:selected").next("option").prop("selected", true).change();
        });

        // Trigger change event to load map on startup
        if (location.hash) {
            $('#mapDropdown').val(location.hash.substr(1) + '.js');
        } else { // for IE9
            $($('#mapDropdown option')[0]).attr('selected', 'selected');
        }
        $('#mapDropdown').change();
    });

     $('.carousel').carousel({
      interval: false
    });

});