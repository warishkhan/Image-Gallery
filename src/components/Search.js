import React from 'react'
import { FaSearch} from "react-icons/fa";
import { useGlobalContext } from '../context/context'
import { AiOutlineClose } from "react-icons/ai";

const Search = () => {

    const {query,setQuery,setToggle} = useGlobalContext();

  return (
    <>
      <div className='search'>
      <FaSearch/>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type="text" value={query} placeholder="Search images here" onChange={(e)=>setQuery(e.target.value)} onClick={()=>setToggle(false)}/>
        </form>
        <AiOutlineClose style={{marginRight:'5px'}} onClick={()=>setQuery('')}/>
      </div>
    </>
  )
}

export default Search
