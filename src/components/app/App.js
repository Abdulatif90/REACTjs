import { Component } from "react"
// import './app.css'



class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter:0, age : " "
        }
    }
   
    // State o`zini mutation qilib bo`lmaydi. o`rniga setStatedan foydalanish kerak
    // clickhandler = () =>{
    //     this.setState({
    //         counter:this.state.counter + 1
    //     }) 
    // }   // bu setState har bir o`zgarishi uchun State ga borib + 1 qo`shadi bu esa Statega bog`langanligi uchn sekinro ishlaydi
   
     clickHandlerUp = () =>{
        this.setState(prevState => ({
            counter: prevState.counter + 1
        })
    )}
   
clickHandlerDown = () => {
    this.setState(prevState => {
        if (prevState.counter > 0) {
            return { counter: prevState.counter - 1 };
        } else {
            return null; // hech narsa o'zgartirilmaydi yani state ishlamaydi.
        }
    });
}
   
     clickHandlerReset = () =>{
        this.setState(prevState => ({
            counter: prevState.counter = 0
        }) 
    )}

    changeHandler = (e) => {
      this.setState({
        age: e.target.value
      })
    }
   

  render () {
    const {firstname, lastname, link } = this.props   
    const {counter, age} = this.state
  

  return (
    <div  className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <h4>
            Mening ismim - {firstname}, familiyam - {lastname},  yoshim - {age}
        </h4>
        <a href={link}>Youtube kanalim</a>
        <div className="mt-3">
            <button onClick={this.clickHandlerUp} className="btn btn-success">
            increment
            </button>
            <button onClick={this.clickHandlerDown} className="btn btn-danger mx-2" >
            decrement
            </button>
            <button onClick={this.clickHandlerReset} className="btn btn-info">
            reset
            </button>
            <p className="text-center">
                {counter}
            </p>
        </div>
        <form >
          <span > Yoshingiz</span>
            <input type="text" className="form-control" onChange={this.changeHandler} />
        </form>
      </div>
    </div>
  )
} 
}

const App = () => {
    return (
        <div>  
            <div> 
            <User firstname = "Abdulatif" lastname = "Sharipov"  link = "youtube.com" />
            <User firstname = "Shaxzodbek" lastname = "Boymatov"  link = "youtube.com" />
            </div>
        </div>

    )
}




// const App = () => {
//     const data = [
//         {name : "Shaytanat", viewers : 989, id: 1},
//         {name : "Jaloliddin", viewers : 787, id: 2},
//         {name : "Osmondagi bolalar", viewers : 784, id: 3},
//     ]
   
//     return (
//         <div className='app font-monospace'>
//            <div className='content'>
//            <AppInfo/>
//                 <div className='search-panel'>
//                     <SearchPanel/>
//                     <AppFilter/>    
//                 </div>
//                <MovieList data = {data}/>
//                 <MovieAddFrom/>       
                 
//             </div>
//          </div>
//     );
//     }

    export default App