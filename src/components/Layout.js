import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { useTheme, ChakraProvider } from '@chakra-ui/core'
import { customTheme } from 'theme'

// import 'normalize.css'
// import '../styles/globalstyles.scss'
import '../styles/wp-styles/styles.scss'

export const Layout = ({ children }) => {
  console.log('theme', useTheme())

  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ChakraProvider>
  )
}
