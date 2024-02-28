import React from "react";
import { db } from "../../config/firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Modal } from "./Modal";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Email is Invalid").required("Email is Required"),
});

export const AddAndUpdateContact = ({ onClose, open, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactsRef = collection(db, "contact");
      await addDoc(contactsRef, contact);
      onClose();
      toast.success("Contact Added Sucessfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactsRef = doc(db, "contact", id);
      await updateDoc(contactsRef, contact);
      onClose();
      toast.success("Updated Sucessfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal onClose={onClose} isOpen={open}>
      <Formik
        validationSchema={contactSchema}
        initialValues={
          isUpdate
            ? { name: contact.name, email: contact.email }
            : { name: "", email: "" }
        }
        onSubmit={(data) => {
          isUpdate ? updateContact(data, contact.id) : addContact(data);
        }}
      >
        <Form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field name="name" className="border h-10 px-2" />
            <div className="text-red text-xs">
              <ErrorMessage name="name" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" className="border h-10 px-2" />
            <div className="text-red text-xs">
              <ErrorMessage name="email" />
            </div>
          </div>
          <input
            type="submit"
            value={isUpdate ? "Update Contact" : "Add Contact"}
            className="bg-orange px-3 py-1.5 border self-end"
          />
        </Form>
      </Formik>
    </Modal>
  );
};
