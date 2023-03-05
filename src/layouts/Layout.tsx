/** @jsxImportSource @emotion/react */
import Footer from './Footer';

import { css } from '@emotion/react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

interface LayoutDefaultProps {
  children?: React.ReactElement;
}

export default function Layout({ children }: LayoutDefaultProps) {
  return (
    <Box component={'div'}>
      <main css={css({ backgroundColor: '#ffffff', minHeight: '90vh', height: '90%', width: '100%' })}>
        {children || <Outlet />}
      </main>
      <Footer />
    </Box>
  );
}
