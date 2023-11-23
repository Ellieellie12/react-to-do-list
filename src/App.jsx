import "./styles.css"

function App() {
  return <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" name="" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
}


export default App 