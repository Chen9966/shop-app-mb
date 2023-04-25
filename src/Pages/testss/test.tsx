import React,{ useEffect }from 'react'
import {getTypeOne} from '../../api/getNav'

const test: React.FC  = () =>{
    useEffect(()=>{
    getTypeOne().then(res=> {
        console.log(res);
        
    })
    },[])
  return (
    <div>test</div>
  )
}

export default test