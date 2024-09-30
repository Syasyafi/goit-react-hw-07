import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <div className={css.wraper}>
        <FaUser />
        <div>{name}</div>
      </div>

      <div className={css.wraper}>
        <FaPhone />
        <div>{number}</div>
      </div>
      <button type="button" className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
