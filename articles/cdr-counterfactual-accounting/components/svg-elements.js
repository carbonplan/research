import React from 'react'
import { Box, useThemeUI } from 'theme-ui'

export const Emissions = ({ isProject, sx }) => {
  const { theme } = useThemeUI()
  return (
    <>
      {isProject ? (
        <Box as='svg' sx={{ ...sx }} viewBox='0 0 128 117' fill='none'>
          <path
            d='M1 52.3298L17.7647 43.3643L39 52.3298V63.3643H6.58824L1 52.3298Z'
            fill={theme?.rawColors?.purple}
            stroke={theme?.rawColors?.purple}
          />
          <path
            d='M70.7338 63.3643H50.6429L46 46.5407L48.3636 37.3643H72L70.7338 63.3643Z'
            fill={theme?.rawColors?.purple}
            stroke={theme?.rawColors?.purple}
          />
          <path
            d='M16.5 32.2427L38.2487 46.1313L41.5 32.2427L32.5 20.095L16.5 32.2427Z'
            fill={theme?.rawColors?.purple}
            stroke={theme?.rawColors?.purple}
          />
          <path
            d='M64.4997 14.8643L40.5 17.0955L49.7595 29.2463L72.0001 29.2464L64.4997 14.8643Z'
            fill={theme?.rawColors?.purple}
            stroke={theme?.rawColors?.purple}
          />
          <path
            d='M3 86.3312V63.6242L72.413 53.8926V50H85.2174V86.3312H90.6087V61.6779H114.196L127 86.3312H90.6087H85.2174H3Z'
            fill={theme?.rawColors?.background}
          />
          <path
            d='M127 86.3312V106.443H117.565M127 86.3312H90.6087M127 86.3312L114.196 61.6779H90.6087V86.3312M3 86.3312V63.6242L72.413 53.8926V50H85.2174V86.3312M3 86.3312V106.443H14.4565M3 86.3312H85.2174M85.2174 86.3312H90.6087M90.6087 86.3312V106.443M90.6087 106.443H33.3261M90.6087 106.443H98.6957'
            stroke={theme?.rawColors?.purple}
            strokeWidth='2'
          />
          <path
            d='M97.3486 79.8405V68.1626H109.479L115.544 79.8405H97.3486Z'
            stroke={theme?.rawColors?.purple}
            strokeWidth='2'
          />
          <path
            d='M33.0006 107.094C33.0006 111.881 28.9587 115.826 23.8919 115.826C18.8251 115.826 14.7832 111.881 14.7832 107.094C14.7832 102.307 18.8251 98.3625 23.8919 98.3625C28.9587 98.3625 33.0006 102.307 33.0006 107.094Z'
            stroke={theme?.rawColors?.purple}
            strokeWidth='2'
          />
          <path
            d='M117.24 107.093C117.24 111.88 113.198 115.825 108.131 115.825C103.064 115.825 99.0225 111.88 99.0225 107.093C99.0225 102.307 103.064 98.3618 108.131 98.3618C113.198 98.3618 117.24 102.307 117.24 107.093Z'
            stroke={theme?.rawColors?.purple}
            strokeWidth='2'
          />
          <path
            d='M102.707 22.2929C102.317 21.9024 101.683 21.9024 101.293 22.2929L94.9289 28.6569C94.5384 29.0474 94.5384 29.6805 94.9289 30.0711C95.3195 30.4616 95.9526 30.4616 96.3431 30.0711L102 24.4142L107.657 30.0711C108.047 30.4616 108.681 30.4616 109.071 30.0711C109.462 29.6805 109.462 29.0474 109.071 28.6569L102.707 22.2929ZM103 54.0645V23H101V54.0645H103Z'
            fill={theme?.rawColors?.purple}
          />
          <circle
            strokeWidth={2}
            cx='108.01'
            cy='5.00969'
            r='3.23652'
            transform='rotate(-63.5516 108.01 5.00969)'
            stroke={theme?.rawColors?.purple}
          />
          <circle
            strokeWidth={2}
            cx='93.0097'
            cy='12.0097'
            r='3.23652'
            transform='rotate(-63.5516 93.0097 12.0097)'
            stroke={theme?.rawColors?.purple}
          />
        </Box>
      ) : (
        <Box as='svg' sx={{ ...sx }} viewBox='0 0 128 126' fill='none'>
          <path
            d='M1 61.3295L17.7647 52.364L39 61.3295V72.364H6.58824L1 61.3295Z'
            fill={theme?.rawColors?.grey}
            stroke={theme?.rawColors?.grey}
          />
          <path
            d='M70.7338 72.364H50.6429L46 55.5405L48.3636 46.364H72L70.7338 72.364Z'
            fill={theme?.rawColors?.grey}
            stroke={theme?.rawColors?.grey}
          />
          <path
            d='M16.5 41.2427L38.2487 55.1313L41.5 41.2427L32.5 29.095L16.5 41.2427Z'
            fill={theme?.rawColors?.grey}
            stroke={theme?.rawColors?.grey}
          />
          <path
            d='M3 95.3312V72.6242L72.413 62.8926V59H85.2174V95.3312H90.6087V70.6779H114.196L127 95.3312H90.6087H85.2174H3Z'
            fill={theme?.rawColors?.background}
          />
          <path
            d='M127 95.3312V115.443H117.565M127 95.3312H90.6087M127 95.3312L114.196 70.6779H90.6087V95.3312M3 95.3312V72.6242L72.413 62.8926V59H85.2174V95.3312M3 95.3312V115.443H14.4565M3 95.3312H85.2174M85.2174 95.3312H90.6087M90.6087 95.3312V115.443M90.6087 115.443H33.3261M90.6087 115.443H98.6957'
            stroke={theme?.rawColors?.grey}
            strokeWidth='2'
          />
          <path
            d='M97.3486 88.8405V77.1626H109.479L115.544 88.8405H97.3486Z'
            stroke={theme?.rawColors?.grey}
            strokeWidth='2'
          />
          <path
            d='M33.0006 116.094C33.0006 120.881 28.9587 124.826 23.8919 124.826C18.8251 124.826 14.7832 120.881 14.7832 116.094C14.7832 111.307 18.8251 107.363 23.8919 107.363C28.9587 107.363 33.0006 111.307 33.0006 116.094Z'
            stroke={theme?.rawColors?.grey}
            strokeWidth='2'
          />
          <path
            d='M117.24 116.093C117.24 120.88 113.198 124.825 108.131 124.825C103.064 124.825 99.0225 120.88 99.0225 116.093C99.0225 111.307 103.064 107.362 108.131 107.362C113.198 107.362 117.24 111.307 117.24 116.093Z'
            stroke={theme?.rawColors?.grey}
            strokeWidth='2'
          />
          <circle
            strokeWidth={2}
            cx='109.01'
            cy='19.6908'
            r='3.23652'
            transform='rotate(-63.5516 109.01 19.6908)'
            stroke={theme?.rawColors?.grey}
          />
          <circle
            strokeWidth={2}
            cx='109.01'
            cy='5.00969'
            r='3.23652'
            transform='rotate(-63.5516 109.01 5.00969)'
            stroke={theme?.rawColors?.grey}
          />
          <circle
            strokeWidth={2}
            cx='95.0097'
            cy='15.0097'
            r='3.23652'
            transform='rotate(-63.5516 95.0097 15.0097)'
            stroke={theme?.rawColors?.grey}
          />
          <path
            d='M102.707 31.2929C102.317 30.9024 101.683 30.9024 101.293 31.2929L94.9289 37.6569C94.5384 38.0474 94.5384 38.6805 94.9289 39.0711C95.3195 39.4616 95.9526 39.4616 96.3431 39.0711L102 33.4142L107.657 39.0711C108.047 39.4616 108.681 39.4616 109.071 39.0711C109.462 38.6805 109.462 38.0474 109.071 37.6569L102.707 31.2929ZM103 63.0645V32H101V63.0645H103Z'
            fill={theme?.rawColors?.grey}
          />
        </Box>
      )}
    </>
  )
}

export const Removals = ({ isProject, sx }) => {
  const { theme } = useThemeUI()

  return (
    <>
      {isProject ? (
        <Box as='svg' sx={{ mt: 2, ...sx }} viewBox='0 0 128 118' fill='none'>
          <path
            d='M25 105.914L41.7647 96.9065L63 105.914V117H30.5882L25 105.914Z'
            fill={theme?.rawColors?.purple}
            stroke={theme?.rawColors?.purple}
          />
          <path
            d='M94.7338 117H74.6429L70 100.098L72.3636 90.8784H96L94.7338 117Z'
            fill={theme?.rawColors?.purple}
            stroke={theme?.rawColors?.purple}
          />
          <path
            d='M40.5 85.733L62.2487 99.6864L65.5 85.733L56.5 73.5286L40.5 85.733Z'
            fill={theme?.rawColors?.purple}
            stroke={theme?.rawColors?.purple}
          />
          <path
            d='M88.4999 68.2734L64.5002 70.5151L73.7597 82.7226L96.0002 82.7227L88.4999 68.2734Z'
            fill={theme?.rawColors?.purple}
            stroke={theme?.rawColors?.purple}
          />
          <g opacity='0.6'>
            <path
              d='M1 117V102.409C1 100.341 1.64113 98.3239 2.83511 96.6354L6.30525 91.728'
              stroke={theme?.rawColors?.purple}
            />
            <path
              d='M10.2842 117V102.409C10.2842 100.341 10.9253 98.3239 12.1193 96.6354L15.5894 91.728'
              stroke={theme?.rawColors?.purple}
            />
            <path
              d='M19.5684 117V102.409C19.5684 100.341 20.2095 98.3239 21.4035 96.6354L24.8736 91.728'
              stroke={theme?.rawColors?.purple}
            />
            <path
              d='M28.8525 117V102.409C28.8525 100.341 29.4937 98.3239 30.6876 96.6354L34.1578 91.728'
              stroke={theme?.rawColors?.purple}
            />
            <path
              d='M38.1377 117V102.409C38.1377 100.341 38.7788 98.3239 39.9728 96.6354L43.4429 91.728'
              stroke={theme?.rawColors?.purple}
            />
            <path
              d='M47.4209 117V102.409C47.4209 100.341 48.062 98.3239 49.256 96.6354L52.7261 91.728'
              stroke={theme?.rawColors?.purple}
            />
            <path
              d='M56.7051 117V102.409C56.7051 100.341 57.3462 98.3239 58.5402 96.6354L62.0103 91.728'
              stroke={theme?.rawColors?.purple}
            />
            <path
              d='M65.9893 117V102.409C65.9893 100.341 66.6304 98.3239 67.8244 96.6354L71.2945 91.728'
              stroke={theme?.rawColors?.purple}
            />
            <path
              d='M75.2734 117V102.409C75.2734 100.341 75.9146 98.3239 77.1085 96.6354L80.5787 91.728'
              stroke={theme?.rawColors?.purple}
            />
            <path
              d='M84.5576 117V102.409C84.5576 100.341 85.1988 98.3239 86.3927 96.6354L89.8629 91.728'
              stroke={theme?.rawColors?.purple}
            />
            <path
              d='M93.8418 117V102.409C93.8418 100.341 94.4829 98.3239 95.6769 96.6354L99.147 91.728'
              stroke={theme?.rawColors?.purple}
            />
            <path
              d='M103.126 117V102.409C103.126 100.341 103.767 98.3239 104.961 96.6354L108.431 91.728'
              stroke={theme?.rawColors?.purple}
            />
            <path
              d='M112.411 117V102.409C112.411 100.341 113.052 98.3239 114.246 96.6354L117.716 91.728'
              stroke={theme?.rawColors?.purple}
            />
            <path
              d='M121.694 117V102.409C121.694 100.341 122.335 98.3239 123.529 96.6354L127 91.728'
              stroke={theme?.rawColors?.purple}
            />
          </g>
          <path
            d='M65.2929 63.7713C65.6834 64.1618 66.3166 64.1618 66.7071 63.7713L73.0711 57.4074C73.4616 57.0168 73.4616 56.3837 73.0711 55.9931C72.6805 55.6026 72.0474 55.6026 71.6569 55.9931L66 61.65L60.3431 55.9931C59.9526 55.6026 59.3195 55.6026 58.9289 55.9931C58.5384 56.3837 58.5384 57.0168 58.9289 57.4074L65.2929 63.7713ZM65 31.9998V63.0642H67V31.9998H65Z'
            fill={theme?.rawColors?.purple}
          />
          <circle
            strokeWidth={2}
            cx='74.0097'
            cy='23.0094'
            r='3.23652'
            transform='rotate(-63.5516 74.0097 23.0094)'
            stroke={theme?.rawColors?.purple}
          />
          <circle
            strokeWidth={2}
            cx='58.0097'
            cy='20.0094'
            r='3.23652'
            transform='rotate(-63.5516 58.0097 20.0094)'
            stroke={theme?.rawColors?.purple}
          />
          <circle
            strokeWidth={2}
            cx='58.0097'
            cy='5.00969'
            r='3.23652'
            transform='rotate(-63.5516 58.0097 5.00969)'
            stroke={theme?.rawColors?.purple}
          />
          <circle
            strokeWidth={2}
            cx='72.0097'
            cy='9.00944'
            r='3.23652'
            transform='rotate(-63.5516 72.0097 9.00944)'
            stroke={theme?.rawColors?.purple}
          />
        </Box>
      ) : (
        <Box as='svg' sx={{ mt: 2, ...sx }} viewBox='0 0 128 118' fill='none'>
          <path
            d='M25 105.914L41.7647 96.907L63 105.914V117H30.5882L25 105.914Z'
            fill={theme?.rawColors?.grey}
            stroke={theme?.rawColors?.grey}
          />
          <path
            d='M94.7338 117H74.6429L70 100.098L72.3636 90.8787H96L94.7338 117Z'
            fill={theme?.rawColors?.grey}
            stroke={theme?.rawColors?.grey}
          />
          <path
            d='M40.5 85.7335L62.2487 99.6869L65.5 85.7335L56.5 73.5291L40.5 85.7335Z'
            fill={theme?.rawColors?.grey}
            stroke={theme?.rawColors?.grey}
          />
          <g opacity='0.6'>
            <path
              d='M1 117V102.409C1 100.341 1.64113 98.3241 2.83511 96.6357L6.30525 91.7283'
              stroke={theme?.rawColors?.grey}
            />
            <path
              d='M10.2842 117V102.409C10.2842 100.341 10.9253 98.3241 12.1193 96.6357L15.5894 91.7283'
              stroke={theme?.rawColors?.grey}
            />
            <path
              d='M19.5684 117V102.409C19.5684 100.341 20.2095 98.3241 21.4035 96.6357L24.8736 91.7283'
              stroke={theme?.rawColors?.grey}
            />
            <path
              d='M28.8525 117V102.409C28.8525 100.341 29.4937 98.3241 30.6876 96.6357L34.1578 91.7283'
              stroke={theme?.rawColors?.grey}
            />
            <path
              d='M38.1377 117V102.409C38.1377 100.341 38.7788 98.3241 39.9728 96.6357L43.4429 91.7283'
              stroke={theme?.rawColors?.grey}
            />
            <path
              d='M47.4209 117V102.409C47.4209 100.341 48.062 98.3241 49.256 96.6357L52.7261 91.7283'
              stroke={theme?.rawColors?.grey}
            />
            <path
              d='M56.7051 117V102.409C56.7051 100.341 57.3462 98.3241 58.5402 96.6357L62.0103 91.7283'
              stroke={theme?.rawColors?.grey}
            />
            <path
              d='M65.9893 117V102.409C65.9893 100.341 66.6304 98.3241 67.8244 96.6357L71.2945 91.7283'
              stroke={theme?.rawColors?.grey}
            />
            <path
              d='M75.2734 117V102.409C75.2734 100.341 75.9146 98.3241 77.1085 96.6357L80.5787 91.7283'
              stroke={theme?.rawColors?.grey}
            />
            <path
              d='M84.5576 117V102.409C84.5576 100.341 85.1988 98.3241 86.3927 96.6357L89.8629 91.7283'
              stroke={theme?.rawColors?.grey}
            />
            <path
              d='M93.8418 117V102.409C93.8418 100.341 94.4829 98.3241 95.6769 96.6357L99.147 91.7283'
              stroke={theme?.rawColors?.grey}
            />
            <path
              d='M103.126 117V102.409C103.126 100.341 103.767 98.3241 104.961 96.6357L108.431 91.7283'
              stroke={theme?.rawColors?.grey}
            />
            <path
              d='M112.411 117V102.409C112.411 100.341 113.052 98.3241 114.246 96.6357L117.716 91.7283'
              stroke={theme?.rawColors?.grey}
            />
            <path
              d='M121.694 117V102.409C121.694 100.341 122.335 98.3241 123.529 96.6357L127 91.7283'
              stroke={theme?.rawColors?.grey}
            />
          </g>
          <path
            d='M65.2929 63.7716C65.6834 64.1621 66.3166 64.1621 66.7071 63.7716L73.0711 57.4076C73.4616 57.0171 73.4616 56.3839 73.0711 55.9934C72.6805 55.6029 72.0474 55.6029 71.6569 55.9934L66 61.6502L60.3431 55.9934C59.9526 55.6029 59.3195 55.6029 58.9289 55.9934C58.5384 56.3839 58.5384 57.0171 58.9289 57.4076L65.2929 63.7716ZM65 32V63.0644H67V32H65Z'
            fill={theme?.rawColors?.grey}
          />
          <circle
            strokeWidth={2}
            cx='74.0097'
            cy='20.6908'
            r='3.23652'
            transform='rotate(-63.5516 74.0097 20.6908)'
            stroke={theme?.rawColors?.grey}
          />
          <circle
            strokeWidth={2}
            cx='68.0097'
            cy='5.00969'
            r='3.23652'
            transform='rotate(-63.5516 68.0097 5.00969)'
            stroke={theme?.rawColors?.grey}
          />
          <circle
            strokeWidth={2}
            cx='60.0097'
            cy='16.0097'
            r='3.23652'
            transform='rotate(-63.5516 60.0097 16.0097)'
            stroke={theme?.rawColors?.grey}
          />
        </Box>
      )}
    </>
  )
}

export const Hatching = ({ vertical = true }) => {
  const { theme } = useThemeUI()
  return (
    <defs>
      <pattern
        id='hatchPattern'
        patternUnits='userSpaceOnUse'
        width={2}
        height={2}
        patternTransform={`rotate(${vertical ? 10 : 45})`}
      >
        <rect width={2} height={2} fill={theme?.rawColors?.green} />
        <line
          x1='0'
          y1='0'
          x2='0'
          y2={4}
          style={{
            stroke: theme?.rawColors?.background,
            strokeWidth: 1.5,
          }}
        />
      </pattern>
    </defs>
  )
}
