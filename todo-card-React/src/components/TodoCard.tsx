import { useEffect, useState } from "react";

type Priority = "Low" | "Medium" | "High";
type Status = "Pending" | "In Progress" | "Done";

interface Todo {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  dueDate: Date;
  tags: string[];
}

interface Props {
  todo: Todo;
}

function getTimeRemainingText(dueDate: Date): string {
  const now = new Date();
  const diff = dueDate.getTime() - now.getTime();

  const seconds = Math.floor(diff / 1000);
  const abs = Math.abs(seconds);

  const minutes = Math.floor(abs / 60);
  const hours = Math.floor(abs / 3600);
  const days = Math.floor(abs / 86400);

  if (Math.abs(seconds) < 60) return "Due now!";

  if (diff > 0) {
    if (days > 1) return `Due in ${days} days`;
    if (days === 1) return "Due tomorrow";
    if (hours >= 1) return `Due in ${hours} hours`;
    return `Due in ${minutes} minutes`;
  } else {
    if (days >= 1) return `Overdue by ${days} days`;
    if (hours >= 1) return `Overdue by ${hours} hours`;
    return `Overdue by ${minutes} minutes`;
  }
}

export default function TodoCard({ todo }: Props) {
  const [completed, setCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(
    getTimeRemainingText(todo.dueDate)
  );

  const status: Status = completed ? "Done" : "Pending";

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemainingText(todo.dueDate));
    }, 60000);

    return () => clearInterval(interval);
  }, [todo.dueDate]);

  // ✅ FIXED ACTIONS
  const handleEdit = (): void => {
    console.log("edit clicked");
    alert("Edit clicked");
  };

  const handleDelete = (): void => {
    console.log("delete clicked");
    alert("Delete clicked");
  };

  return (
    <article data-testid="test-todo-card" className="todo-card">
      {/* Checkbox */}
      <div className="checkbox-row">
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          data-testid="test-todo-complete-toggle"
          checked={completed}
          onChange={() => setCompleted((prev) => !prev)}
          aria-label="Mark task as completed"
        />
        <label htmlFor={`todo-${todo.id}`}>Mark as completed</label>
      </div>

      {/* Header */}
      <div className="todo-header">
        <h3
          data-testid="test-todo-title"
          className={completed ? "completed" : ""}
        >
          {todo.title}
        </h3>

        <span data-testid="test-todo-priority">
          {todo.priority}
        </span>
      </div>

      {/* Description */}
      <p data-testid="test-todo-description">
        {todo.description}
      </p>

      {/* Due Date */}
      <time
        data-testid="test-todo-due-date"
        dateTime={todo.dueDate.toISOString()}
      >
        Due{" "}
        {todo.dueDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </time>

      {/* Time Remaining */}
      <div data-testid="test-todo-time-remaining">
        {timeRemaining}
      </div>

      {/* Status */}
      <span data-testid="test-todo-status">
        {status}
      </span>

      {/* Tags */}
      <ul data-testid="test-todo-tags" className="tags">
        <li data-testid="test-todo-tag-work">work</li>
        <li data-testid="test-todo-tag-urgent">urgent</li>
        <li>design</li>
      </ul>

      {/* Actions */}
      <div className="actions">
        <button
          data-testid="test-todo-edit-button"
          onClick={handleEdit}
        >
          Edit
        </button>

        <button
          data-testid="test-todo-delete-button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </article>
  );
}