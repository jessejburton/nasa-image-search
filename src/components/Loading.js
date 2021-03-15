import styled from 'styled-components'

import { DotWave } from './'

export const Loading = () => {
  return (
    <StyledLoading>
      <DotWave />
    </StyledLoading>
  )
}

const StyledLoading = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`