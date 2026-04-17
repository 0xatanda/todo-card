import TodoCard from "./components/TodoCard";

const dueDate = new Date(Date.now() + 1000 * 60 * 60 * 23);

export default function App() {
  return (
    <TodoCard
      todo={{
        id: "1",
        title: "Design Landing Page",
        description: "Create a modern UI",
        priority: "High",
        dueDate,
        tags: ["work", "urgent", "design"],
      }}
    />
  );
}