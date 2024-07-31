import styled from 'styled-components'
import { tempCatList } from './components/data'
import CategoryItem from './components/CategoryList'
const Div = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`
const Heading = styled.h1`
    margin-top: 10%;
    font-weight: 100;
    text-align: center;
`
export default function Category() {
    
    return (
        <>
        <Heading>Category</Heading> 
        <Div>
        {tempCatList.map((item) => <CategoryItem key={Math.random()} {...item} />)}       
        </Div>
        </>
    )
}