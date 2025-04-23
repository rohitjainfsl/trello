import { IoIosClose } from "react-icons/io";
function AddCard({ setAddCardVisible }) {
  return (
    <>
      <textarea placeholder="Enter a title for this card..."></textarea>
      <button>Add Card</button>
      <IoIosClose onClick={() => setAddCardVisible((prev) => !prev)} />
    </>
  );
}
export default AddCard;
