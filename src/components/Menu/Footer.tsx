import React from 'react'
import styled from 'styled-components'
import {  Flex, Image } from '@pancakeswap/uikit'


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: space-between;
    flex-direction: row;
  }
`



const Footer = () => {
  
  return (
    <Wrapper>

      <Flex>
        <Image  width={0} height={0} />
      </Flex>
    </Wrapper>
  )
}

export default Footer
