var data = [ 0, 2, 3, 5, 7.5, 9, 10 ];

var myScale = d3.scaleLinear()
	.domain([0, 10])
	.range([0, 600]);

d3.select('svg .inner')
	.selectAll('circle')
	.data(data)
	.join('circle')
	.attr('r', 3)
	.attr('cx', function(d) {
		return myScale(d);
	});

d3.select('svg .inner')
	.selectAll('text')
	.data(data)	
	.join('text')
	.attr('x', function(d) {
		return myScale(d);
	})
	.attr('y', -8)
	.text(function(d) {
		return d;
	});