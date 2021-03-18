import styled from 'styled-components'

import { DotWave } from './'


export const Loading = ({ isLoading = false }) => {
  if (!isLoading) return null
  return (
    <StyledLoading>
      <DotWave size="1.2" />
    </StyledLoading>
  )
}


const StyledLoading = styled.div`
  position: fixed;
  padding: 5rem 0;
  left: 0;
  bottom: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 300 // Loader
`