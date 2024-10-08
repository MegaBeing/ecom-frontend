import styled from 'styled-components'
import { tempCatList } from '../../assets/data'
import SingleProductDisplay from './components/SingleProductDisplay';
import Pagination from '@mui/material/Pagination';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import ProductContainer from './components/ProductContainer';
import Footer from '../Footer/Footer';

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
const Spacer = styled.div`
    height: ${(props) => (props.height)}px;
`
export default function ProductListPage() {
    const [products, setProductsState] = useState([]);
    const location = useLocation();
    const api_url = import.meta.env.VITE_API_URL;
    const searchParams = new URLSearchParams(location.search);
    const keys = Array.from(searchParams.keys());
    // console.log(keys,searchParams)
    useEffect(() => {
        productData();
    }, [location.search])
    const productData = async () => {
        try {
            let isFilter = false;
            let url = `${api_url}/products/filter?`;
            if (keys.includes('search')) {
                url += `search=${searchParams.get('search')}&`;
                isFilter = true;
            }
            if (keys.includes('category')) {
                url += `category=${searchParams.get('category')}&`;
                isFilter = true;
            }
            if(keys.includes('collection')){
                url+=`collection=${searchParams.get('collection')}`
                isFilter = true;
            }
            if(keys.includes('is_best_seller')){
                url+=`is_best_seller=${searchParams.get('is_best_seller')}`
                isFilter = true
            }
            if(keys.includes('is_exclusive')){
                url+=`is_exclusive=${searchParams.get('is_exclusive')}`
                isFilter = true
            }
            if (keys.includes('max_value')) {
                url += `max_value=${searchParams.get('max_value')}&`;
                isFilter = true;
            }
            if (keys.includes('min_value')) {
                url += `min_value=${searchParams.get('min_value')}&`;
                isFilter = true;
            }
            if (keys.includes('color')) {
                url += `color=${searchParams.get('color')}`;
                isFilter = true;
            }
            if (url.endsWith('&')) {
                url = url.slice(0, -1);
            }
            if(!isFilter)
            {
                url = `${api_url}/products/`
            }
            // console.log(url);
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
            <Spacer height={75}/>
            <ProductContainer products = {products} api_url={api_url}/>
            <PaginationWrapper>
                <Pagination count={10} color="primary" />
            </PaginationWrapper>
        </>
    );
}