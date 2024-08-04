import styled from 'styled-components'
import { tempCatList } from '../../../../assets/data'
import CategoryItem from './components/CategoryList'
import { Link } from 'react-router-dom'
const Div = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 500px;
    display: flex;
    direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`
const StyledLink = styled(Link)`
    width: 40%;
    height: 200px;
    text-decoration: none;
`
export default function Category() {

    return (
        <Div>
            {tempCatList.map((item) => (
                <StyledLink to={`/product-list?category=${item.category}`}>
                    <CategoryItem key={Math.random()} {...item} />
                </StyledLink>
            ))}
        </Div>
    )
}