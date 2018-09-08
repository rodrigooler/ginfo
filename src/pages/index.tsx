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
            <a href="../../files/ebooks/masteringnode.pdf" download>
                <Text isCenter>TJ Holowaychuk | MasteringNode</Text>
            </a>
            <a
                href="../../files/ebooks/nodebots-javascript-and-robotic-in-the-real-world.pdf"
                download
            >
                <Text isCenter>
                    Will Mendes | Nodebots - Javascript and robotics in the real
                    world
                </Text>
            </a>
            <a href="../../files/ebooks/thenodejsclustermodule.pdf" download>
                <Text isCenter>
                    Antonio Santiago - The NodeJS Cluster Module
                </Text>
            </a>
        </Wrapper>
    )
}
