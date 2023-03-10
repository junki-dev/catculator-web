import TypographyBody from '../components/Typography/TypographyBody';

import FileCopyIcon from '@mui/icons-material/FileCopy';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <Box
      component={'div'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '10%',
      }}
    >
      <TypographyBody icon={<GitHubIcon />} label="GitHub" uri="https://github.com/junki-dev" />
      <TypographyBody
        icon={<FileCopyIcon />}
        label="Notion Resume"
        uri="https://www.notion.so/Junki-Kim-03c4ef023f88413d9b569e2119e7665d"
      />
    </Box>
  );
}
