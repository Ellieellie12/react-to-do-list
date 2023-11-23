import { useState } from "react"
import "./styles.css"

function App() {
  const [newItem, setNewItem] = useState("")


  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text" 
            id="item" 
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger"> Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger"> Delete</button>
        </li>
      </ul>
    </>
  )
}


export default App 


// when you want to return multiple elements from a component you need to use a fragment <></> and wrap it around everything you want to render in the component. If you don't wrap it in a fragment it can only return one thing example only the form can be returned and not the h1 as well if there was no fragment around it.

// useState is a React hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it.