import Option from './Option.js'
import { OptionType } from '../helper/OptionType.js'

interface Params {
  userChoice: OptionType
  computerChoice: OptionType
}

function OptionWrapper({
  children,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className='w-[80%] aspect-square relative'>{children}</div>
}

export default function Result({ userChoice, computerChoice }: Params) {
  return (
    <section className='w-full h-full relative flex'>
      <div className='flex flex-col w-full justify-center items-center gap-4'>
        <OptionWrapper>
          <Option option={userChoice} />
        </OptionWrapper>
        <h2>YOU PICKED</h2>
      </div>
      <div className='flex flex-col w-full justify-center items-center gap-4'>
        <OptionWrapper>
          <Option option={computerChoice} />
        </OptionWrapper>
        <h2>HOUSE PICKED</h2>
      </div>
    </section>
  )
}
