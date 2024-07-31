import styled from 'styled-components'
import { tempCatList } from '../../assets/data'
import SingleProductDisplay from './components/SingleProductDisplay';
import Pagination from '@mui/material/Pagination';
const Container = styled.div`
    width: 100%;
    height: fit-content;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
`
const Message = styled.div`
margin:10px;
color:#a84c32;
`
const PaginationWrapper = styled.div`
    margin-top: 20px;
    display:flex;
    align-items: center;
    justify-content:center;

`
export default function ProductListPage() {
    let searchElement = 'potlis'
    return (
        <>
            <Message>
                You Searched for '{searchElement}'
            </Message>
            <Container>
                {tempCatList.map((ele, index) => (
                    <SingleProductDisplay
                        key={index}
                        imageUrl={ele.imageUrl}
                        caption={ele.category}
                        price='₹ 999'
                        previousPrice='₹5999'
                        discount='83% off' />
                ))}
            </Container>
            <PaginationWrapper>
                <Pagination count={10} color="primary" />
            </PaginationWrapper>
        </>
    );
}