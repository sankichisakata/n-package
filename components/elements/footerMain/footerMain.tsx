import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuList from '../menuList/menuList';

const FooterMain = () => {
    return(
        <div
        className='bg-gray-900 w-full h-full'
        >
                <div className='
                py-10
                flex flex-col justify-center items-center gap-8
                text-center text-slate-100
                '
                >
                    <p className='text-xl'>株式会社エムパッケージ</p>
                    <div className='text-base'>
                        <address>〒332-0006&nbsp;埼玉県川口市末広2-7-15</address>
                        <p>TEL:048-287-8055</p>
                    </div>
                    <div className='text-xs'>
                        <p >加賀ICより車で101分</p>
                        <p >川口元郷駅2番出口より徒歩13分</p>
                    </div>
                </div>

            <MenuList/>
            
        </div>
        
    )
}

export default FooterMain;