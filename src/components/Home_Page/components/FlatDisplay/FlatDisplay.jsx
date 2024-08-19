import styled from "styled-components";
import { tempCatList } from "../../../../assets/data";
import SingleFlatDisplayComponent from "./components/SingleFlatDisplayComponent";
const Div = styled.div`
    margin-top: 50px;
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
    border-radius: 10px;
`;
export default function FlatDisplayComponent({heading}) {
    return (
        <Div>
            <h1>{heading}</h1>
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