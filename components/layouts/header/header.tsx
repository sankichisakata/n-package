import Link from 'next/link';
import TemporaryDrawer from '@/components/elements/drawer/drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <header>
      <nav className="
      top-0 left-0 p-2 z-10 w-full 
      bg-white/10 backdrop-blur-sm 
      fixed  
      "
      >

        <div className='
        w-full lg:w-3/6 mx-auto
        flex justify-between items-center
        '>

          <div className='border-2 border-gray-800'>
          <Link href="/">
              <ListItemButton>
                <p className='text-base text-gray-800'>N</p>
              </ListItemButton>
          </Link>
          </div>

          <ul className="
          hidden lg:flex justify-center items-center gap-2
          text-gray-800 text-xs lg:text-sm 
          ">
            <li>
            <Link href="/service">
              <ListItemButton>
              事業内容
              </ListItemButton>
            </Link>
            </li>
            <li>
            <Link href="/equipment">
              <ListItemButton>
              設備案内
              </ListItemButton>
            </Link>
            </li>
            <li>
            <Link href="/company">
              <ListItemButton>
                会社概要
              </ListItemButton>
            </Link>
            </li>
          </ul>
          
          <div className='flex justify-center items-center'>
            <Link 
            className='text-sm text-gray-800'
            href="/contact">
              相談する
            </Link>

            <div className='lg:hidden'>
            <TemporaryDrawer/>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;