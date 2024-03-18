import { Button } from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'
import React from 'react'
import { Box } from 'theme-ui'

const Selected = ({ selected }) => {
  return (
    <>
      <Box
        as='label'
        sx={{
          fontFamily: 'heading',
          letterSpacing: 'smallcaps',
          textTransform: 'uppercase',
          fontSize: [2, 2, 2, 3],
        }}
      >
        Selected
      </Box>
      <Box
        sx={{
          mt: ['13px', '13px', '13px', '11px'],
        }}
      >
        {selected ? (
          <Button
            href={selected.link}
            target='_blank'
            rel='noreferrer'
            size='xs'
            sx={{
              color: 'grey',
              fontSize: ['14px', '14px', '14px', '16px'],
              height: ['19px', '19px', '19px', '22px'],
              pb: '3px',
              transition: 'all 0.1s',
              whiteSpace: 'nowrap', // breaks out of grid in certain cases, potentially an issue
            }}
            suffix={
              <RotatingArrow
                id='rotating-arrow'
                sx={{ color: 'secondary', height: 14, width: 14, mt: '-2px' }}
              />
            }
          >
            {selected['short reference']}
          </Button>
        ) : (
          <Box
            sx={{
              color: 'secondary',
              fontSize: ['14px', '14px', '14px', '16px'],
              height: ['21px', '21px', '21px', '24px'],
              mt: '-2px',
            }}
          >
            (click to select)
          </Box>
        )}
      </Box>
    </>
  )
}

export default Selected
