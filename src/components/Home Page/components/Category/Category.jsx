import styled from 'styled-components'
import { tempCatList } from '../../../../assets/data'
import CategoryItem from './components/CategoryList'
import { Link } from 'react-router-dom'
const Div = styled.div`
    width: 100%;
    height: 475px;
    display: flex;
    direction: row;
    justify-content: space-around;
    align-items: center;
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
            {tempCatList.map((item) => (
                <StyledLink to={`/product-list?category=${item.category}`}>
                    <CategoryItem key={item.category} {...item} />
                </StyledLink>
            ))}
        </Div>
    )
}