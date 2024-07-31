import styled from 'styled-components'
import { tempCatList } from '../../../../assets/data'
import CategoryItem from './components/CategoryList'
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
export default function Category() {
    
    return (
        <Div>
        {tempCatList.map((item) => <CategoryItem key={Math.random()} {...item} />)}       
        </Div>
    )
}