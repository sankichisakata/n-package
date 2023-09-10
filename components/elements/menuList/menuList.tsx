import Container from '@mui/material/Container';
import Link from 'next/link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';

const MenuList = () => {
    return(
        <div className='py-10'>
            <nav className='flex flex-col justify-center items-center'>
                <ul className="
                text-xl 
                flex flex-col gap-8
                "
                >
                    <li>
                    <Link href="/service">
                        <ListItemButton>
                            <ListItemIcon>
                            <p className='text-slate-100'>事業内容</p>
                            </ListItemIcon>
                        </ListItemButton>
                        </Link>
                    </li>

                    <li>
                    <Link href="/equipment">
                    <ListItemButton>
                        <ListItemIcon>
                        <p className='text-slate-100'>設備案内</p>
                        </ListItemIcon>
                    </ListItemButton>
                    </Link>
                    </li>

                    <li>
                    <Link href="/company">
                    <ListItemButton>
                            <ListItemIcon>
                            <p className='text-slate-100'>会社概要</p>
                            </ListItemIcon>
                    </ListItemButton>
                    </Link>
                    </li>
                </ul>

                <div className='my-10'>
                    <Button variant="outlined" size="large">
                    <Link href="/contact">
                        相談する
                    </Link>
                    </Button>
                </div>

                <div className='flex flex-col justify-center items-center'>
                <Link href="#">
                    <ListItemButton>
                            <ListItemIcon>
                            <p className='text-xs text-slate-100'>プライバシーポリシー</p>
                            </ListItemIcon>
                    </ListItemButton>
                </Link>
                <small className='text-xs text-slate-400'>©️2023&nbsp;株式会社エムパッケージ</small>
                </div>

            </nav>
        </div>
    )
}

export default MenuList;