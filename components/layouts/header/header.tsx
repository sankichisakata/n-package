import Link from 'next/link';

const header = () => {
  return (
    <header>
      <nav className="bg-gray-100/50 fixed flex justify-center items-center top-0 left-0 p-2 z-10 w-full">
        <ul className="bg-gray-200 flex justify-center items-center space-x-2">
          <li>
            <Link href="/">
                <img src="/vercel.svg" className="w-32" />
            </Link>
          </li>
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
      </nav>
    </header>
  );
};

export default header;