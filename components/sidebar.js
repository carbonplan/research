import { Box, Text, Styled, Divider } from 'theme-ui'
import { Tag } from '@carbonplan/components'

const Sidebar = ({ filter, sort, setFilter, setSort }) => {
  const toggleFilter = (value) => {
    if (value === 'all') {
      setFilter({
        all: true,
        article: true,
        tool: true,
        comment: true,
        publication: true,
        dataset: true,
      })
    } else {
      setFilter({
        all: false,
        article: value === 'article',
        tool: value === 'tool',
        comment: value === 'comment',
        publication: value === 'publication',
        dataset: value === 'dataset',
      })
    }
  }

  const toggleSort = (value) => {
    setSort({
      date: value === 'date',
      title: value === 'title',
    })
  }
  return (
    <Box
      sx={{
        width: '100%',
        mb: [0],
        pb: [0, 0, 3],
        position: ['initial', 'initial', 'sticky'],
        top: [56],
        height: ['fit-content', 'fit-content', 'calc(100vh - 56px)'],
        backgroundColor: 'background',
      }}
    >
      <Text
        as='h1'
        variant='styles.h1'
        sx={{ pt: [4, 4, 5], mb: [3, 3, 4], mt: [0, 0, 0] }}
      >
        Research
      </Text>
      <Box sx={{ maxWidth: '400px', pb: [3, 3, 0] }}>
        <Styled.p>
          Articles, tools, and commentary on carbon removal and climate
          solutions.
        </Styled.p>
      </Box>
      <Box sx={{ mt: [0, 0, '40px'], mb: [0, 0, '40px'] }}>
        <Divider sx={{ mr: [0, 0, 4], mt: [0, 0, 4], mb: [0, 0, 0] }} />
      </Box>
      <Box
        sx={{
          mt: [4],
          display: ['none', 'none', 'block'],
        }}
      >
        <Text
          sx={{
            fontFamily: 'mono',
            letterSpacing: 'mono',
            fontSize: [1],
            color: 'secondary',
            userSelect: 'none',
          }}
        >
          FILTER BY
        </Text>
        <Box sx={{ mt: [3], maxWidth: '250px' }}>
          <Tag onClick={() => toggleFilter('all')} value={filter.all}>
            All
          </Tag>
          <Tag onClick={() => toggleFilter('article')} value={filter.article}>
            Article
          </Tag>
          <Tag onClick={() => toggleFilter('tool')} value={filter.tool}>
            Tool
          </Tag>
          <Tag
            onClick={() => toggleFilter('comment')}
            value={filter.comment}
            label='Comment'
          >
            Comment
          </Tag>
          <Tag
            onClick={() => toggleFilter('publication')}
            value={filter.publication}
          >
            Publication
          </Tag>
          <Tag onClick={() => toggleFilter('dataset')} value={filter.dataset}>
            Dataset
          </Tag>
        </Box>
      </Box>
      <Box
        sx={{
          mt: [4],
          display: ['none', 'none', 'block'],
        }}
      >
        <Text
          sx={{
            fontFamily: 'mono',
            letterSpacing: 'mono',
            fontSize: [1],
            color: 'secondary',
            userSelect: 'none',
          }}
        >
          SORT BY
        </Text>
        <Box sx={{ mt: [3], maxWidth: '250px' }}>
          <Tag onClick={() => toggleSort('date')} value={sort.date}>
            Date
          </Tag>
          <Tag
            onClick={() => toggleSort('title')}
            value={sort.title}
            label='Title'
          >
            Title
          </Tag>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
