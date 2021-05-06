var yourV5Spec={
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  vconcat:[{
    data: {url: "https://vega.github.io/vega-datasets/data/penguins.json"},
    transform: [{
      window: [{op: "row_number", as: "row_number"}]
    }],
    hconcat: [{
      params: [{name: "brush", select: "interval"}],
      mark: "point",
      encoding: {
        x: {field: "Body Mass (g)", type: "quantitative", scale:{domain:[2000,6500]}},
        y: {field: "Flipper Length (mm)", type: "quantitative", scale:{domain:[150,250]}},
        color: {
          condition: {
            param: "brush", 
            field: "Species", 
            type: "nominal",
            scale: {domain: ["Adelie","Gentoo", "Chinstrap"], 
            scheme: "set3"}
          },
          value: "grey"
        }

      }
    }, {
      transform: [
        {filter: {param: "brush"}},
        {window: [{op: "rank", as: "rank"}]},
        {filter: {field: "rank", lt: 15}}
      ],
      hconcat: [{
        width: 50,
        title: "Body Mass",
        mark: "text",
        encoding: {
          text: {field: "Body Mass (g)", type: "quantitative"},
          y: {field: "row_number", type: "ordinal", axis: null}
        }
      }, {
        width: 50,
        title: "Flipper Length",
        mark: "text",
        encoding: {
          text: {field: "Flipper Length (mm)", type: "quantitative"},
          y: {field: "row_number", type: "ordinal", axis: null}
        }
      }]
    }],
    resolve: {legend: {color: "independent"}}
  },
  {
    data: {url: "https://vega.github.io/vega-datasets/data/penguins.json"},
    transform: [{
      window: [{op: "row_number", as: "row_number"}]
    }],
    hconcat: [
      {
        params: [{name: "brush", select: "interval"}],
        mark: "point",
        encoding: {
          x: {field: "Beak Depth (mm)", type: "quantitative", scale: { domain: [10, 25]}},
          y: {field: "Beak Length (mm)", type: "quantitative", scale: { domain: [30, 65]}},
          color: {
            condition: {
              param: "brush", 
              field: "Species", 
              type: "nominal",
              scale: {domain: ["Adelie","Gentoo", "Chinstrap"], 
              scheme: "set3"}
            },
            value: "grey"
          }
        }
      }, 
      {
        transform: [
          {filter: {param: "brush"}},
          {window: [{op: "rank", as: "rank"}]},
          {filter: {field: "rank", lt: 15}}
        ],
        hconcat: [{
          width: 50,
          title: "Beak Depth",
          mark: "text",
          encoding: {
            text: {field: "Beak Depth (mm)", type: "quantitative"},
            y: {field: "row_number", type: "ordinal", axis: null}
        }
      }, {
        width: 50,
        title: "Beak Length",
        mark: "text",
        encoding: {
          text: {field: "Beak Length (mm)", type: "quantitative"},
          y: {field: "row_number", type: "ordinal", axis: null}
        }
      }]
    }],
  resolve: {legend: {color: "independent"}}
  }]};
vegaEmbed('#vis5', yourV5Spec);
