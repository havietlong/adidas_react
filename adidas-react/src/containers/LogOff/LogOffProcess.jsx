import {React,useEffect} from 'react'



const LogOffProcess = () => {
    useEffect(() => {
        // Retrieve user data from local storage
        localStorage.removeItem('user');
        window.location.replace("/")
    
      }, []);
  return (
    <div>Logging off ...</div>
  )
}

export default LogOffProcess