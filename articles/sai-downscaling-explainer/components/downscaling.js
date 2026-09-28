import { Box, useThemeUI } from 'theme-ui'

const Label = ({
  x,
  y,
  size,
  lineHeight,
  rotate,
  color = 'background',
  children,
}) => {
  const { theme } = useThemeUI()
  const lines = Array.isArray(children) ? children : [children]

  return (
    <text
      x={x}
      y={y - ((lines.length - 1) * lineHeight) / 2}
      fill={theme.colors[color]}
      fontFamily={theme.fonts.heading}
      fontSize={size}
      letterSpacing='0.02em'
      textAnchor='middle'
      dominantBaseline='central'
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
    >
      {lines.map((line, i) => (
        <tspan key={line} x={x} dy={i === 0 ? 0 : lineHeight}>
          {line}
        </tspan>
      ))}
    </text>
  )
}

const NarrowLabel = (props) => <Label size={24} lineHeight={29} {...props} />
const WideLabel = (props) => <Label size={22} lineHeight={32} {...props} />
const InputLabel = (props) => <Label size={22} lineHeight={28} {...props} />

const Narrow = ({ sx }) => {
  const { theme } = useThemeUI()

  return (
    <Box
      as='svg'
      height='100%'
      width='100%'
      viewBox='0 -33 1034 784'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      sx={sx}
    >
      <rect
        x='180'
        y='231'
        width='200'
        height='70'
        fill={theme.colors.purple}
      />
      <rect
        x='1.5'
        y='-28'
        width='148'
        height='70'
        fill={theme.colors.purple}
      />
      <rect
        x='165'
        y='-28'
        width='148'
        height='70'
        fill={theme.colors.purple}
      />
      <rect
        x='328.5'
        y='-28'
        width='148'
        height='70'
        fill={theme.colors.purple}
      />
      <path
        d='M75.5 64V100H402.5V64M239 64V100'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <rect x='43' y='231' width='114' height='70' fill={theme.colors.purple} />
      <rect
        x='397'
        y='445'
        width='200'
        height='70'
        transform='rotate(90 397 445)'
        fill={theme.colors.purple}
      />
      <path
        d='M99.9393 432.061C100.525 432.646 101.475 432.646 102.061 432.061L111.607 422.515C112.192 421.929 112.192 420.979 111.607 420.393C111.021 419.808 110.071 419.808 109.485 420.393L101 428.879L92.5147 420.393C91.9289 419.808 90.9792 419.808 90.3934 420.393C89.8076 420.979 89.8076 421.929 90.3934 422.515L99.9393 432.061ZM99.5 328L99.5 431L102.5 431L102.5 328L99.5 328Z'
        transform='translate(-1 0)'
        fill={theme.colors.primary}
      />
      <path
        d='M300.061 546.061C300.646 545.475 300.646 544.525 300.061 543.939L290.515 534.393C289.929 533.808 288.979 533.808 288.393 534.393C287.808 534.979 287.808 535.929 288.393 536.515L296.879 545L288.393 553.485C287.808 554.071 287.808 555.021 288.393 555.607C288.979 556.192 289.929 556.192 290.515 555.607L300.061 546.061ZM251 546.5L299 546.5L299 543.5L251 543.5L251 546.5Z'
        fill={theme.colors.primary}
      />
      <path
        d='M1.5 747.5V140.5H476.5V747.5H1.5Z'
        stroke={theme.colors.primary}
        strokeWidth='1.5'
      />
      <rect
        x='58.5'
        y='559.5'
        width='117'
        height='67'
        fill={theme.colors.background}
        stroke={theme.colors.purple}
        strokeWidth='3'
      />
      <rect
        x='58.5'
        y='463.5'
        width='117'
        height='67'
        fill={theme.colors.background}
        stroke={theme.colors.purple}
        strokeWidth='3'
      />
      <rect
        x='962.5'
        y='649'
        width='200'
        height='70'
        transform='rotate(-90 962.5 649)'
        fill={theme.colors.purple}
      />
      <path
        d='M878 597L840 597'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <path
        d='M878 500L840 500'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <path
        d='M599.061 597.061C599.646 596.475 599.646 595.525 599.061 594.939L589.515 585.393C588.929 584.808 587.979 584.808 587.393 585.393C586.808 585.979 586.808 586.929 587.393 587.515L595.879 596L587.393 604.485C586.808 605.071 586.808 606.021 587.393 606.607C587.979 607.192 588.929 607.192 589.515 606.607L599.061 597.061ZM598 594.5L543 594.5V597.5L598 597.5V594.5Z'
        transform='translate(0 1)'
        fill={theme.colors.primary}
      />
      <path
        d='M929.061 550.061C929.646 549.475 929.646 548.525 929.061 547.939L919.515 538.393C918.929 537.808 917.979 537.808 917.393 538.393C916.808 538.979 916.808 539.929 917.393 540.515L925.879 549L917.393 557.485C916.808 558.071 916.808 559.021 917.393 559.607C917.979 560.192 918.929 560.192 919.515 559.607L929.061 550.061ZM928 547.5H880V550.5H928V547.5Z'
        fill={theme.colors.primary}
      />
      <path
        d='M599.061 501.061C599.646 500.475 599.646 499.525 599.061 498.939L589.515 489.393C588.929 488.808 587.979 488.808 587.393 489.393C586.808 489.979 586.808 490.929 587.393 491.515L595.879 500L587.393 508.485C586.808 509.071 586.808 510.021 587.393 510.607C587.979 511.192 588.929 511.192 589.515 510.607L599.061 501.061ZM598 498.5L543 498.5V501.5L598 501.5V498.5Z'
        fill={theme.colors.primary}
      />
      <rect
        x='637.5'
        y='369.5'
        width='157'
        height='67'
        fill={theme.colors.background}
        stroke={theme.colors.purple}
        strokeWidth='3'
      />
      <rect
        x='637.5'
        y='466.5'
        width='157'
        height='67'
        fill={theme.colors.background}
        stroke={theme.colors.purple}
        strokeWidth='3'
      />
      <rect
        x='637.5'
        y='563.5'
        width='157'
        height='67'
        fill={theme.colors.background}
        stroke={theme.colors.purple}
        strokeWidth='3'
      />
      <rect
        x='637.5'
        y='660.5'
        width='157'
        height='67'
        fill={theme.colors.background}
        stroke={theme.colors.purple}
        strokeWidth='3'
      />
      <path
        d='M132.939 432.061C133.525 432.646 134.475 432.646 135.061 432.061L144.607 422.515C145.192 421.929 145.192 420.979 144.607 420.393C144.021 419.808 143.071 419.808 142.485 420.393L134 428.879L125.515 420.393C124.929 419.808 123.979 419.808 123.393 420.393C122.808 420.979 122.808 421.929 123.393 422.515L132.939 432.061ZM278.5 328V377.117H132.5V431H135.5V380.117H281.5V328H278.5Z'
        fill={theme.colors.primary}
      />
      <rect
        x='71.5'
        y='128'
        width='57'
        height='29'
        fill={theme.colors.background}
      />
      <rect
        x='492'
        y='517'
        width='57'
        height='29'
        transform='rotate(90 492 517)'
        fill={theme.colors.background}
      />
      <path
        d='M97.9393 202.061C98.5251 202.646 99.4749 202.646 100.061 202.061L109.607 192.515C110.192 191.929 110.192 190.979 109.607 190.393C109.021 189.808 108.071 189.808 107.485 190.393L99 198.879L90.5147 190.393C89.9289 189.808 88.9792 189.808 88.3934 190.393C87.8076 190.979 87.8076 191.929 88.3934 192.515L97.9393 202.061ZM97.5 100L97.5 201L100.5 201L100.5 100L97.5 100Z'
        transform='translate(1 0)'
        fill={theme.colors.primary}
      />
      <path
        d='M206 497H251V593H206'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <path
        d='M599.061 695.061C599.646 694.475 599.646 693.525 599.061 692.939L589.515 683.393C588.929 682.808 587.979 682.808 587.393 683.393C586.808 683.979 586.808 684.929 587.393 685.515L595.879 694L587.393 702.485C586.808 703.071 586.808 704.021 587.393 704.607C587.979 705.192 588.929 705.192 589.515 704.607L599.061 695.061ZM543 694L541.5 694L541.5 695.5L543 695.5L543 694ZM543 403L543 401.5L541.5 401.5L541.5 403L543 403ZM599.061 404.061C599.646 403.475 599.646 402.525 599.061 401.939L589.515 392.393C588.929 391.808 587.979 391.808 587.393 392.393C586.808 392.979 586.808 393.929 587.393 394.515L595.879 403L587.393 411.485C586.808 412.071 586.808 413.021 587.393 413.607C587.979 414.192 588.929 414.192 589.515 413.607L599.061 404.061ZM598 692.5L543 692.5L543 695.5L598 695.5L598 692.5ZM544.5 694L544.5 403L541.5 403L541.5 694L544.5 694ZM543 404.5L598 404.5L598 401.5L543 401.5L543 404.5Z'
        fill={theme.colors.primary}
      />
      <path
        d='M837 403H878V694H837'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <path
        d='M419 545L542 545'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <InputLabel x={75.5} y={7}>
        {'HISTORICAL'}
        {'SCENARIO'}
      </InputLabel>
      <InputLabel x={239} y={7}>
        {'SSP2-4.5'}
        {'SCENARIO'}
      </InputLabel>
      <InputLabel x={402.5} y={7}>
        {'SAI'}
        {'SCENARIOS'}
      </InputLabel>
      <NarrowLabel x={371} y={171.5} color='primary'>
        DOWNSCALING
      </NarrowLabel>
      <NarrowLabel x={100} y={266}>
        GCMs
      </NarrowLabel>
      <NarrowLabel x={280} y={266}>
        OBSERVATIONS
      </NarrowLabel>
      <NarrowLabel x={117} y={497} color='purple'>
        BCSD
      </NarrowLabel>
      <NarrowLabel x={117} y={593} color='purple'>
        QDMSD
      </NarrowLabel>
      <NarrowLabel x={116.5} y={686} color='purple'>
        {'DOWNSCALING'}
        {'ALGORITHMS'}
      </NarrowLabel>
      <NarrowLabel x={362} y={545} rotate={-90}>
        {'DOWNSCALED'}
        {'DATASETS'}
      </NarrowLabel>
      <NarrowLabel x={716} y={403} color='purple'>
        CROPS
      </NarrowLabel>
      <NarrowLabel x={716} y={500} color='purple'>
        WATER
      </NarrowLabel>
      <NarrowLabel x={716} y={597} color='purple'>
        HEAT
      </NarrowLabel>
      <NarrowLabel x={716} y={694} color='purple'>
        + MORE
      </NarrowLabel>
      <NarrowLabel x={716} y={323} color='purple'>
        IMPACT MODELS
      </NarrowLabel>
      <NarrowLabel x={997.5} y={549} rotate={-90}>
        {'IMPACT + RISK'}
        {'ASSESSMENTS'}
      </NarrowLabel>
    </Box>
  )
}

const Wide = ({ sx }) => {
  const { theme } = useThemeUI()

  return (
    <Box
      as='svg'
      height='100%'
      width='100%'
      viewBox='30 112 1912 481'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      sx={sx}
    >
      <rect
        x='410'
        y='478'
        width='200'
        height='70'
        fill={theme.colors.purple}
      />
      <rect x='32' y='234' width='200' height='70' fill={theme.colors.purple} />
      <rect x='32' y='324' width='200' height='70' fill={theme.colors.purple} />
      <rect
        x='410'
        y='324'
        width='200'
        height='70'
        fill={theme.colors.purple}
      />
      <rect
        x='1007'
        y='324'
        width='200'
        height='70'
        fill={theme.colors.purple}
      />
      <rect
        x='1740'
        y='324'
        width='200'
        height='70'
        fill={theme.colors.purple}
      />
      <rect x='32' y='414' width='200' height='70' fill={theme.colors.purple} />
      <path
        d='M737.061 457.061C737.646 456.475 737.646 455.525 737.061 454.939L727.515 445.393C726.929 444.808 725.979 444.808 725.393 445.393C724.808 445.979 724.808 446.929 725.393 447.515L733.879 456L725.393 464.485C724.808 465.071 724.808 466.021 725.393 466.607C725.979 467.192 726.929 467.192 727.515 466.607L737.061 457.061ZM686 456L686 457.5L736 457.5L736 456L736 454.5L686 454.5L686 456Z'
        transform='translate(-6 -48)'
        fill={theme.colors.primary}
      />
      <path d='M630 359H680.5' stroke={theme.colors.primary} strokeWidth='3' />
      <path
        d='M810.939 462.939C811.525 462.354 812.475 462.354 813.061 462.939L822.607 472.485C823.192 473.071 823.192 474.021 822.607 474.607C822.021 475.192 821.071 475.192 820.485 474.607L812 466.121L803.515 474.607C802.929 475.192 801.979 475.192 801.393 474.607C800.808 474.021 800.808 473.071 801.393 472.485L810.939 462.939ZM812 513L813.5 513L813.5 514.5L812 514.5L812 513ZM631 511.5L812 511.5L812 514.5L631 514.5L631 511.5ZM810.5 513L810.5 464L813.5 464L813.5 513L810.5 513Z'
        transform='translate(-1 0)'
        fill={theme.colors.primary}
      />
      <path
        d='M737.061 264.061C737.646 263.475 737.646 262.525 737.061 261.939L727.515 252.393C726.929 251.808 725.979 251.808 725.393 252.393C724.808 252.979 724.808 253.929 725.393 254.515L733.879 263L725.393 271.485C724.808 272.071 724.808 273.021 725.393 273.607C725.979 274.192 726.929 274.192 727.515 273.607L737.061 264.061ZM686 263L686 264.5L736 264.5L736 263L736 261.5L686 261.5L686 263Z'
        transform='translate(-6 48)'
        fill={theme.colors.primary}
      />
      <path
        d='M1418.06 506.061C1418.65 505.475 1418.65 504.525 1418.06 503.939L1408.51 494.393C1407.93 493.808 1406.98 493.808 1406.39 494.393C1405.81 494.979 1405.81 495.929 1406.39 496.515L1414.88 505L1406.39 513.485C1405.81 514.071 1405.81 515.021 1406.39 515.607C1406.98 516.192 1407.93 516.192 1408.51 515.607L1418.06 506.061ZM1366 506.5L1417 506.5L1417 503.5L1366 503.5L1366 506.5Z'
        transform='translate(4 0)'
        fill={theme.colors.primary}
      />
      <path
        d='M1734.06 361.061C1734.65 360.475 1734.65 359.525 1734.06 358.939L1724.51 349.393C1723.93 348.808 1722.98 348.808 1722.39 349.393C1721.81 349.979 1721.81 350.929 1722.39 351.515L1730.88 360L1722.39 368.485C1721.81 369.071 1721.81 370.021 1722.39 370.607C1722.98 371.192 1723.93 371.192 1724.51 370.607L1734.06 361.061ZM1685 361.5L1733 361.5L1733 358.5L1685 358.5L1685 361.5Z'
        transform='translate(-14 -1)'
        fill={theme.colors.primary}
      />
      <path
        d='M988.061 360.061C988.646 359.475 988.646 358.525 988.061 357.939L978.515 348.393C977.929 347.808 976.979 347.808 976.393 348.393C975.808 348.979 975.808 349.929 976.393 350.515L984.879 359L976.393 367.485C975.808 368.071 975.808 369.021 976.393 369.607C976.979 370.192 977.929 370.192 978.515 369.607L988.061 360.061ZM935 360.5L987 360.5L987 357.5L935 357.5L935 360.5Z'
        transform='translate(-1 0)'
        fill={theme.colors.primary}
      />
      <path
        d='M1418.06 215.061C1418.65 214.475 1418.65 213.525 1418.06 212.939L1408.51 203.393C1407.93 202.808 1406.98 202.808 1406.39 203.393C1405.81 203.979 1405.81 204.929 1406.39 205.515L1414.88 214L1406.39 222.485C1405.81 223.071 1405.81 224.021 1406.39 224.607C1406.98 225.192 1407.93 225.192 1408.51 224.607L1418.06 215.061ZM1366 215.5L1417 215.5L1417 212.5L1366 212.5L1366 215.5Z'
        transform='translate(4 0)'
        fill={theme.colors.primary}
      />
      <path
        d='M1418.06 312.061C1418.65 311.475 1418.65 310.525 1418.06 309.939L1408.51 300.393C1407.93 299.808 1406.98 299.808 1406.39 300.393C1405.81 300.979 1405.81 301.929 1406.39 302.515L1414.88 311L1406.39 319.485C1405.81 320.071 1405.81 321.021 1406.39 321.607C1406.98 322.192 1407.93 322.192 1408.51 321.607L1418.06 312.061ZM1366 312.5L1417 312.5L1417 309.5L1366 309.5L1366 312.5Z'
        transform='translate(4 0)'
        fill={theme.colors.primary}
      />
      <path
        d='M1418.06 408.061C1418.65 407.475 1418.65 406.525 1418.06 405.939L1408.51 396.393C1407.93 395.808 1406.98 395.808 1406.39 396.393C1405.81 396.979 1405.81 397.929 1406.39 398.515L1414.88 407L1406.39 415.485C1405.81 416.071 1405.81 417.021 1406.39 417.607C1406.98 418.192 1407.93 418.192 1408.51 417.607L1418.06 408.061ZM1366 408.5L1417 408.5L1417 405.5L1366 405.5L1366 408.5Z'
        transform='translate(4 1)'
        fill={theme.colors.primary}
      />
      <path
        d='M1620 214L1671 214'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <path
        d='M1620 311L1671 311'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <path
        d='M886 311L937 311'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <path
        d='M1620 408L1671 408'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <path
        d='M1620 505L1671 505'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <path
        d='M886 408L937 408'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <path
        d='M252 269H302V449H252M252 359H302'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <rect
        x='346.5'
        y='160.5'
        width='916'
        height='429'
        stroke={theme.colors.primary}
        strokeWidth='1.5'
      />
      <rect
        x='332'
        y='330.5'
        width='29'
        height='57'
        fill={theme.colors.background}
      />
      <rect
        x='1248'
        y='330.5'
        width='29'
        height='57'
        fill={theme.colors.background}
      />
      <path
        d='M386.09 358.561C386.676 357.975 386.676 357.025 386.09 356.439L376.544 346.893C375.958 346.308 375.008 346.308 374.423 346.893C373.837 347.479 373.837 348.429 374.423 349.015L382.908 357.5L374.423 365.985C373.837 366.571 373.837 367.521 374.423 368.107C375.008 368.692 375.958 368.692 376.544 368.107L386.09 358.561ZM298 357.5V359H385.029V357.5V356H298V357.5Z'
        transform='translate(4 1.5)'
        fill={theme.colors.primary}
      />
      <path
        d='M1231 359L1370 359'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <rect
        x='1443.5'
        y='180.5'
        width='157'
        height='67'
        fill={theme.colors.background}
        stroke={theme.colors.purple}
        strokeWidth='3'
      />
      <rect
        x='1443.5'
        y='277.5'
        width='157'
        height='67'
        fill={theme.colors.background}
        stroke={theme.colors.purple}
        strokeWidth='3'
      />
      <rect
        x='1443.5'
        y='374.5'
        width='157'
        height='67'
        fill={theme.colors.background}
        stroke={theme.colors.purple}
        strokeWidth='3'
      />
      <rect
        x='1443.5'
        y='471.5'
        width='157'
        height='67'
        fill={theme.colors.background}
        stroke={theme.colors.purple}
        strokeWidth='3'
      />
      <rect
        x='752.5'
        y='374.5'
        width='117'
        height='67'
        fill={theme.colors.background}
        stroke={theme.colors.purple}
        strokeWidth='3'
      />
      <rect
        x='752.5'
        y='277.5'
        width='117'
        height='67'
        fill={theme.colors.background}
        stroke={theme.colors.purple}
        strokeWidth='3'
      />
      <line
        x1='1371.5'
        y1='212.5'
        x2='1371.5'
        y2='506.5'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <line
        x1='680.5'
        y1='309.5'
        x2='680.5'
        y2='409.5'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <line
        x1='1669.5'
        y1='212.5'
        x2='1669.5'
        y2='506.5'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <line
        x1='935.5'
        y1='309.5'
        x2='935.5'
        y2='409.5'
        stroke={theme.colors.primary}
        strokeWidth='3'
      />
      <WideLabel x={132} y={269}>
        {'HISTORICAL'}
        {'SCENARIO'}
      </WideLabel>
      <WideLabel x={132} y={359}>
        {'SSP2-4.5'}
        {'SCENARIO'}
      </WideLabel>
      <WideLabel x={132} y={449}>
        {'SAI'}
        {'SCENARIOS'}
      </WideLabel>
      <WideLabel x={510} y={359}>
        GCM DATASETS
      </WideLabel>
      <WideLabel x={510} y={513}>
        OBSERVATIONS
      </WideLabel>
      <WideLabel x={811} y={228.5} color='purple'>
        {'DOWNSCALING'}
        {'ALGORITHMS'}
      </WideLabel>
      <WideLabel x={811} y={311} color='purple'>
        BCSD
      </WideLabel>
      <WideLabel x={811} y={408} color='purple'>
        QDMSD
      </WideLabel>
      <WideLabel x={1107} y={359}>
        {'DOWNSCALED'}
        {'DATASETS'}
      </WideLabel>
      <WideLabel x={1148} y={564.5} color='primary'>
        DOWNSCALING
      </WideLabel>
      <WideLabel x={1522} y={140} color='purple'>
        IMPACT MODELS
      </WideLabel>
      <WideLabel x={1522} y={214} color='purple'>
        CROPS
      </WideLabel>
      <WideLabel x={1522} y={311} color='purple'>
        WATER
      </WideLabel>
      <WideLabel x={1522} y={408} color='purple'>
        HEAT
      </WideLabel>
      <WideLabel x={1522} y={505} color='purple'>
        + MORE
      </WideLabel>
      <WideLabel x={1840} y={359}>
        {'IMPACT AND RISK'}
        {'ASSESSMENTS'}
      </WideLabel>
    </Box>
  )
}

const Downscaling = () => {
  return (
    <>
      <Narrow sx={{ display: ['initial', 'initial', 'initial', 'none'] }} />
      <Wide sx={{ display: ['none', 'none', 'none', 'initial'] }} />
    </>
  )
}

export default Downscaling
