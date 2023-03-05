import { Box } from '@mui/material';

interface EmptyBoxProps {
  flexBasis: string | number;
}

export default function EmptyBox({ flexBasis }: EmptyBoxProps) {
  return (
    <Box component={'div'} sx={{ flexBasis, display: { xs: 'none' } }}>
      {' '}
    </Box>
  );
}
