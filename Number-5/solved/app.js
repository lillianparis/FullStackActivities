const xScale = d3.scaleLinear()
.domain([-10, 10])
.range([0, 600]);

const linearScale = d3.scaleLinear()
.domain([-10, 0, 10])
.range(['red', '#ddd', 'blue']);

const myData = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10];

d3.select('#wrapper')
.selectAll('circle')
.data(myData)
.enter()
.append('circle')
.attr('r', 10)
.attr('cx', function (d) {
    return xScale(d);
})
.style('fill', function(d) {
    return linearScale(d)
});
