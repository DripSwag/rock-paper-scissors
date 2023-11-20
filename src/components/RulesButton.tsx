interface Params {
  handleClick: Function
}

export default function RulesButton({ handleClick }: Params) {
  return (
    <button
      className='border-2 border-border w-min py-2 px-10 rounded-xl lg:absolute lg:right-8 lg:bottom-8 z-10'
      onClick={() => {
        handleClick()
      }}
    >
      RULES
    </button>
  )
}
