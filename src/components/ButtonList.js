import Button from "./Button";

const ButtonList =()=>{
    const list =["All","Live","Cricket","Cooking","News","Phonics","Gaming","Live","Cricket","Cooking","News","Phonics"]
    return <div className="flex">
        {list?.map((item,index) => (<Button id={index} name={item}/>))}
 
    </div>
}

export default ButtonList;