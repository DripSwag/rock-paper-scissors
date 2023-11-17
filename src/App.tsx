import OptionButton from './components/OptionButton.js'
import Rock from './assets/icon-rock.svg'

function App() {
  return (
    <main className='w-screen h-screen bg-gradient-to-b from-background-light to-background-dark text-text text-white font-text'>
      <div className='p-8 flex flex-col justify-between items-center h-screen'>
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
        <section className='relative z-10'>
          <OptionButton option='rock' image={Rock} />
        </section>
        <button className='border-2 border-border w-min py-2 px-10 rounded-xl'>
          RULES
        </button>
      </div>
    </main>
  )
}

export default App
