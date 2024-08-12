import styled from 'styled-components'
import { tempCatList } from '../../../../assets/data'
import CategoryItem from './components/CategoryList'
import { Link } from 'react-router-dom'
const Div = styled.div`
    width: 100%;
    display: flex;
    direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`
const StyledLink = styled(Link)`
    width: 45%;
    height: 200px;
    text-decoration: none;
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