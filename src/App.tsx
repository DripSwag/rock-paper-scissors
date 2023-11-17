import OptionButton from './components/OptionButton.js'
import Rock from './assets/icon-rock.svg'
import Paper from './assets/icon-paper.svg'
import Scissors from './assets/icon-scissors.svg'
import Triangle from './assets/bg-triangle.svg'

function App() {
  return (
    <main className='w-screen h-screen bg-gradient-to-b from-background-light to-background-dark text-text text-white font-text'>
      <div className='p-8 flex flex-col justify-between items-center h-screen gap-8'>
        <section className='border-border border-2 p-4 rounded-lg flex justify-between min-h-[8em] items-center w-full'>
          <h1 className='leading-[0.75em] font-bold text-2xl'>
            ROCK<br></br>PAPER<br></br>SCISSORS
          </h1>
          <div className='h-full aspect-square bg-white rounded-lg flex flex-col items-center p-2 drop-shadow-lg'>
            <h2 className='text-score-heading tracking-widest text-sm'>
              SCORE
            </h2>
            <h2 className='text-score-value text-5xl font-extrabold'>12</h2>
          </div>
        </section>
        <section className='relative z-10 w-full h-full flex justify-center items-center'>
          <div className='top-0 w-[60%] relative'>
            <img src={Triangle} className='z-[-10] w-full'></img>
            <OptionButton option='rock' image={Rock} className='bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' />
            <OptionButton option='paper' image={Paper} className='top-0 left-0 -translate-x-1/2 -translate-y-1/2' />
            <OptionButton option='scissors' image={Scissors} className='top-0 right-0 translate-x-1/2 -translate-y-1/2' />
          </div>
        </section>
        <button className='border-2 border-border w-min py-2 px-10 rounded-xl'>
          RULES
        </button>
      </div>
    </main>
  )
}

export default App
