import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import "./Phone.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";
import { PhoneCard } from "./PhoneCard";
import { useDisclose } from "../../hooks/useDisclose";
import { AddAndUpdateContact } from "../Modal/AddAndUpdateContact";
import { NotFoundContact } from "../Modal/NotFoundContact";

export const Phone = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const { onClose, onOpen, open } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contact");
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          setFilteredContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = async (event) => {
    const value = event.target.value.toLowerCase();

    try {
      const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(value)
      );
      setFilteredContacts(filteredContacts);
      return filteredContacts;
    } catch (error) {
      console.error("Error filtering contacts:", error);
      return [];
    }
  };

  return (
    <div>
      <div className="backcolor max-w-[370px] mx-auto py-5">
        <div className="rounded-md m-4 gap-2 h-[60px] flex items-center justify-center bg-white text-xl font-medium">
          <img src="/logos_firebase.svg" alt="" />
          <h1>Firebase Conatct App</h1>
        </div>
        <div className="flex relative m-4">
          <FiSearch className="absolute text-white text-3xl ml-1 top-1" />
          <input
            onChange={filterContacts}
            type="text"
            className="border-white bg-transparent rounded-md h-10 flex-grow pl-9 mr-2 text-white"
          />
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-3xl cursor-pointer text-white m-auto"
          />
        </div>
        <div className="m-4 flex flex-col gap-3">
          {filteredContacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            filteredContacts.map((contact) => (
              <PhoneCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdateContact open={open} onClose={onClose} />
      <ToastContainer position="bottom-center" />
    </div>
  );
};
