import { IoPencilOutline } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";
import AddCard from "./components/AddCard";
import { useState } from "react";

function List({ obj, isActive, setActiveListId }) {
  const [tasks, setTasks] = useState(obj.tasks);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropId) => {
    e.preventDefault();
    const dragId = e.dataTransfer.getData("text/plain");
    const dragIndex = tasks.findIndex((task) => task.id === parseInt(dragId));
    const dropIndex = tasks.findIndex((task) => task.id === dropId);
    const updatedTasks = [...tasks];
    const [draggedTask] = updatedTasks.splice(dragIndex, 1);
    updatedTasks.splice(dropIndex, 0, draggedTask);
    setTasks(updatedTasks);
  };

  return (
    <div className="list w-[24%] min-h-[3rem] rounded px-2 py-3 bg-[rgb(226,232,240)]">
      <div className="header">
        <h1 className="flex justify-between items-center  mb-2">
          <span>{obj.name}</span>
          <span className="inline-flex items-center">...</span>
        </h1>
      </div>
      <ul>
        {tasks.map((object) => (
          <li
            className="flex justify-between rounded p-2 shadow mb-2 bg-[rgb(248,250,252)] group"
            key={object.id}
            draggable
            onDragStart={(e) => handleDragStart(e, object.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, object.id)}
          >
            <span>{object.task}</span>
            <span className="invisible group-hover:visible flex items-center gap-1">
              <IoPencilOutline className="inline cursor-pointer h-5 w-8 p-1 hover:bg-gray-200" />
              <CiTrash className="inline cursor-pointer h-5 w-8 p-1 hover:bg-gray-200" />
            </span>
          </li>
        ))}
      </ul>
      <div className="footer">
        {isActive ? (
          <AddCard setAddCardVisible={() => setActiveListId(null)} />
        ) : (
          <button onClick={() => setActiveListId(obj.id)}>
            + Add Another Card
          </button>
        )}
      </div>
    </div>
  );
}

export default List;
