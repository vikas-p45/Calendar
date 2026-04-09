import React, { useState, useEffect } from "react";

const Notes = () => {
  const [note, setNote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("note");
    if (saved) setNote(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);

  return (
    <div>
      <h3>Notes</h3>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes... "
        rows="15"
        style={{ width: "100%", padding: "10px" }}
      />
    </div>
  );
};

export default Notes;