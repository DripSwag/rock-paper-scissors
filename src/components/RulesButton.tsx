interface Params {
  handleClick: Function
}

export default function RulesButton({ handleClick }: Params) {
  return (
    <button
      className='border-2 border-border w-min py-2 px-10 rounded-xl'
      onClick={() => {
        handleClick()
      }}
    >
      RULES
    </button>
  )
}
