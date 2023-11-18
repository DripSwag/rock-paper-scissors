import Rock from '../assets/icon-rock.svg'
import Paper from '../assets/icon-paper.svg'
import Scissors from '../assets/icon-scissors.svg'
import { OptionType } from '../helper/OptionType.js'

interface Params {
  option: OptionType
}

const border = {
  0: 'border-rock-light',
  1: 'border-paper-light',
  2: 'border-scissors-light',
}

const backgroundColour = {
  0: 'bg-rock-dark',
  1: 'bg-paper-dark',
  2: 'bg-scissors-dark',
}

export default function Option({ option }: Params) {
  return (
    <>
      <div
        className={`bg-white rounded-full ${border[option]} border-[16px] relative w-full h-full z-10 optionShadow`}
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
        className={`w-full h-full absolute ${backgroundColour[option]} rounded-full top-2`}
      ></div>
    </>
  )
}
