import styled from 'styled-components'
import { tempCatList } from '../../assets/data'
import SingleProductDisplay from './components/SingleProductDisplay';
import Pagination from '@mui/material/Pagination';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';

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
    const [products, setProductsState] = useState([]);
    const location = useLocation();
    const api_url = import.meta.env.VITE_API_URL;
    const searchParams = new URLSearchParams(location.search);
    const keys = Array.from(searchParams.keys());
    useEffect(() => {
        productData();
    }, [location.search])
    const productData = async () => {
        try {
            let url = `${api_url}/products/filter?`;
            if (keys.includes('search')) {
                url += `search=${searchParams.get('search')}&`;
            }
            if (keys.includes('category')) {
                url += `category=${searchParams.get('category')}&`;
            }
            if (keys.includes('max_value')) {
                url += `max_value=${searchParams.get('max_value')}&`;
            }
            if (keys.includes('min_value')) {
                url += `min_value=${searchParams.get('min_value')}&`;
            }
            if (keys.includes('color')) {
                url += `color=${searchParams.get('color')}`;
            }
            if (url.endsWith('&')) {
                url = url.slice(0, -1);
            }
            const response = await fetch(url);
            const data = await response.json();
            setProductsState(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Container>
                {products.map((ele) => (
                    <SingleProductDisplay
                        key={ele.id}
                        id = {ele.id}
                        imageUrl={`${api_url}/${ele.images[0].image}`}
                        caption={ele.product_name}
                        price={ele.price}
                        previousPrice={ele.previous_price} />
                ))}
            </Container>
            <PaginationWrapper>
                <Pagination count={10} color="primary" />
            </PaginationWrapper>
        </>
    );
}