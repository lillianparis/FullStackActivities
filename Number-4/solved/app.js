const width = 500;
const height = 500;

//Create SVG element
const svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);


svg.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 200)
        .attr("height", 100)

d3.selectAll("rect").style('fill', 'blue')