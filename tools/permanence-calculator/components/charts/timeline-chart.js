import { select } from 'd3-selection'
import { scaleLinear } from 'd3-scale'
import { line } from 'd3-shape'
import { mix } from 'polished'

const TimelineChart = (container, theme, data) => {
  let svg
  data = data ? data : { discountFunction: [], switchingTime: [] }

  const { fonts, rawColors: colors } = theme

  const margin = { top: 20, right: 25, bottom: 30, left: 2 }
  const width = container.current.offsetWidth - margin.left - margin.right
  const height = container.current.offsetHeight - margin.top - margin.bottom

  select(container.current).selectAll('*').remove()

  svg = select(container.current)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  const x = scaleLinear().domain([0, 100]).range([0, width])
  const y = scaleLinear()
    .domain([0, 1])
    .range([height / 2, 0])

  const createLine = line()
    .x(function (d) {
      return x(d.x)
    })
    .y(function (d) {
      return y(d.y)
    })

  svg
    .append('rect')
    .attr('fill', colors.muted)
    .attr('stroke-width', 0)
    .attr('width', width)
    .attr('height', height / 2 - 15)
    .attr('transform', `translate(${0},${height / 2 + 15})`)

  let switchingRect = svg
    .append('rect')
    .attr('fill', mix(0.4, colors.pink, colors.background))
    .attr('stroke-width', 0)
    .attr('width', 0)
    .attr('height', height / 2 - 15)
    .attr('transform', `translate(${0},${height / 2 + 15})`)
    .style('opacity', 1)
    .style('transition', 'opacity 0.15s')

  let switchingTimeLabel = svg
    .append('text')
    .style('text-anchor', 'left')
    .style('opacity', 0)
    .style('fill', colors.pink)
    .style('font-size', 16)
    .style('font-family', fonts.body)
    .style('transition', 'opacity 0.15s')
    .text('SWITCHING TIME')

  svg
    .append('path')
    .datum([])
    .attr('class', 'durationIntervals')
    .attr('fill', 'none')
    .attr('stroke', colors.background)
    .attr('stroke-width', 2)
    .attr('stroke-opacity', 1)

  svg
    .append('line')
    .attr('stroke', colors.primary)
    .attr('stroke-width', 1)
    .attr('stroke-opacity', 1)
    .attr('x1', 0)
    .attr('x2', width)
    .attr('y1', height / 2)
    .attr('y2', height / 2)

  let discountFunctionLabel = svg
    .append('text')
    .attr('transform', `translate(${width - 144},${3})`)
    .style('text-anchor', 'left')
    .style('fill', colors.primary)
    .style('font-size', 16)
    .style('font-family', fonts.body)
    .style('transition', 'opacity 0.15s')
    .text('DISCOUNT FACTOR')

  svg
    .append('text')
    .attr('transform', `translate(${0},${height + 20})`)
    .style('text-anchor', 'left')
    .style('fill', colors.muted)
    .style('font-size', 16)
    .style('font-family', fonts.mono)
    .text('0 years')

  svg
    .append('text')
    .attr('transform', `translate(${width - 80},${height + 20})`)
    .style('text-anchor', 'right')
    .style('fill', colors.muted)
    .style('font-size', 16)
    .style('font-family', fonts.mono)
    .text('100 years')

  svg
    .append('path')
    .datum([])
    .attr('class', 'discountFunction')
    .attr('fill', 'none')
    .attr('stroke', colors.primary)
    .attr('stroke-width', 3)

  let switchingTimeLine = svg
    .append('line')
    .datum([])
    .attr('class', 'switchingTime')
    .attr('fill', 'none')
    .attr('stroke', colors.pink)
    .attr('stroke-width', 5)
    .attr('stroke-opacity', 1)

  svg
    .append('line')
    .attr('stroke', colors.primary)
    .attr('stroke-width', 1)
    .attr('stroke-opacity', 1)
    .attr('x1', width + 10)
    .attr('x2', width + 10)
    .attr('y1', 0)
    .attr('y2', height / 2)

  svg
    .append('text')
    .attr('transform', `translate(${width + 17},${0 + 3})`)
    .style('text-anchor', 'left')
    .style('fill', colors.primary)
    .style('font-size', 16)
    .style('font-family', fonts.mono)
    .text('1')

  svg
    .append('text')
    .attr('transform', `translate(${width + 17},${height / 2 + 3})`)
    .style('text-anchor', 'left')
    .style('fill', colors.primary)
    .style('font-size', 16)
    .style('font-family', fonts.mono)
    .text('0')

  const update = (data) => {
    svg
      .selectAll('.discountFunction')
      .datum(data.discountFunction)
      .attr('d', createLine)

    svg
      .selectAll('.switchingTime')
      .datum([data.switchingTime])
      .attr('x1', (d) => x(d))
      .attr('x2', (d) => x(d))
      .attr('y1', height)
      .attr('y2', 0)

    if (data.switchingTimeActive) {
      switchingTimeLine.style('opacity', 1)
      if (x(data.switchingTime) > 70 && x(data.switchingTime) < width - 210) {
        switchingTimeLabel
          .attr('x', x(data.switchingTime) - 5)
          .attr('y', height + 20)
          .style('opacity', 1)
      } else {
        switchingTimeLabel.style('opacity', 0)
      }
    } else {
      switchingTimeLine.style('opacity', 0)
      switchingTimeLabel.style('opacity', 0)
    }

    if (data.switchingTimeActive) {
      switchingRect
        .attr('width', width - x(data.switchingTime))
        .attr(
          'transform',
          `translate(${x(data.switchingTime)},${height / 2 + 15})`
        )
        .style('opacity', 1)
    } else {
      switchingRect.style('opacity', 0)
    }

    if (data.discountFunction[data.discountFunction.length - 1].y > 0.8) {
      discountFunctionLabel.style('opacity', 0)
    } else {
      discountFunctionLabel.style('opacity', 1)
    }

    const durationIntervals = data.durationIntervals
      .map((d) => {
        return [
          { x: x(d), y: height, defined: true },
          { x: x(d), y: 0, defined: true },
          { x: x(d), y: height, defined: false },
        ]
      })
      .flat()

    svg
      .selectAll('.durationIntervals')
      .datum(durationIntervals)
      .attr(
        'd',
        line()
          .x((d) => d.x)
          .y((d) => d.y)
          .defined((d) => d.defined)
      )
  }

  return { update: update }
}

export default TimelineChart
