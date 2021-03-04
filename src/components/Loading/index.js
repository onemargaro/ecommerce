import React from 'react'
import Loader from 'react-bulma-components/lib/components/loader'
import Container from 'react-bulma-components/lib/components/container'
const Loading = () => {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Loader
        style={{
          width: 150,
          height: 150,
          border: '2px solid green',
          borderTopColor: 'transparent',
          borderRightColor: 'transparent'
        }}
      />
    </Container>
  )
}
export default Loading
