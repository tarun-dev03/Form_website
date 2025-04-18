"use client";
import React, { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { database } from "../firebase";
import { ref, set } from "firebase/database";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [registration, setRegistration] = useState("");

  const formSubmit = async () => {
    if (name === "" || email === "" || phone === "" || registration === "") {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      await set(ref(database, `registration/${email.split("@")[0]}`), {
        Name: name,
        Email: email,
        Phone: phone,
        RegNo: registration,
      });

      toast.success("Data submitted successfully!");

      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setRegistration("");
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col border-2 border-gray-300 rounded-lg p-5 gap-y-5">
      <Input
        label="Name"
        placeholder="Enter your name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        label="Phone no."
        placeholder="Enter your phone number"
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Input
        label="Email"
        placeholder="Enter your email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        label="Registration no."
        placeholder="Enter your registration number"
        type="number"
        value={registration}
        onChange={(e) => setRegistration(e.target.value)}
      />

      <Button
        className="w-fit px-3"
        variant="ghost"
        color="success"
        onPress={formSubmit}
      >
        SUBMIT
      </Button>

      <ToastContainer />
    </div>
  );
};

export default Register;
