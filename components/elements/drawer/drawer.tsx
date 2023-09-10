"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

import Link from 'next/link';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width : '100%',
       }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ul className="text-black flex flex-col justify-center items-center space-x-2">
            <li>
              <Link href="/">
                <ListItemButton>
                  <ListItemIcon>
                    N-Pacakge
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </li>
            
            <li>
            <Link href="/service">
              <ListItemButton>
                <ListItemIcon>
                  事業内容
                </ListItemIcon>
              </ListItemButton>
            </Link>
            </li>
            <li>
            
            <Link href="/equipment">
              <ListItemButton>
                <ListItemIcon>
                  設備案内
                </ListItemIcon>
              </ListItemButton>
            </Link>
            </li>
            <li>
            
            <Link href="/company">
              <ListItemButton>
                <ListItemIcon>
                会社概要
                </ListItemIcon>
              </ListItemButton>
            </Link>
            </li>
          </ul>
      </List>
      <Divider />

    </Box>
  );

  return (
    <div >
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
           <Link href="/contact">お問い合わせ</Link>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}