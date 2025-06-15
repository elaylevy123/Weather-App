import React, { useRef } from 'react'
import {useNavigate} from 'react-router-dom'


export default function WeahterForm(props) {
  const nav = useNavigate();
  const inputRef = useRef();

  const onSearchClick = () => {
    nav("/?q=" +inputRef.current.value)
  //  props.doApi(inputRef.current.value);
  }

  return (
    <nav className="container-fluid bg-warning p-2">
      <div className="container">
        <div className="row">
          <div className="logo col-auto text-light">
            <h2>Weather</h2>
          </div>
          <div className="d-flex col-md-4">
            <input ref={inputRef} id="id_input" placeholder="search for town weather..." type="search" className="form-control" />
            <button onClick={onSearchClick} id="search_btn" className="btn btn-dark">Search</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
