import { select, selectAll } from 'd3-selection'
import { scaleLinear } from 'd3-scale'
import { line } from 'd3-shape'
import { drag } from 'd3-drag'

const CostCurve = (container, theme, value, setValue, name, scales, fixed) => {
  let svg

  const margin = { top: 0, right: 50, bottom: 40, left: 10 }
  const width = container.current.offsetWidth - margin.left - margin.right
  const height = container.current.offsetHeight - margin.top - margin.bottom

  select(container.current).selectAll('*').remove()

  svg = select(container.current)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)

  const x = scaleLinear().domain(scales.x).range([0, width])
  const y = scaleLinear().domain(scales.y).range([height, 0])

  let points, pathPoints
  if (fixed) {
    const v = value[0][1]
    points = [[50, v]]
    pathPoints = [
      [0, v],
      [100, v],
    ]
    setValue([
      [0, v],
      [20, v],
      [40, v],
      [60, v],
      [80, v],
      [100, v],
    ])
  } else {
    points = value
    pathPoints = points
  }
  let className = 'costCurveKnobs' + '-' + name.replace(' ', '-')

  const delta = (scales.y[1] - scales.y[0]) / 5
  let costIntervals = Array(4)
    .fill(0)
    .map((_, i) => {
      return delta * (i + 1)
    })

  let costIntervalsForPath = costIntervals
    .map((d) => {
      return [
        { x: width + 10, y: y(d) + 10, defined: true },
        { x: 10, y: y(d) + 10, defined: true },
        { x: width + 10, y: y(d) + 10, defined: false },
      ]
    })
    .flat()

  var createLine = line()
    .x(function (d) {
      return x(d[0])
    })
    .y(function (d) {
      return y(d[1])
    })

  let dragger = drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended)

  svg
    .append('rect')
    .attr('fill', theme.colors.muted)
    .attr('pointer-events', 'all')
    .attr('stroke-width', 0)
    .attr('width', width)
    .attr('height', height)
    .attr('transform', `translate(${10},${10})`)

  svg
    .append('path')
    .datum(costIntervalsForPath)
    .attr('fill', 'none')
    .attr('stroke', theme.colors.background)
    .attr('stroke-width', 2)
    .attr('stroke-opacity', 1)
    .attr(
      'd',
      line()
        .x((d) => d.x)
        .y((d) => d.y)
        .defined((d) => d.defined)
    )

  let focus = svg.append('g').attr('transform', `translate(${10},${10})`)

  let path = focus
    .append('path')
    .datum(pathPoints)
    .attr('fill', 'none')
    .attr('stroke', theme.colors.pink)
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 2)
    .attr('d', createLine)

  let circles

  if (fixed) {
    circles = focus.append('circle').datum(points[0])
  } else {
    circles = focus
      .selectAll('.' + className)
      .data(points)
      .enter()
      .append('circle')
  }

  circles
    .attr('r', 8.0)
    .attr('cx', function (d) {
      return x(d[0])
    })
    .attr('cy', function (d) {
      return y(d[1])
    })
    .attr('class', className)
    .style('cursor', 'pointer')
    .style('fill', theme.colors.pink)

  circles.call(dragger)

  svg
    .append('text')
    .attr('transform', `translate(${9},${height + 30})`)
    .style('text-anchor', 'left')
    .style('fill', theme.colors.muted)
    .style('font-size', 16)
    .style('font-family', theme.fonts.mono)
    .text('0 years')

  svg
    .append('text')
    .attr('transform', `translate(${width - 69},${height + 30})`)
    .style('text-anchor', 'right')
    .style('fill', theme.colors.muted)
    .style('font-size', 16)
    .style('font-family', theme.fonts.mono)
    .text('100 years')

  svg
    .selectAll('.axisLabels')
    .data(costIntervals)
    .enter()
    .append('text')
    .attr('transform', (d) => `translate(${width + 25},${0 + y(d) + 16})`)
    .style('text-anchor', 'left')
    .style('fill', theme.colors.muted)
    .style('font-size', 16)
    .style('font-family', theme.fonts.mono)
    .text((d) => `$${d}`)

  let current = svg
    .append('text')
    .style('text-anchor', 'center')
    .style('fill', theme.colors.pink)
    .style('font-size', 16)
    .style('font-family', theme.fonts.mono)
    .style('opacity', 0)
    .style('transition', '0.15s')
    .text('$100')

  function updateValues() {
    if (fixed) {
      let v = selectAll('.' + className).data()[0][1]
      setValue([
        [0, v],
        [20, v],
        [40, v],
        [60, v],
        [80, v],
        [100, v],
      ])
    } else {
      let v = selectAll('.' + className)
        .data()
        .slice(0, 6)
      setValue(v)
    }
  }

  function dragstarted(event, d) {
    current
      .attr('x', x(d[0]))
      .attr('y', y(y.invert(event.y)) - 10)
      .text(`$${d[1].toFixed(0)}`)
    current.style('opacity', 1)
  }

  function dragged(event, d) {
    const eventY = Math.min(Math.max(event.y, 0), height)
    d[1] = y.invert(eventY)
    if (fixed) {
      path.datum([
        [0, d[1]],
        [100, d[1]],
      ])
      circles.datum([50, d[1]])
    }
    current
      .attr('x', x(d[0]))
      .attr('y', y(d[1]) - 10)
      .text(`$${d[1].toFixed(0)}`)
    select(this).attr('cx', x(d[0])).attr('cy', y(d[1]))
    focus.select('path').attr('d', createLine)
    updateValues()
  }

  function dragended(d) {
    updateValues()
    current.style('opacity', 0)
  }

  const update = (v) => {
    if (fixed) {
      points = [[50, Math.min(v, scales.y[1])]]
      pathPoints = [
        [0, Math.min(v, scales.y[1])],
        [100, Math.min(v, scales.y[1])],
      ]
    }
    path.datum(pathPoints).attr('d', createLine)
    circles
      .datum(points[0])
      .attr('cx', function (d) {
        return x(d[0])
      })
      .attr('cy', function (d) {
        return y(d[1])
      })
  }

  return { update: update }
}

export default CostCurve
