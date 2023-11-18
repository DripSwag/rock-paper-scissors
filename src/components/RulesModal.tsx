import RulesInformatic from '../assets/image-rules.svg'

interface Params {
  handleClick: Function
}

export default function RulesModal({ handleClick }: Params) {
  return (
    <section className='w-screen h-screen absolute bg-white z-50 top-0 px-12 py-24'>
      <div className='flex flex-col items-center justify-between h-full'>
        <h1 className='text-background-light text-3xl font-extrabold'>RULES</h1>
        <img src={RulesInformatic}></img>
        <button
          className='w-12 aspect-square'
          onClick={() => {
            handleClick()
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='fill-neutral-300 w-full h-full'
          >
            <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
          </svg>
        </button>
      </div>
    </section>
  )
}
