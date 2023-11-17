interface Params {
  option: 'rock' | 'paper' | 'scissors'
  image: string
}

const border = {
  rock: 'border-rock-light',
  paper: 'border-paper-light',
  scissors: 'border-scissors-light',
}

const backgroundColour = {
  rock: 'bg-rock-dark',
  paper: 'bg-paper-dark',
  scissors: 'bg-scissors-dark',
}

export default function OptionButton({ option, image }: Params) {
  return (
    <button className='aspect-square w-32'>
      <div
        className={`bg-white rounded-full ${border[option]} border-[16px] relative w-full h-full z-10`}
      >
        <img
          src={image}
          className='relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 aspect-square w-1/3'
        ></img>
      </div>
      <div
        className={`w-full h-full absolute ${backgroundColour[option]} rounded-full top-1`}
      ></div>
    </button>
  )
}
