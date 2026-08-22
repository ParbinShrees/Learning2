import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <>
      <style>{`
        .task-card{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:16px 18px;
          background:#fff;
          border:1px solid #e5e7eb;
          border-radius:16px;
          transition:all .25s ease;
          box-shadow:0 4px 12px rgba(0,0,0,.05);
        }

        .task-card:hover{
          transform:translateY(-2px);
          box-shadow:0 10px 24px rgba(0,0,0,.08);
        }

        .task-left{
          display:flex;
          align-items:center;
          gap:14px;
          flex:1;
        }

        .task-check{
          width:22px;
          height:22px;
          accent-color:#2563eb;
          cursor:pointer;
        }

        .task-info{
          display:flex;
          flex-direction:column;
          gap:4px;
        }

        .task-title{
          font-size:1rem;
          font-weight:600;
          color:#1f2937;
          transition:.2s;
        }

        .completed{
          text-decoration:line-through;
          color:#9ca3af;
        }

        .task-meta{
          display:flex;
          align-items:center;
          gap:8px;
          font-size:.8rem;
        }

        .badge{
          padding:4px 10px;
          border-radius:999px;
          font-weight:600;
        }

        .done{
          background:#dcfce7;
          color:#166534;
        }

        .pending{
          background:#fef3c7;
          color:#92400e;
        }

        .delete-btn{
          width:42px;
          height:42px;
          border:none;
          border-radius:12px;
          background:#fee2e2;
          color:#dc2626;
          font-size:18px;
          cursor:pointer;
          transition:.2s;
        }

        .delete-btn:hover{
          background:#dc2626;
          color:#fff;
          transform:scale(1.05);
        }
      `}</style>

      <article className="task-card">
        <div className="task-left">
          <input
            className="task-check"
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />

          <div className="task-info">
            <span
              className={`task-title ${
                task.completed ? "completed" : ""
              }`}
            >
              {task.text}
            </span>

            <div className="task-meta">
              <span>Task #{task.id}</span>

              <span
                className={`badge ${
                  task.completed ? "done" : "pending"
                }`}
              >
                {task.completed ? "Completed" : "Pending"}
              </span>
            </div>
          </div>
        </div>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
          aria-label="Delete task"
        >
          ✕
        </button>
      </article>
    </>
  );
}