var r=require("request");
var txUrl = "http://192.168.0.113:7474/db/data/movie/commit";
function cypher(query,params,cb) {
  r.post({uri:txUrl,
          json:{statements:[{statement:query,parameters:params}]}},
         function(err,res) { cb(err,res.body)})
}
