import './App.css'
import styled from 'styled-components';

const CenteredSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center
`
function App() {
  return (
    <>
      {/* TODO ルーティングで100本ノックのそれぞれのページを作る */}
      <CenteredSection>
        Hello world
      </CenteredSection>
    </>
  )
}

export default App
