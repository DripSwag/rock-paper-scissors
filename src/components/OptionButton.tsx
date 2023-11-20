import { Link } from 'react-router-dom'
import Option from './Option.js'
import { OptionType } from '../helper/OptionType.js'

interface Params {
  option: 'rock' | 'paper' | 'scissors'
  className?: string
}

export default function OptionButton({ option, className }: Params) {
  return (
    <Link
      to={`/result?selected=${option}`}
      className={`aspect-square min-w-[8rem] w-[20vw] max-w-[11rem] absolute ${
        className ? className : ''
      }`}
    >
      <Option option={OptionType[option]} />
    </Link>
  )
}
