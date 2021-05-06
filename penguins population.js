    var yourVlSpec = {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      description: 'Population of penguins through years',
      data: { url: 'penguins count.json'},
      width: 400,
      height: 200,
      transform: [
          {
            filter: {field: "year", lte: "2016"}
          }
      ],
      mark: {type:"area", line: "True", point: "True"},
      params:[{
        name: "species_filter",
        select: {type: "point", fields: ["species"]},
        bind: "legend"
      }],
      encoding: {
          y: {
              aggregate: "sum", field: "population"
          },
          x: {
              field: "year",
          },
          color: {
            field: "species", 
            scale: {domain: ["adelie penguin","gentoo penguin", "chinstrap penguin"], 
            scheme: "set3"}
          },
          opacity: {
            condition: {param: "species_filter", value: 1},
            value: 0.2
          }
          }
    };
    vegaEmbed('#vis1', yourVlSpec);