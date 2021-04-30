var yourV2Spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'Population of penguins through years',
    width: 400,
    height: 300,
    
    layer: [
      {
        data: {
          url: "https://vega.github.io/vega-datasets/data/world-110m.json",
          format: {
            type: "topojson",
            feature: "countries"
          }
        },
        projection: {type: "stereographic", center: [0,-90], scale: 300},
        mark: {type: "geoshape", fill: "lightgray", stroke: "white"}
      },
      {
        data: { url: 'penguins count.json'},
        params: [
          {
            name: "Year",
            value: {"season starting": 2016},
            select: {type: "point", fields: ["season starting"]},
            bind: {"season starting": {input: "range", min: 1982, max: 2016, step: 1}}
          }
          ],
        projection: {type: "stereographic", center: [0, -90], scale: 300},
        mark: {type:"circle", stroke: "black", strokeWidth: 0.3},
        encoding: {
          longitude: {field: "longitude EPSG:4326", type: "quantitative"},
          latitude: {field: "latitude EPSG:4326", type: "quantitative"},
          color: {
            field: "common name", 
            type: "nominal", 
            scale: {scheme: "set3", domain: ["adelie penguin","gentoo penguin", "chinstrap penguin"]}
          },
          tooltip: [{field: "site name", type:"nominal"},{field:"mean", type: "quantitative"}],
          opacity: {
            condition: {param: "Year", value: 1},
            value: 0
          },
          size: {field: "mean", type: "quantitative", scale: {rangeMax: 3000}}
        }
      }
    ]
  };
  vegaEmbed('#vis2', yourV2Spec)
