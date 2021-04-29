    var yourVlSpec = {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      description: 'Population of penguins through years',
      width: 400,
      height: 100,
      data: { url: 'penguins count.json'},
      transform: [
          {
            filter: {field: "season starting", lte: "2016"}
          }
      ],
      mark: {type:"area", line: "True", point: "True"},
      params:[{
        name: "species_filter",
        select: {type: "point", fields: ["common name"]},
        bind: "legend"
      }],
      encoding: {
          y: {
              aggregate: "sum", field: "mean"
          },
          x: {
              field: "season starting",
          },
          color: {
            field: "common name", 
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
