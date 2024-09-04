import styled from 'styled-components'

const Container = styled.div`
    border-top: 1px gray solid;
    border-bottom: 1px gray solid;
    width: 100%;
    padding: 2% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const Element = styled.div`
    
    width: 90%;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
`
const Key = styled.div`
    font-weight: 300;
`
const Value = styled.div`
    font-weight: 200;
`
export default function CartTotal({elements}) {
    return (
    <Container>
        {elements.map((ele, index) =>( 
            <Element key={index}>
                <Key>
                    {ele.key}:
                </Key>
                <Value>
                    {ele.value}
                </Value>
            </Element>
        )
        )}
    </Container>);
}