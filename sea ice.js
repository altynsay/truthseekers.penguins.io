var yourV7Spec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: 'Mean sea ice concentration by month',
    title: "Mean sea ice concentration by month",
    data:  {url: "mean_sea_ice.json"},
    width: 500,
    height: 400,
    layer:[
        {
            mark: {type:"area", color: "lightgrey"},
            encoding:{
                x:{
                    field: "month", 
                    type: "quantitative", 
                    scale:{domain: [1,12]},
                    axis: {grid: false}
                },
                y:{
                    aggregate: "max", 
                    field: "sea_ice_concentration", 
                    axis: {grid: false}, 
                    title: "Mean sea ice concentration"}
            }
        },
        {
            mark: "line",
            params:[{
                name: "year_filter",
                select: {type: "point", fields: ["time_span"]},
                bind: "legend"
              }],
            encoding:{
                x:{field: "month", type: "quantitative"},
                y:{
                    field: "sea_ice_concentration", 
                    type: "quantitative"
                },
                color:{
                    field: "time_span",
                    type: "nominal",
                    scale: {scheme: "blueorange"}
                },
                tooltip: {field: "sea_ice_concentration", type:"quantitative"},
                opacity: {
                    condition: {param: "year_filter", value: 1},
                    value: 0.2
                }
            }
        }
    ],
    config:{
        view: {fill: "lightblue"}
    }

};
vegaEmbed('#vis7', yourV7Spec);