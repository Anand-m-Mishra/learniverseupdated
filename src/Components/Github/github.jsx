import React from 'react'
import { useLoaderData } from 'react-router-dom'


function github() {

  const data = useLoaderData()

  //What useLoader() does?
  //useLoader() is a hook that is used to fetch data from the server. It takes
  //a function as an argument, which is called when the component is mounted. The
  //function returns a promise that resolves to the data that was fetched from the
  //server. The data is then passed to the component as a prop. The component can
  //then use the data to render the page. The useLoader() hook is used to fetch
  //data from the server in a React application. It is similar to the useFetch() hook
  //but it is specifically designed for fetching data from the server.
  //The useLoader() hook is used to fetch data from the server in a React application.
  
    // const [data,setData]= React.useState([])
    // React.useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    //     }, [])
  return (
    <>
    <div className='text-center m-4 bg-red-950 text-white p-4 text-3xl'>github followers: {data.followers}
      <div>UserName: {data.login}</div>
    <img src={data.avatar_url} width={300} alt=""/>
    </div>
    </>
  )
}

export default github

export const githubInfoLoader=async()=>{
  const response= await fetch('https://api.github.com/users/Anand-m-Mishra')
  return response.json()
}


