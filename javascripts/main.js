---
---

//RequireJS config
require.config({
    paths: {
        jquery: [
            'https://code.jquery.com/jquery-2.2.3.min',
            //If the CDN location fails, load from this location
            'lib/jquery-2.2.3.min'
        ],
        Chart: ['https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.0.1/Chart.min',
            //If the CDN location fails, load from this location
            'lib/Chart.min'
        ]
    },
    shim: {
        'Chart': {
            exports: 'Chart'
        }
    }
});


define(['jquery', 'Chart'], function($, Chart) {
    //load global variables from _data/variables.json
    var gloalVariables = {{ site.data.variables | jsonify }};
    console.log(gloalVariables);

    //convert hex string to rgba string
    var hexToRgb = function(hex, opacity) { //hex: '#AAABBB'
        hex = hex.replace('#', '');
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
        return (opacity !== null && opacity !== undefined) ? 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')' : 'rgba(' + r + ',' + g + ',' + b + ',' + 1 + ')';
    };

    //convert rgba string to hex string
    var rgbaToHex = function(rgba) { //rgba: 'rgba(255, 100, 155, 20)'
        rgba = rgba.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgba && rgba.length === 4) ? "#" +
            ("0" + parseInt(rgba[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgba[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgba[3], 10).toString(16)).slice(-2) : '';
    };

    //create charts - I only have one chart for now. will make an object if more charts are added
    var createCharts = function() {
        Chart.defaults.global.legend.display = false;
        Chart.defaults.global.defaultFontColor = hexToRgb(gloalVariables.colors['color-brand']);

        var chartRadarDOM = $('#chartRadar');
        var chartRadarData = {
            labels: ["HTML / CSS", "JavaScript", "Database", "C#.NET / OOP / Algorithm", "Photoshop / Illustrator", "Git"],
            datasets: [{
                label: "Skill Level",
                backgroundColor: hexToRgb(gloalVariables.colors['color-brand'], 50),
                borderColor: hexToRgb(gloalVariables.colors['color-brand'], 80),
                pointBackgroundColor: hexToRgb(gloalVariables.colors['color-brand']),
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: hexToRgb(gloalVariables.colors['color-brand']),
                pointBorderWidth: 2,
                data: [9, 7, 6, 5, 10, 9]
            }]
        };
        var chartRadarOptions = {
            scale: {
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 6
                },
                pointLabels: {
                    fontSize: 12
                },
                gridLines: {
                    color: hexToRgb(gloalVariables.colors['color-brand'], 10)
                }
            }
        };
        var chartRadar = new Chart(chartRadarDOM, {
            type: 'radar',
            data: chartRadarData,
            options: chartRadarOptions
        });
    };

    //call things
    createCharts();
});
