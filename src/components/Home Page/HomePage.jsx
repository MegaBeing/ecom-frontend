import Corousel from "./components/Corousel";
import Category from "./components/Category/Category";
import FlatDisplayComponent from "./components/FlatDisplay/FlatDisplay";
import { tempCatList } from "../../assets/data";
export default function Home() {
    return (
    <>
        <Corousel imageList={tempCatList}/> 
        <Category />
        <FlatDisplayComponent/>
    </>        
    );
}