import styled, { css } from 'styled-components'

interface ITextProps {
    isBold?: boolean
    isCenter?: boolean
    size?: number
}

const Text = styled<ITextProps, 'p'>('p')`
    ${({ theme, isBold, size, isCenter }) => css`
        /* color: ${theme.fontColor}; */
        color: #FFF;
        margin: 0px;
        text-align: ${isCenter ? 'center' : null}
        font-weight: ${isBold ? 'bold' : null};
        font-size: ${size + 'px'};
    `};
`

export default Text
