import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'

const Uploads = () => {
  return <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

    <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
      <AiOutlineCloudDownload size={'10vmax'} />

      <form>
        <HStack>
          <Input required type={'file'}
            css={{
              '&::file-selector-button': {
                border: 'none',
                width: 'calc(100% + 36px)',
                height: '100%',
                color: 'purple',
                backgroundColor: 'white',
                cursor: 'pointer'
              },
            }}
          />
          <Button colorScheme='purple' type='submit'>Upload</Button>
        </HStack>
      </form>
    </VStack>
  </Container>
}

export default Uploads;