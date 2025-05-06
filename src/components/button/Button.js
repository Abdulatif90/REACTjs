const Button = () => {
    const user  = false; // bu yerda false bo`lsa login bo`ladi true bolsa
    const login ='login'
    return <button> { user? 'logout': 'login'} </button>
  } 

  export default Button;