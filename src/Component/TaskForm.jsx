import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [text, setText] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTask(text.trim());
    setText("");
  };

  return (
    <>
      <style>{`
        .task-form{
          background:#ffffff;
          border-radius:18px;
          padding:20px;
          box-shadow:0 10px 30px rgba(0,0,0,.08);
          margin-bottom:20px;
        }

        .task-form h2{
          margin:0 0 6px;
          color:#1f2937;
        }

        .task-form p{
          margin:0 0 16px;
          color:#6b7280;
          font-size:.9rem;
        }

        .input-group{
          display:flex;
          gap:12px;
        }

        .task-input{
          flex:1;
          padding:14px 16px;
          border:2px solid #e5e7eb;
          border-radius:12px;
          font-size:1rem;
          outline:none;
          transition:.2s;
        }

        .task-input:focus{
          border-color:#2563eb;
          box-shadow:0 0 0 4px rgba(37,99,235,.12);
        }

        .add-btn{
          border:none;
          background:linear-gradient(135deg,#2563eb,#3b82f6);
          color:white;
          padding:0 22px;
          border-radius:12px;
          font-weight:600;
          cursor:pointer;
          transition:.2s;
        }

        .add-btn:hover{
          transform:translateY(-1px);
          box-shadow:0 8px 18px rgba(37,99,235,.3);
        }

        .bottom-row{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-top:12px;
          font-size:.8rem;
          color:#6b7280;
        }

        .hint{
          display:flex;
          align-items:center;
          gap:6px;
        }

        .count{
          font-weight:600;
        }

        @media(max-width:600px){
          .input-group{
            flex-direction:column;
          }

          .add-btn{
            height:48px;
          }
        }
      `}</style>

      <form className="task-form" onSubmit={handleSubmit}>
        <h2>✨ Add New Task</h2>
        <p>Create and organize your daily work efficiently.</p>

        <div className="input-group">
          <input
            className="task-input"
            type="text"
            placeholder="What do you need to do today?"
            value={text}
            maxLength={80}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="add-btn"
            type="submit"
            disabled={!text.trim()}
          >
            + Add
          </button>
        </div>

        <div className="bottom-row">
          <div className="hint">
            ⌨️ Press Enter to add
          </div>

          <div className="count">
            {text.length}/80
          </div>
        </div>
      </form>
    </>
  );
}