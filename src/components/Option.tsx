import Rock from '../assets/icon-rock.svg'
import Paper from '../assets/icon-paper.svg'
import Scissors from '../assets/icon-scissors.svg'
import { OptionType } from '../helper/OptionType.js'

interface Params {
  option: OptionType
  winner?: boolean
}

const border = {
  0: 'rock',
  1: 'paper',
  2: 'scissors',
}

const backgroundColour = {
  0: 'bg-rock-shadow',
  1: 'bg-paper-shadow',
  2: 'bg-scissors-shadow',
}

export default function Option({ option, winner }: Params) {
  return (
    <>
      <div
        className={`bg-white rounded-full relative w-full h-full z-20 optionShadow ${border[option]}`}
      >
        <img
          src={
            option == OptionType.rock
              ? Rock
              : option == OptionType.paper
              ? Paper
              : Scissors
          }
          className='relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 aspect-square w-1/2 test'
        ></img>
      </div>
      <div
        className={`w-full h-full absolute ${backgroundColour[option]} rounded-full top-2 z-10`}
      ></div>
      {winner ? <div className={`winner`}></div> : <></>}
    </>
  )
}
