import Link from 'next/link';
import TemporaryDrawer from '@/components/elements/drawer/drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <header>
      <nav className="bg-white/10 backdrop-blur-sm fixed flex justify-between items-center top-0 left-0 p-2 z-10 w-full">
            <div className='border-2 border-gray-800'>
            <Link href="/">
                <ListItemButton>
                  <p className='text-base text-gray-800'>N</p>
                </ListItemButton>
            </Link>
            </div>

            <ul className="text-gray-800 text-xs flex justify-center items-center space-x-2">
              <li>
              <Link href="/service">事業内容</Link>
              </li>
              <li>
              <Link href="/equipment">設備案内</Link>
              </li>
              <li>
              <Link href="/company">会社概要</Link>
              </li>
            </ul>
        
        <div className='flex'>
        <Button variant="outlined" size="small">
          <Link href="/contact">
              相談する
          </Link>
        </Button>

          <TemporaryDrawer/>
        </div>

      </nav>
    </header>
  );
};

export default Header;