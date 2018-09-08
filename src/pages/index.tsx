import styled from 'styled-components'
import Separator from '../atoms/Separator'
import Text from '../atoms/Text'

const Wrapper = styled.div`
    padding: 10% 30px;
`

export default () => {
    return (
        <Wrapper>
            <Text isBold isCenter size={32}>
                Futuro é tecnologia!
            </Text>
            <Separator horizontal={20} />
            <Text isCenter size={14}>
                Site está em construção, irá ter disponivel vários ebooks open
                source e free.
            </Text>
            <Separator horizontal={20} />
            <Text isCenter size={32}>
                Livros
            </Text>
            <Separator horizontal={10} />
            <a
                href="http://github.com/visionmedia/masteringnode/raw/master/book.pdf"
                download
            >
                <Text isCenter>TJ Holowaychuk | MasteringNode</Text>
            </a>
            <a href="https://leanpub.com/s/v68RxH_JYbgsUpPE7q4-eg.pdf" download>
                <Text isCenter>
                    Antonio Santiago - The NodeJS Cluster Module
                </Text>
            </a>
        </Wrapper>
    )
}
