export default function ScoreBar() {
  return (
    <section className='border-border border-2 p-4 rounded-lg flex justify-between min-h-[8em] items-center w-full'>
      <h1 className='leading-[0.75em] font-bold text-2xl'>
        ROCK<br></br>PAPER<br></br>SCISSORS
      </h1>
      <div className='h-full aspect-square bg-white rounded-lg flex flex-col items-center p-2 drop-shadow-lg'>
        <h2 className='text-score-heading tracking-widest text-sm'>SCORE</h2>
        <h2 className='text-score-value text-5xl font-extrabold'>12</h2>
      </div>
    </section>
  )
}
