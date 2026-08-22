import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { filteredTasks, tasks } = useContext(TaskContext);

  const completed = tasks.filter((task) => task.completed).length;
  const progress =
    tasks.length === 0 ? 0 : Math.round((completed / tasks.length) * 100);

  return (
    <>
      <style>{`
        .task-container{
          background:#ffffff;
          border-radius:20px;
          padding:24px;
          box-shadow:0 10px 30px rgba(0,0,0,.08);
          margin-top:20px;
        }

        .task-header{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:20px;
          flex-wrap:wrap;
          gap:10px;
        }

        .task-header h2{
          margin:0;
          font-size:1.6rem;
          color:#1e293b;
        }

        .task-header p{
          margin:4px 0 0;
          color:#64748b;
          font-size:.9rem;
        }

        .progress-box{
          text-align:right;
        }

        .progress-box h3{
          margin:0;
          color:#2563eb;
          font-size:1.4rem;
        }

        .progress-bar{
          width:100%;
          height:10px;
          background:#e5e7eb;
          border-radius:999px;
          overflow:hidden;
          margin:16px 0 22px;
        }

        .progress-fill{
          height:100%;
          background:linear-gradient(90deg,#2563eb,#06b6d4);
          border-radius:999px;
          transition:.4s;
        }

        .stats{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:12px;
          margin-bottom:22px;
        }

        .card{
          border-radius:14px;
          padding:16px;
          color:#fff;
          text-align:center;
        }

        .blue{background:#2563eb;}
        .green{background:#16a34a;}
        .orange{background:#ea580c;}

        .card h3{
          margin:0;
          font-size:1.6rem;
        }

        .card span{
          font-size:.8rem;
          opacity:.9;
        }

        .task-list{
          display:flex;
          flex-direction:column;
          gap:14px;
        }

        .empty{
          text-align:center;
          padding:50px 20px;
          color:#64748b;
        }

        .empty .icon{
          font-size:3rem;
          margin-bottom:10px;
        }

        @media(max-width:640px){
          .stats{
            grid-template-columns:1fr;
          }

          .task-header{
            flex-direction:column;
            align-items:flex-start;
          }

          .progress-box{
            text-align:left;
          }
        }
      `}</style>

      <section className="task-container">
        {/* Header */}
        <div className="task-header">
          <div>
            <h2>📋 My Tasks</h2>
            <p>{filteredTasks.length} task(s) currently visible</p>
          </div>

          <div className="progress-box">
            <h3>{progress}%</h3>
            <p>Completed Progress</p>
          </div>
        </div>

        {/* Progress */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="card blue">
            <h3>{tasks.length}</h3>
            <span>Total</span>
          </div>

          <div className="card green">
            <h3>{completed}</h3>
            <span>Completed</span>
          </div>

          <div className="card orange">
            <h3>{tasks.length - completed}</h3>
            <span>Pending</span>
          </div>
        </div>

        {/* Task List */}
        {filteredTasks.length === 0 ? (
          <div className="empty">
            <div className="icon">📝</div>
            <h3>No Tasks Found</h3>
            <p>Try changing the filter or add a new task.</p>
          </div>
        ) : (
          <div className="task-list">
            {filteredTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}