import { IoPencilOutline } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";
import AddCard from "./components/AddCard";

function List({ obj, isActive, setActiveListId }) {
  return (
    <div className="list w-[24%] min-h-[3rem] rounded px-2 py-3 bg-[rgb(226,232,240)]">
      <div className="header">
        <h1 className="flex justify-between items-center  mb-2">
          <span>{obj.name}</span>
          <span className="inline-flex items-center">...</span>
        </h1>
      </div>
      <ul>
        {obj.tasks.map((object) => (
          <li
            className="flex justify-between rounded p-2 shadow mb-2 bg-[rgb(248,250,252)] group"
            key={object.id}
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
