import OptionButton from './OptionButton.js'
import Triangle from '../assets/bg-triangle.svg'

export default function TriangleSelection() {
  return (
    <section className='relative z-10 w-full h-full flex justify-center items-center'>
      <div className='top-0 w-[60%] relative max-w-[330px]'>
        <img src={Triangle} className='z-[-10] w-full'></img>
        <OptionButton
          option='rock'
          className='bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'
        />
        <OptionButton
          option='paper'
          className='top-0 left-0 -translate-x-1/2 -translate-y-1/2'
        />
        <OptionButton
          option='scissors'
          className='top-0 right-0 translate-x-1/2 -translate-y-1/2'
        />
      </div>
    </section>
  )
}
