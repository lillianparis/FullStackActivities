var width = 300;
var height = 300;

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

//Append circle 
svg.append("circle")
   .attr("cx", 250)
   .attr("cy", 50)
   .attr("r", 50)