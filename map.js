var yourV3Spec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'Population of penguins through years',
    title: "Fantastic penguins and where to find them",
    width: 400,
    height: 500,
    layer: [
      {
        data: {
          url: "https://vega.github.io/vega-datasets/data/world-110m.json",
          format: {
            type: "topojson",
            feature: "countries"
          }
        },
        projection: {type: "stereographic", center: [0,-90], scale: 400},
        mark: {type: "geoshape", fill: "lightgrey", stroke: "white"}
      },
      {
        data: { url: 'penguins count.json'},
        params: [
          {
            name: "Year",
            value: {"year": 2016},
            select: {type: "point", fields: ["year"]},
            bind: {"year": {input: "range", min: 1982, max: 2016, step: 1}}
          }
          ],
        projection: {type: "stereographic", center: [0, -90], scale: 400},
        mark: {type:"circle", stroke: "black", strokeWidth: 0.3},
        encoding: {
          longitude: {field: "longitude EPSG:4326", type: "quantitative"},
          latitude: {field: "latitude EPSG:4326", type: "quantitative"},
          color: {
            field: "species", 
            type: "nominal", 
            scale: {scheme: "set3", domain: ["adelie penguin","gentoo penguin", "chinstrap penguin"]}
          },
          tooltip: [{field: "site name", type:"nominal"},{field:"population", type: "quantitative"}],
          opacity: {
            condition: {param: "Year", value: 1},
            value: 0
          },
          size: {field: "population", type: "quantitative", scale: {rangeMax: 2000}}
        }
      }
    ],
    config:{
      view: {fill: "none"}
    }
  };
  vegaEmbed('#vis3', yourV3Spec)
