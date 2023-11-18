import ScoreBar from '../components/ScoreBar.js'
import TriangleSelection from '../components/TriangleSelection.js'
import RulesButton from '../components/RulesButton.js'
import RulesModal from '../components/RulesModal.js'
import { useCallback, useState } from 'react'

export default function SelectionPage() {
  const [modalVisible, setModalVisible] = useState(false)

  const handleRulesClick = useCallback(
    () => setModalVisible(!modalVisible),
    [modalVisible],
  )

  return (
    <main className='w-screen h-screen bg-gradient-to-b from-background-light to-background-dark text-text text-white font-text'>
      <div className='p-8 flex flex-col justify-between items-center h-screen gap-8'>
        <ScoreBar />
        <TriangleSelection />
        <RulesButton handleClick={handleRulesClick} />
        {modalVisible ? <RulesModal handleClick={handleRulesClick} /> : <></>}
      </div>
    </main>
  )
}
