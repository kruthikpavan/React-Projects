import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
const getLocalStorage=()=>{
  let items= localStorage.getItem('items')
  if(items){
    return( items=JSON.parse(localStorage.getItem('items')))
  }
  else{
    return ([])
  }
}

function App() {
  const [items, setItems] = useState(getLocalStorage());
  const [itemName, setItemName] = useState("");
  const [activeId, setActiveId] = useState();
  const [editActive, setEditActive] = useState(false);
  const [alertMessage, setAlertMessage] = useState();
  const [show, setShow] = useState(true);

  useEffect(()=>{
localStorage.setItem('items',JSON.stringify(items))
  },[items])

  function handleGroceryAdd() {
    if(!itemName){
      setShow(true)
      setAlertMessage("Enter Item");
    }
    
    else if (editActive) {
      const editedItemIndex = items.findIndex((i) => i.id == activeId);
      const itemsCopy = [...items];
      itemsCopy[editedItemIndex].name = itemName;
      setItems(itemsCopy);
      setEditActive(false);
      setItemName("");
      setShow(true)
      setAlertMessage("Item Edited");
  

    } else {
      const groceryObjects = {
        id: Date.now(),
        name: itemName,
      };

      setItems([...items, groceryObjects]);
      setItemName("");
      setAlertMessage("Item Added");
    setShow(true)

    }
  }

  function handleEdit(id) {
    const nameToEdit = items.filter((item) => item.id == id);

    setItemName(nameToEdit[0].name);
    setActiveId(id);
    setEditActive(true);
    setShow(true)
  }

  function handleTrash(id) {
    const updatedItems = items.filter((item) => item.id != id);
    setItems(updatedItems);
    setAlertMessage("Item Deleted");
    setShow(true)

  }

  function handleClear() {
    setItems([]);
    setAlertMessage("Items Cleared");
    setShow(true)

  }

  function handleShow(x=false) {
    setShow(x);
  }

  return (
    <div className="section-center">
      {show && (
        <Alert alertMessage={alertMessage} handleShow={handleShow}></Alert>
      )}

      <h3 className="form-control">Grocery Bud</h3>
      <div className="form-control">
        <input
          placeholder="e.g eggs"
          value={itemName}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
          className="grocery"
        ></input>
        <button
          className="submit-btn"
          onClick={() => {
            handleGroceryAdd();
          }}
        >
          Submit
        </button>
      </div>
      <div className="grocery-container">
        <List
          items={items}
          handleTrash={handleTrash}
          handleEdit={handleEdit}
        ></List>
      </div>

      <button
        className="clear-btn"
        onClick={() => {
          handleClear();
        }}
      >
        Clear Items
      </button>
    </div>
  );
}

export default App;
