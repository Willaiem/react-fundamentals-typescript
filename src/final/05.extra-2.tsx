// Styling
// 💯 accept a size prop to encapsulate styling
// http://localhost:3000/isolated/final/05.extra-2.js

import React from 'react'
import '../box-styles.css'

type BoxProps = {
  children: React.ReactNode
  style?: React.CSSProperties
  size?: 'small' | 'medium' | 'large'
  className?: string
  otherProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

function Box({ style, size, className = '', ...otherProps }: BoxProps) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{ fontStyle: 'italic', ...style }}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{ backgroundColor: 'lightblue' }}>
        small lightblue box
      </Box>
      <Box size="medium" style={{ backgroundColor: 'pink' }}>
        medium pink box
      </Box>
      <Box size="large" style={{ backgroundColor: 'orange' }}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
