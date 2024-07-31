import styled from "styled-components";
import { tempCatList } from "../../../../assets/data";
import SingleFlatDisplayComponent from "./components/SingleFlatDisplayComponent";
const Div = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const ComponentWrapper = styled.div`
    width: 95%;
    display: flex;
    padding:3%;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap:10px;
    box-shadow: 0 0 10px gray;
    border-radius: 10px;
`;
export default function FlatDisplayComponent() {
    return (
        <Div>
            <h1>New Offers</h1>
            <ComponentWrapper>
                {tempCatList.map((ele, index) => (<SingleFlatDisplayComponent
                    key={index}
                    imageUrl={ele.imageUrl}
                    imageCaption={ele.category}
                    Price='₹ 1000' />
                ))}
            </ComponentWrapper>
        </Div>
    );

}