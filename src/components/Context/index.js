import React from 'react'

const ScreenContext = React.createContext()

const ScreenProvider = ({ children }) => {
  const query = window.matchMedia('(min-width: 700px  )')
  const device = query.matches ? 'desktop' : 'mobile'
  const [screenSize, setScreenSize] = React.useState(device)
  query.addEventListener('change', () => {
    const device = query.matches ? 'desktop' : 'mobile'
    setScreenSize(device)
  })
  return (
    <ScreenContext.Provider value={{ screenSize }}>
      {children}
    </ScreenContext.Provider>
  )
}

export { ScreenContext, ScreenProvider }
