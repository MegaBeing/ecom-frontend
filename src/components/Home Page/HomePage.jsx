import Corousel from "./components/Corousel";
import Category from "./components/Category/Category";
import FlatDisplayComponent from "./components/FlatDisplay/FlatDisplay";
export default function Home() {
    return (
    <>
        <Corousel/> 
        <Category />
        <FlatDisplayComponent/>
    </>        
    );
}