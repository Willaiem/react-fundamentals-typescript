// Styling
// 💯 Create a custom component
// http://localhost:3000/isolated/final/05.extra-1.js

import React from 'react'
import '../box-styles.css'

type BoxProps = {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  otherProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

function Box({ style, className = '', ...otherProps }: BoxProps) {
  return (
    <div
      className={`box ${className}`}
      style={{ fontStyle: 'italic', ...style }}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{ backgroundColor: 'pink' }}>
        medium pink box
      </Box>
      <Box className="box--large" style={{ backgroundColor: 'orange' }}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
