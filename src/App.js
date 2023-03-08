import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const data=[
    {
        name:"Yunus Emre",
        age:27,
        image:logo,
        job:"Software Engineer",
        city:"Istanbul",
        salary:5000,
        tag:["React","Javascript","Nodejs"]
    },
    {
        name:"Burak Yılmaz",
        age:35,
        image:logo,
        job:"Football Player",
        city:"Istanbul",
        salary:10000,
        tag:["React","Javascript","Nodejs"]
    },
    {
        name:"Emir Can",
        age:25,
        image:logo,
        job:"Software Engineer",
        city:"Istanbul",
        salary:5000,
        tag:["React","Javascript","Nodejs"]
    },
    {
        name:"Muhammed Ali",
        age:30,
        image:logo,
        job:"Football Player",
        city:"Istanbul",
        salary:10000,
        tag:["React","Javascript","Nodejs"]
    }
]


function App() {
    const [_data,setData]=useState(data)
   const [name,setName]=useState("")
const dataChange=(index)=>{
    let _data2=[..._data]
    _data2[index].name=name
    setData(_data2)
}
    return (
        <div className="App">
            <div className="row">
                {_data.map((item,index)=>(

                <div  className="col-3 mt-20" key={index}>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..." />
                        <input defaultValue={item.name} onChange={setName(name)}  />
                        <button onClick={dataChange(index)}></button>
                        <h3> {item.name}- {item.age}</h3>
                        <div className="d-flex justify-content-between">

                            <h5 className="tag">{item.job}</h5>

                            <h5 className="tag">{item.city}</h5>

                            <h5 className="tag">{item.salary}</h5>
                        </div>
                        <br/>
                        {item.tag.map((tag,index)=>(
                            <span className="tag" key={index}>{tag}</span>
                        ))}
                        <br/>






                    </div>
                </div>
                ))}

            </div>
        </div>
    );
}

export default App;
