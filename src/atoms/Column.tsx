import styled, { css } from 'styled-components'

const Column = styled<null, 'p'>('p')`
    ${() => css`
        display: flex;
        flex-direction: column;
    `};
`

export default Column
