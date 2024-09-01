import styled from 'styled-components'
import { CollectionListData } from '../../../../assets/data'
import CollectionItem from './components/CollectionItem'
import { Link } from 'react-router-dom'
const Div = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const StyledLink = styled(Link)`
    width: 90%;
    height: 600px;
    text-decoration: none;
    margin: 10px 0;
    box-shadow: 0 0 10px gray;
    border-radius: 10px;
`
export default function Collection() {

    return (
        <Div>
            {CollectionListData.map((item,index) => (
                <StyledLink to={`/product-list?collection=${item.name}`}>
                    <CollectionItem key={index} {...item} />
                </StyledLink>
            ))}
        </Div>
    )
}