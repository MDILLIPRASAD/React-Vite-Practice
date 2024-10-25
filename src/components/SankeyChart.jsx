import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { sankey, sankeyCenter } from 'd3-sankey';

const SankeyChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const { width, height } = svg.node().getBoundingClientRect();

    // Define margins and dimensions
    const margin = { top: 20, right: 20, bottom: 30, left: 20 };
    const innerWidth = (width - margin.left - margin.right) * 0.8; // 80% width
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous content
    svg.selectAll('*').remove();

    // Define data
    const data = {
      nodes: [
        { name: 'Applications', color: '#8d8d8d' },
        { name: 'Rejected', color: '#1f64a4' },
        { name: 'Interviews', color: '#f0a30a' },
        { name: 'No Answer', color: '#e03e2d' },
        { name: 'Offers', color: '#93c90e' },
        { name: 'No Offer', color: '#f27c3a' },
        { name: 'Accepted', color: '#64a74b' },
        { name: 'Declined', color: '#f2cb41' },
      ],
      links: [
        { source: 0, target: 1, value: 8, color: '#1f64a4' },
        { source: 0, target: 2, value: 4, color: '#f0a30a' },
        { source: 0, target: 3, value: 2, color: '#e03e2d' },
        { source: 2, target: 4, value: 2, color: '#93c90e' },
        { source: 2, target: 5, value: 1, color: '#f27c3a' },
        { source: 4, target: 6, value: 1, color: '#64a74b' },
        { source: 4, target: 7, value: 1, color: '#f2cb41' },
      ],
    };

    // Initialize Sankey layout
    const sankeyGenerator = sankey()
      .nodeAlign(sankeyCenter)
      .nodeWidth(15)
      .nodePadding(10)
      .extent([[margin.left, margin.top], [innerWidth + margin.left, innerHeight + margin.top]]);

    // Generate nodes and links
    const { nodes, links } = sankeyGenerator(data);

    // Create SVG group element and apply margin transformations
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Draw curved links with more curvature
    g.append('g')
      .attr('fill', 'none')
      .selectAll('path')
      .data(links)
      .enter()
      .append('path')
      .attr('d', d => {
        const curvature = 0.5; // Adjust curvature for visual appeal
        const x0 = d.source.x1;
        const x1 = d.target.x0;
        const y0 = (d.source.y0 + d.source.y1) / 2;
        const y1 = (d.target.y0 + d.target.y1) / 2;

        const path = d3.line()
          .curve(d3.curveBasis)
          .x(d => d[0])
          .y(d => d[1]);

        return path([
          [x0, y0],
          [x0 + (x1 - x0) * curvature, y0],
          [x0 + (x1 - x0) * curvature, y1],
          [x1, y1]
        ]);
      })
      .attr('stroke', d => d.color)
      .attr('stroke-width', d => Math.max(1, d.width))
      .attr('stroke-opacity', 0.7) // Increased opacity for better visibility
      .on('click', (event, d) => {
        alert(`Link clicked: ${d.source.name} → ${d.target.name}`);
      })
      .append('title')
      .text(d => `${d.source.name} → ${d.target.name}\n${d.value}`);

    // Draw nodes
    g.append('g')
      .selectAll('rect')
      .data(nodes)
      .enter()
      .append('rect')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('height', d => d.y1 - d.y0)
      .attr('width', d => d.x1 - d.x0)
      .attr('fill', d => d.color)
      .on('click', (event, d) => {
        alert(`Node clicked: ${d.name}`);
      })
      .append('title')
      .text(d => `${d.name}\n${d.value}`);

    // Add node labels
    g.append('g')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('x', d => (d.x0 + d.x1) / 2)
      .attr('y', d => (d.y0 + d.y1) / 2)
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .style('font-size', '12px')
      .style('fill', '#000')
      .text(d => d.name)
      .attr('dy', '0.35em'); // Vertically align text in the middle

  }, []);

  return (
    <div className='flex justify-center'>
      <svg ref={svgRef} width="80%" height="500" />
    </div>
  );
};

export default SankeyChart;
