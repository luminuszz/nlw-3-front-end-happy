import NextLink, { LinkProps } from 'next/link'
import React from 'react'

const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <NextLink {...props}>
      <a>{children}</a>
    </NextLink>
  )
}

export default Link
