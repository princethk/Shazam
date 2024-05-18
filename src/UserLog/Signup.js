import React,{useState} from 'react'
import Login from './Login';
import "./login.css";
 const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [page,setPage] = useState(false);

   

    let headersList = {
        projectId: "sfizfaun0yqo",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        name: name,
        email: email,
        password: password,
        appType: 'music',
      });

      const apiPostDetail = async() =>{
        const data = await  fetch(
            "https://academics.newtonschool.co/api/v1/user/signup",
            {
              method: "POST",
              body: bodyContent,
              headers: headersList,
            }
          );
          const json = await data.json();
        //   console.log(json);
      }

    function handleForm(){
        apiPostDetail()
        // console.log(name , email , password);
    }
    

  return page ?(
    <Login />
  ) : (
   
    
             

      
      
          <div className="container">
            <div >
           
              <form onClick={(e) => e.preventDefault()} className="LoginForm">

              <h2 className="title">
              Welcome to Shazam WebApp
            </h2>

              <h1 className='LoginHeading'>Signup</h1>


                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="EmailBox"
                />
                <input
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="EmailBox"
                />
                <input
                 value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="PasswordBox"
                />
                <button
                 onClick={() => {
                    handleForm();
                    alert("User created, go to login page");
                  }}
                  type="submit"
                  className="submitButton"
                >
                  Login
                </button>

                <button  
                 onClick={() => setPage(true)}
                 className="submitButton"
              >
                Go to Login
              </button>


              </form>
            </div>
          


          </div>
        
    
  )
}

export default SignUp