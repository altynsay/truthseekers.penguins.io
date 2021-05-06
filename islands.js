var yourV6Spec={ $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data:{
    url: "https://gist.githubusercontent.com/SanderVW97/bb1200446cf6528e8a371bed348f784b/raw/74b429b78b263616411affe51e755261d85753e7/Penguin_data_gist.tsv"},
"params":[{
    name:"location", value:"ORNE",
        bind:{input: "select", options: ["NEKO", "PETE", "ORNE"]}
    }, {name: "start", value:1983,
        bind: {input:"range", min:1983, max:2018, step:1}},
        {name: "end", value:2010,
        bind: {input:"range", min:1983, max:2018, step:1}}
    ],
  transform: [
    {filter:
      {field: "season starting", gte: {expr:"start"}}},
    {filter:
      {field: "season starting", lte: {expr:"end"}}}],
vconcat:[{
  title:"All three study islands in the West Antarctic Peninsula",
  width: 400, 
  height: 200,
   mark: "area",
  encoding: {
    x: {
      field: "season starting"},
    y: {
      aggregate: "sum", field: "count",
      stack: "normalize"
    },
    color: {field:"common name"}}},{ 
  width: 400, 
  height: 200,
  title:"A closer look at ...",
  mark: "area",
  transform: [{"filter":
      {field: "id", equal: {expr:"location"}}}
      ],
  encoding: {
    x: {
      field: "season starting"},
    y: {
      aggregate: "sum", field: "count",
      stack: "normalize"
    },
    color: {
      field:"common name", 
      type:"nominal",  
      scale: {domain: ["adelie penguin","gentoo penguin", "chinstrap penguin"], 
      scheme: "set3"}
    }
  }
  }]
};
vegaEmbed('#vis6', yourV6Spec);
