import { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Result from '../components/Result.js'
import RulesButton from '../components/RulesButton.js'
import RulesModal from '../components/RulesModal.js'
import ScoreBar from '../components/ScoreBar.js'
import { OptionType } from '../helper/OptionType.js'

enum Decision {
  win = 0,
  lose,
  draw,
}

export default function ResultPage() {
  const [modalVisible, setModalVisible] = useState(false)

  const computerResult = Math.floor(Math.random() * 3)
  const searchParams = new URLSearchParams(window.location.search)

  const userResult: OptionType =
    searchParams.get('selected') == null
      ? -1
      : //@ts-ignore
        OptionType[searchParams.get('selected')]

  const decision =
    Decision[
      userResult == computerResult
        ? 'draw'
        : (computerResult + 1) % 3 == userResult
        ? 'win'
        : 'lose'
    ]

  const handleRulesClick = useCallback(
    () => setModalVisible(!modalVisible),
    [modalVisible],
  )

  return (
    <main className='w-screen h-screen bg-gradient-to-b from-background-light to-background-dark text-text text-white font-text'>
      <div className='p-8 flex flex-col justify-between items-center h-screen gap-8'>
        <ScoreBar />
        <div className='flex flex-col justify-center items-center gap-4 h-full w-full'>
          <Result userChoice={userResult} computerChoice={computerResult} />
          <h1 className='w-fit text-5xl font-extrabold'>
            {decision == Decision.draw
              ? 'DRAW'
              : decision == Decision.win
              ? 'YOU WIN'
              : 'YOU LOSE'}
          </h1>
          <Link
            to={'/'}
            className='px-16 py-3 bg-white text-background-light rounded-lg text-md tracking-[0.2em]'
          >
            PLAY AGAIN
          </Link>
        </div>
        <RulesButton handleClick={handleRulesClick} />
        {modalVisible ? <RulesModal handleClick={handleRulesClick} /> : <></>}
      </div>
    </main>
  )
}
