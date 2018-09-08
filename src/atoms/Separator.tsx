import styled, { css } from 'styled-components'

interface ISeparatorProps {
    horizontal?: number
    vertical?: number
}

const Separator = styled<ISeparatorProps, 'div'>('div')`
    ${({ horizontal, vertical }) => css`
        margin: ${horizontal || 0}px ${vertical || 0}px;
    `};
`

export default Separator
