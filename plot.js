Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err, rows){
function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}
var z_data=[ ]
for(i=0;i<24;i++)
{
  z_data.push(unpack(rows,i));
}

var data = [{
        z: z_data, 
        type:'surface',
        colorscale:'Viridis'
}]

var updatemenus=[
    {
        buttons: [   
            {
                args: ['type', 'surface'],
                label: '3D Surface',
                method: 'restyle'
            },
            {
                args: ['type', 'heatmap'],
                label:'Heatmap',
                method:'restyle'
            }             
        ],
        direction: 'left',
        pad: {'r': 10, 't': 10},
        showactive: true,
        type: 'buttons',
        x: 0.15,
        xanchor: 'left',
        y: 1.1,
        yanchor: 'top' 
    }
]

var annotations = [
    {
      text: 'Trace type:', 
      x: 0, 
      y: 1.06, 
      yref: 'paper', 
      align: 'left', 
      showarrow: false
    }
]

var layout = {
    margin: {t: 0, b: 0, l: 0, r: 0},
    updatemenus: updatemenus,
    annotations: annotations,
    scene: {
        xaxis:{
            gridcolor: 'rgb(255, 255, 255)',
            zerolinecolor: 'rgb(255, 255, 255)',
            showbackground: true,
            backgroundcolor:'rgb(230, 230,230)'
        },
        yaxis: {
            gridcolor: 'rgb(255, 255, 255)',
            zerolinecolor: 'rgb(255, 255, 255)',
            showbackground: true,
            backgroundcolor: 'rgb(230, 230, 230)'
        },
        zaxis: {
            gridcolor: 'rgb(255, 255, 255)',
            zerolinecolor: 'rgb(255, 255, 255)',
            showbackground: true,
            backgroundcolor: 'rgb(230, 230,230)'
        },
        aspectratio: {x: 1, y: 1, z: 0.7},
        aspectmode: 'manual'
  }
}


Plotly.plot("myDiv", data, layout, {showSendToCloud: true});

});