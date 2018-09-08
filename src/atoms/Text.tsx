import styled, { css, withTheme } from 'styled-components'
import { IThemeProps } from './Theme'

interface ITextProps {
    isBold?: boolean
    size?: number
    theme: IThemeProps
}

const Text = styled<ITextProps, 'p'>('p')`
    ${({ theme, isBold, size }) => css`
        color: ${theme.fontColor};
        font-weight: ${isBold ? 'bold' : null};
        font-size: ${size + 'px'};
    `};
`

export default Text
