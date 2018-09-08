import styled, { css } from 'styled-components'

interface IColumnProps {
    justifyContent?: string
    alignItems?: string
}

const Column = styled<IColumnProps, 'div'>('div')`
    ${({ justifyContent, alignItems }) => css`
        display: flex;
        flex-direction: column;
        align-items: ${alignItems ? alignItems : 'flex-start'};
        justify-content: ${justifyContent ? justifyContent : 'flex-start'};
    `};
`

export default Column
