import Link from 'next/link';
import TemporaryDrawer from '@/components/elements/drawer/drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

const header = () => {
  return (
    <header>
      <nav className="bg-white/10 backdrop-blur-sm fixed flex justify-between items-center top-0 left-0 p-2 z-10 w-full">
            <Link href="/">
                <ListItemButton>
                <p className='text-base'>N</p>
                </ListItemButton>
            </Link>
        <ul className="text-black text-xs flex justify-center items-center space-x-2">
          <li>
          <Link href="/service">事業内容</Link>
          </li>
          <li>
          <Link href="/equipment">設備</Link>
          </li>
          <li>
          <Link href="/company">会社概要</Link>
          </li>
        </ul>
        
        <div className='flex'>
          <Link href="/contact">
            <ListItemButton>
              <p className='text-sm'>相談する</p>
            </ListItemButton>
          </Link>
          <TemporaryDrawer/>
        </div>

      </nav>
    </header>
  );
};

export default header;