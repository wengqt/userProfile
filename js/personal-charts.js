function initWordChart() {
    var _chart = echarts.init(document.getElementById('word-chart'));
    var keywords = {
        "showDataShadow": 217,
        "x": 684,
        "valueDim": 499,
        "onZero": 931,
        "right": 3255,
        "clockwise": 1035,
        "itemWidth": 1732,
        "trigger": 3840,
        "axis": 379,
        "selectedOffset": 670,
        "startAngle": 1293,
        "minAngle": 590,
        "top": 4637,
        "avoidLabelOverlap": 870,
        "barBorderColor": 721,
        "barBorderWidth": 498,
        "treemap": 3865,
        "y": 367,
        "valueIndex": 704,
        "showLegendSymbol": 482,
        "mapValueCalculation": 492,
        "optionToContent": 264,
        "handleColor": 187,
        "handleSize": 271,
        "showContent": 1853,
        "angleAxisIndex": 406,
        "endValue": 327,
        "triggerOn": 1720,
        "contentToOption": 169,
        "buttonColor": 71,
        "rotate": 1144,
        "hoverLink": 335,
        "outOfRange": 491,
        "textareaColor": 58,
        "textareaBorderColor": 58,
        "textColor": 60,
        "buttonTextColor": 66,
        "category": 336,
        "hideDelay": 786,
        "alwaysShowContent": 1267,
        "extraCssText": 901,
        "effectType": 277,
        "force": 1820,
        "rippleEffect": 723,
        "edgeSymbolSize": 329,
        "showEffectOn": 271,
        "gravity": 199,
        "edgeLength": 193,
        "layoutAnimation": 152,
        "length2": 169,
        "enterable": 957,
        "dim": 83,
        "readOnly": 143,
        "levels": 444,
        "textGap": 256,
        "pixelRatio": 84,
        "nodeScaleRatio": 232,
        "draggable": 249,
        "brushType": 158,
        "radarIndex": 152,
        "large": 182,
        "edgeSymbol": 675,
        "largeThreshold": 132,
        "leafDepth": 73,
        "childrenVisibleMin": 73,
        "minSize": 35,
        "maxSize": 35,
        "sort": 90,
        "funnelAlign": 61,
        "source": 336,
        "nodeClick": 200,
        "curveness": 350,
        "areaSelectStyle": 104,
        "parallelIndex": 52,
        "initLayout": 359,
        "trailLength": 116,
        "boxWidth": 20,
        "back": 53,
        "rewind": 110,
        "zoomToNodeRatio": 80,
        "squareRatio": 60,
        "parallelAxisDefault": 358,
        "checkpointStyle": 440,
        "nodeWidth": 49,
        "color0": 62,
        "layoutIterations": 56,
        "nodeGap": 54,
        "color(Array": 76,
        "<string>)": 76,
        "repulsion": 276,
        "tiled": 105,
        "currentIndex": 145,
        "axisType": 227,
        "loop": 97,
        "playInterval": 112,
        "borderColor0": 23,
        "gap": 43,
        "autoPlay": 123,
        "showPlayBtn": 25,
        "breadcrumb": 119,
        "colorMappingBy": 85,
        "id": 18,
        "blurSize": 85,
        "minOpacity": 50,
        "maxOpacity": 54,
        "prevIcon": 12,
        "children": 21,
        "shape": 98,
        "nextIcon": 12,
        "showNextBtn": 17,
        "stopIcon": 21,
        "visibleMin": 83,
        "visualDimension": 97,
        "colorSaturation": 56,
        "colorAlpha": 66,
        "emptyItemWidth": 10,
        "inactiveOpacity": 4,
        "activeOpacity": 4,
        "showPrevBtn": 19,
        "playIcon": 26,
        "ellipsis": 19,
        "gapWidth": 19,
        "borderColorSaturation": 10,
        "handleIcon": 2,
        "handleStyle": 6,
        "borderType": 1,
        "constantSpeed": 1,
        "polyline": 2,
        "blendMode": 1,
        "dataBackground": 1,
        "textAlign": 1,
        "textBaseline": 1,
        "brush": 3
    };
    var data = [];
    for (var name in keywords) {
        data.push({
            name: name,
            value: Math.sqrt(keywords[name])
        })
    }
    var maskImage = new Image();
    var option = {
        tooltip: {
            show: true
        },
        series: [{
            type: 'wordCloud',
            sizeRange: [10, 50],
            rotationRange: [-90, 90],
            rotationStep: 90,
            gridSize: 0,
            //shape: 'pentagon',
            maskImage: maskImage,
            drawOutOfBound: false,
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    color: 'red'
                }
            },
            data: data.sort(function (a, b) {
                return b.value - a.value;
            })
        }]
    };
    maskImage.onload = function () {
        option.series[0].maskImage
        _chart.setOption(option);
        //console.log(1111)
    }
    maskImage.src = './img/male1.png';
    //console.log(1111)
    // chart.setOption(option)
    window.onresize = function () {
        _chart.resize();
    }
}
initWordChart();



/***chart2 
 * 个人就医记录表
 * @param inData
 * [{tijian:1,jiuyi:1,huafei:1111(单位：元)},{}]
 */

function initPersonalChart2(inData) {
    var _tirChart = echarts.init(document.getElementById('tir-chart'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        // toolbox: {
        //     feature: {
        //         dataView: {
        //             show: true,
        //             readOnly: false
        //         },
        //         magicType: {
        //             show: true,
        //             type: ['line', 'bar']
        //         },
        //         restore: {
        //             show: true
        //         },
        //         saveAsImage: {
        //             show: true
        //         }
        //     }
        // },
        legend: {
            data: ['体检次数', '就医次数', '花费']
        },
        xAxis: [{
            type: 'category',
            data: (function () {
                var y = new Date().getFullYear();
                var arr = [y - 4, y - 3, y - 2, y - 1, y];
                return arr;
            })(),
            axisPointer: {
                type: 'shadow'
            }
        }],
        yAxis: [{
                type: 'value',
                name: '次数',
                min: 0,
                //max: 250,
                //interval: 50,
                splitLine:{show:false},
                axisLabel: {
                    formatter: '{value} 次'
                },
                
            },
            {
                type: 'value',
                name: '花费',
                min: 0,
                //max: 25,
                //interval: 5,
                axisLabel: {
                    formatter: '{value} 元'
                },
                // axisPointer: {
                //     type: 'shadow'
                // },
                splitLine:{show:false},
            }
        ],
        series: [{
                name: '体检次数',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3].slice(0,5)
            },
            {
                name: '就医次数',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3].slice(0,5)
            },
            {
                name: '花费',
                type: 'line',
                yAxisIndex: 1,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2].slice(0,5)
            }
        ]
    };
    _tirChart.setOption(option);
    window.addEventListener("resize", function(){
        _tirChart.resize();
    });
    
}

initPersonalChart2();



function radarChart(inData){
    var _radarChart = echarts.init(document.getElementById('radar-chart'));
    var option = {
        title: {
            text: '基础雷达图'
        },
        tooltip: {},
        legend: {
            data: ['身体指标']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
               { name: '呼吸系统', max: 100},
               { name: '循环系统', max: 100},
               { name: '神经系统', max: 100},
               { name: '内分泌系统', max: 100},
               { name: '消化系统', max: 100},
               { name: '泌尿系统', max: 100},
               { name: '生殖系统', max: 100},
               { name: '运动系统', max: 100}
            ]
        },
        series: [{
            name: '身体系统指标',
            type: 'radar',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [90, 90, 90, 90, 90, 90, 90, 90],
                    name : '身体指标'
                }
            ]
        }]
    };
    _radarChart.setOption(option);
    window.addEventListener("resize", function(){
        _radarChart.resize();
    });
}

radarChart();