import styled, { css } from 'styled-components'

interface ITextProps {
    isBold?: boolean
    size?: number
}

const Text = styled<ITextProps, 'p'>('p')`
    ${({ theme, isBold, size }) => css`
        /* color: ${theme.fontColor}; */
        color: #FFF;
        margin: 0px;
        font-weight: ${isBold ? 'bold' : null};
        font-size: ${size + 'px'};
    `};
`

export default Text
