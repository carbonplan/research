const Points = ({ data, color, r, x, y }) => {
  return data.map((d, i) => {
    return <circle key={i} cx={x(d) + '%'} cy={y} r={r} fill={color} />
  })
}

export default Points
