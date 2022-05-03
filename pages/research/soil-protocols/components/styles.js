export const styles = {
  details: {
    divider: {
      borderColor: 'background',
      opacity: 0.6,
      mb: [0],
      mt: [2, 0, 0, 0],
      pb: [3, 5, 5, 5],
    },
    group: {
      pb: [0, 5, 5, 5],
    },
    label: {
      color: 'orange',
      fontSize: [1, 1, 1, 2],
      mt: [2, 0, 0, 0],
      fontFamily: 'mono',
      letterSpacing: 'mono',
      textTransform: 'uppercase',
    },
    value: {
      fontSize: [1, 1, 1, 2],
      mt: [2],
      mb: [3, 0, 0, 0],
      color: 'primary',
      fontFamily: 'faux',
      letterSpacing: 'faux',
    },
    content: {
      fontSize: [1, 1, 1, 2],
      color: 'primary',
      fontFamily: 'faux',
      letterSpacing: 'faux',
    },
    definition: {
      fontSize: [0, 0, 0, 1],
      mt: [1],
      mb: [1],
      color: 'orange',
      fontFamily: 'faux',
      letterSpacing: 'faux',
      lineHeight: 1.2,
    },
    comment: {
      fontSize: [0, 0, 0, 1],
      mt: [1],
      mb: [1],
      color: 'primary',
      fontFamily: 'faux',
      letterSpacing: 'faux',
    },
    link: {
      fontSize: [1, 1, 1, 2],
      color: 'primary',
      fontFamily: 'faux',
      lineHeight: 'body',
      letterSpacing: 'faux',
      transition: 'opacity 0.15s',
      '@media (hover: hover) and (pointer: fine)': {
        '&:hover': {
          opacity: 0.5,
        },
        '&:hover > #span-1 > #container > #arrow': {
          transform: 'rotate(45deg)',
        },
        '&:hover > #span-1 > #span-2 > #container > #arrow': {
          transform: 'rotate(45deg)',
        },
      },
    },
  },
}
