import React from 'react'
import { useDispatch} from 'react-redux'
import DropDown  from './DropDown'

const Filtre = ({Address, Category}) => {
const handleDropDownChange=(value)=>{
    value.address? Address(value['address']): Category(value['Category'])
}
    return (
        <div style={{ display:"flex",marginLeft:500, marginTop:70 }}>
<DropDown label="address" itemList={["select address of post","Sousse","Monastir","Mahdia"]} handleItemChange={handleDropDownChange}/>
<DropDown label="Category" itemList={["select category of post","restaurants and cafes","Hotels and parks","craft center"]} handleItemChange={handleDropDownChange}/>       
    </div>
    )
}
export default  Filtre