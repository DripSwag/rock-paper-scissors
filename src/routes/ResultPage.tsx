import { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks.js'
import RulesButton from '../components/RulesButton.js'
import RulesModal from '../components/RulesModal.js'
import ScoreBar from '../components/ScoreBar.js'
import { decrement, increment } from '../features/score/scoreSlice.js'
import { OptionType } from '../helper/OptionType.js'
import Option from '../components/Option.js'

enum Decision {
  win = 0,
  lose,
  draw,
}

function OptionWrapper({
  text,
  result,
  className,
  winner,
}: {
  text: string
  result: OptionType
  className?: string
  winner?: boolean
}) {
  return (
    <div
      className={`flex flex-col w-full justify-center items-center gap-8 lg:gap-16 lg:text-3xl flex-1 ${
        className ? className : ''
      }`}
    >
      <div className='w-[80%] max-w-[200px] lg:max-w-[300px] aspect-square relative order-2'>
        <Option option={result} winner={winner ? true : false} />
      </div>
      <h2 className='tracking-widest order-3 lg:order-1 z-10'>{text}</h2>
    </div>
  )
}

export default function ResultPage() {
  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useAppDispatch()

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

  let executed = false
  useEffect(() => {
    if (!executed) {
      if (decision == Decision.win) {
        dispatch(increment())
      } else if (decision == Decision.lose) {
        dispatch(decrement())
      }
    }
    return () => {
      executed = true
    }
  }, [])

  return (
    <main className='w-screen h-screen bg-gradient-to-b from-background-light to-background-dark text-text text-white font-text overflow-hidden'>
      <div className='p-8 flex flex-col justify-between items-center h-screen gap-8'>
        <ScoreBar />
        <div className='flex justify-center items-center gap-4 h-full w-full max-w-4xl lg:max-w-6xl flex-wrap'>
          <OptionWrapper
            text='YOU PICKED'
            result={userResult}
            className='order-1'
            winner={decision === Decision.win ? true : false}
          />
          <div className='flex flex-col gap-4 items-center order-4 basis-full lg:order-2  lg:basis-auto z-10'>
            <h1 className='w-max text-5xl font-extrabold relative top-0'>
              {decision == Decision.draw
                ? 'DRAW'
                : decision == Decision.win
                ? 'YOU WIN'
                : 'YOU LOSE'}
            </h1>
            <Link
              to={'/'}
              className='px-16 py-3 bg-white text-background-light rounded-lg text-md tracking-[0.2em] text-center'
            >
              PLAY AGAIN
            </Link>
          </div>
          <OptionWrapper
            text='HOUSE PICKED'
            result={computerResult}
            className='order-3'
            winner={decision === Decision.lose ? true : false}
          />
        </div>
        <RulesButton handleClick={handleRulesClick} />
        {modalVisible ? <RulesModal handleClick={handleRulesClick} /> : <></>}
      </div>
    </main>
  )
}
