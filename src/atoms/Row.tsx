import styled, { css } from 'styled-components'

interface IRowProps {
    justifyContent?: string
    alignItems?: string
}

const Row = styled<IRowProps, 'div'>('div')`
    ${({ justifyContent, alignItems }) => css`
        display: flex;
        flex-direction: row;
        align-items: ${alignItems ? alignItems : 'flex-start'};
        justify-content: ${justifyContent ? justifyContent : 'flex-start'};
    `};
`

export default Row
