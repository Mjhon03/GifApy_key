import './Main.css'
import { Card } from "../../UI/Card/Card";
import React,{ useState } from "react";
import { Input } from '../../UI/Input/Input';
import axios from 'axios';


export const Main = () =>{

    
    const [datos, setDatos] = useState([]);
    const URL = `http://api.giphy.com/v1/gifs/search?api_key=VvKhgfL3HagQQka4zNmaBj6GTuZ62B91`


    const  nameInput = (e) => {
        const FetchApi=(()=>{
            axios.get(URL+`&q=encodeURI(${e.target.value})&limit=16`)
            .then(response => {
                setDatos(response.data.data)
                console.log(datos);    
            })
            .catch(ex=>{
                console.log(ex);
            })
        })
        FetchApi()
    }


    return(
        <>
            <main>
                <br />
                <div className="containerSelect">
                    <Input name={nameInput}/>
                </div>
                <br />
                <section>
                    <div className="totalcards">
                    <div className="allcard">
                        <Card key="Card" data={datos}/>
                    </div>
                    </div>
                </section>
            </main>
        </>
    )
}