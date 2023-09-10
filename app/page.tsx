import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div
        className='
        bg-gray-200 text-gray-800 
        h-screen gap-4 px-5
        flex flex-col justify-center items-center
        '
      >

        <div className='text-center text-lg'>
          <p>「親切・迅速・丁寧」私たちの信念です。</p>
        </div>

        <div className='text-center'>
          <p>ダンボールの製造・企画・加工・納品までをワンストップで行い、お客様のご要望にお応え致します。</p>
          <p>当たり前を当たり前に。</p>
        </div>

        <div className='
        text-center text-[30px]
        border border-black
        p-5
        '
        >
          <p>川口から世界へ</p>
          <p>”n-package”</p>
          <p>ここに爆誕</p>
        </div>

      </div>
      </>
  )
}
