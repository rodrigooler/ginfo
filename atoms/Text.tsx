import styled, { css } from 'styled-components'

const Text = styled.p`
    ${({ theme }) => css`
        color: ${theme.fontColor};
        font-family: Raleway, 'Times New Roman', Times, serif;
    `};
`

export default Text
