import React,{Component} from 'react'
import image from '../image/inferno_bg.png'



class Inicio extends Component {
    
    render(){
        return (
            <div className="mt-1">
                <img src={image} alt="fondo4" className="d-block w-100"/>
            </div>
        )
    }
    
}

export default Inicio
