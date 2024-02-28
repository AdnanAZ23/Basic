import React from "react";
import { useDisclose } from "../../hooks/useDisclose";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { db } from "../../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { IoMdTrash } from "react-icons/io";
import { AddAndUpdateContact } from "../Modal/AddAndUpdateContact";

export const PhoneCard = ({ contact }) => {
  const { onOpen, onClose, open } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      toast.success("Contact Deleted Sucessfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      key={contact.id}
      className="bg-yellow flex justify-between p-2 rounded-lg items-center"
    >
      <div className="flex gap-1">
        <HiOutlineUserCircle className="text-orange text-4xl" />
        <div className="">
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>
      <div className="flex gap-1">
        <RiEditCircleLine
          onClick={onOpen}
          className="text-3xl text-red cursor-pointer"
        />
        <IoMdTrash
          onClick={() => deleteContact(contact.id)}
          className="text-purple text-3xl cursor-pointer"
        />
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        open={open}
        onClose={onClose}
      />
    </div>
  );
};
