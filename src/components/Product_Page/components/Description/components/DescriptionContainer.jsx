import styled from 'styled-components'

const Container = styled.div`
    display: block;
`
const DescriptionContent = styled.p`
    text-align: left;
`
const KeyValPairs = styled.div`
    text-transform: capitalize;
`
const Key = styled.span`
    font-weight: bold;
`

export default function DesContainer({ product_description, product_outer_material, product_inner_material, product_sling, product_closer, product_pocket }) {
    return (
        <Container>
            <DescriptionContent>
                {product_description}
            </DescriptionContent>
            <KeyValPairs>
                <Key>outer material:</Key> {product_outer_material}
            </KeyValPairs>
            <KeyValPairs>
                <Key>inner material:</Key> {product_inner_material}
            </KeyValPairs>
            <KeyValPairs>
                <Key>sling:</Key> {product_sling ? 'Yes': 'No'}
            </KeyValPairs>
            <KeyValPairs>
                <Key>closer:</Key> {product_closer ? 'Yes': 'No'}
            </KeyValPairs>
            <KeyValPairs>
                <Key>pocket:</Key> {product_pocket ? 'Yes': 'No'}
            </KeyValPairs>
        </Container>
    )
}