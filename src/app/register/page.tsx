"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Link from "next/link";

import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebase/firebase";
import {
  useCreateUserWithEmailAndPassword,
  useVerifyBeforeUpdateEmail,
  loading,
  error,
} from "react-firebase-hooks/auth";

export default function Home() {
  const [value, setValue] = useState("");
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const router = useRouter();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password)
      return alert("Please don't leave empty inputs? Hvala! :)");
    // console.log(inputs);
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <main>
      <div className="container mx-auto card mt-40 flex items-center justify-center flex-col gap-10">
        <div className="w-full max-w-[500px] h-[400px] bg-lilac border-[0.5px] rounded-[10px] p-8 border-whisper">
          <h2>Login</h2>

          <form className="w-full" onSubmit={(e) => handleRegister(e)}>
            <InputText
              id="email"
              type="email"
              name="email"
              placeholder="Username"
              className="w-full mb-3"
              onChange={(e) => handleChangeInput(e)}
            />
            <Password
              inputId="password"
              name="password"
              feedback={false}
              placeholder="Password"
              inputStyle={{ width: "100%" }}
              toggleMask
              onChange={(e) => handleChangeInput(e)}
            />

            <Button
              label={loading ? "Loading..." : "Login"}
              className="w-full"
            />
          </form>
        </div>

        <div className="w-full max-w-[500px] h-[150px] bg-lilac border-[0.5px] rounded-[10px] p-8 border-whisper"></div>
      </div>
    </main>
  );
}
