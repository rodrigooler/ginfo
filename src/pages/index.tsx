import styled from 'styled-components'
import Separator from '../atoms/Separator'
import Text from '../atoms/Text'

const Wrapper = styled.div`
    padding: 30px;
`

export default () => {
    return (
        <Wrapper>
            <Text isBold isCenter size={32}>
                Futuro é tecnologia!
            </Text>
            <Separator horizontal={20} />
            <Text isCenter size={14}>
                Site está em construção e terá disponivel vários ebooks open
                sources e free para pessoas que estão em paises que é díficil
                ter acesso a internet.
            </Text>
        </Wrapper>
    )
}
