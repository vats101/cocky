import React from "react";

export default function SearchForm({ setsearchTerm }) {
  //useRef is used to store value of input
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchValue = React.useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const searchcocktail = () => {
    setsearchTerm(searchValue.current.value);
  };
  return (
    <section className="section searchSection">
      <br></br>
      <br></br>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          
          
         <span> <input
            type="text"
            name="name"
            id="name"
            onChange={searchcocktail}
            ref={searchValue}
          /><i class="fa fa-search" style={{color:"white"}} aria-hidden="true"></i></span>
        </div>
      </form>
    </section>
  );
}