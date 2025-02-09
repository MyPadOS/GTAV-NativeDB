import { alpha, Box, ButtonBase, styled, Typography } from '@mui/material'

const Container = styled(ButtonBase)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(1),
  backgroundColor: alpha(theme.palette.getContrastText(theme.palette.background.paper), 0.05),
  borderRadius: theme.shape.borderRadius,
  transition: 'background-color 0.1s ease-in-out',
  '&:hover': {
    backgroundColor: alpha(theme.palette.getContrastText(theme.palette.background.paper), 0.1),
  }
}))


export interface AppTileProps {
  icon: React.ReactElement,
  text: string,
  url: string
}

export default function AppTile({ icon, text, url }: AppTileProps) {
  return (
    // https://github.com/mui/material-ui/issues/31194
    // @ts-ignore
    <Container component="a" href={url} target="_blank">
      <Box sx={{ display: 'inline-flex', fontSize: 36, pb: 1 }}>
        {icon}
      </Box>
      <Typography variant="body1" textAlign="center">
        {text}
      </Typography>
    </Container>
  )
}
