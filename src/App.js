import './App.css';
import React, { useState, useEffect } from 'react';
import List from './components/List.js';
import Alert from './components/Alert.js';

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  return (
    <div className="App">
      <h3>Todo List using localStorage</h3>
    </div>
  );
}

export default App;
