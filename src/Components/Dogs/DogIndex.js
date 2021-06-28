import React, {Component} from 'react';

export default class DogIndex extends Component {
    constructor(){
        super();
        this.state = {
            img: '',
        }
    }

    fetchDoggies(){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                img: data.message,
            })
        })
    }
    
    render(){
        return(
            <div>
            <h1>Random Dog</h1>
            <button onClick={(e) => this.fetchDoggies()}>Click me!</button>
            <img src={this.state.img}/>
            </div>
        )
    }

    // const [photo, setPhoto] = useState([]);

    // const fetchImg = () => {
    //     fetch('https://dog.ceo/api/breeds/image/random')
    // }, 
    //   .then((res) => res.json())
    //   .then((dogImg) =>{
    //       setPhoto(dogImg)
    //   })
    //   const displayDog = () => {
    //       return(
              
    //       )
    //   }
}

