import "./styles.scss";
import { useState, useEffect, useRef } from "react";
export default function App() {
  const [searchText, setSearchText] = useState("");
  const [notes, setNotes] = useState([]);
  const inputRef = useRef();

  const handleChange = (e) => {
    const userInput = e.target.value;
    setSearchText(userInput);
  };

  const addNote = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    const newNotes = Array.from(notes);
    newNotes.push(searchText);
    setNotes(newNotes);
  };

  return (
    <div className="hero">
      <div className="keeper-container">
        <div className="keeper-header">Never Forget Anything</div>
        <form className="form-container" onSubmit={addNote}>
          <input
            ref={inputRef}
            type="text"
            className="keeper-input"
            placeholder="Enter your note"
            onChange={handleChange}
          />
          <button className="keeper-add" type="submit">
            Add to list
          </button>
        </form>
        <div className="keeper-items-container">
          <div className="keeper-items-header">Your Notes</div>
          <div className="keeper-items">
            <ol className="ordered-list">
              {notes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
