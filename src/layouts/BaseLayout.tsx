import React from 'react'

interface Props {
    children?: React.ReactNode
    footer?: boolean
}

const BaseLayout: React.FC<Props> = ({ children }: Props) => {
    return <div>{children}</div>
}

export default BaseLayout
