import styled from 'styled-components'
import { tempCatList } from '../../../../assets/data'
import CategoryItem from './components/CategoryItem'
import { Link } from 'react-router-dom'
const Div = styled.div`
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
export default function Category() {

    return (
        <Div>
            {tempCatList.map((item,index) => (
                <StyledLink to={`/product-list?category=${item.category}`}>
                    <CategoryItem key={index} {...item} />
                </StyledLink>
            ))}
        </Div>
    )
}