"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebase/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Toast } from "primereact/toast";

export default function Home() {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password)
      return alert("Please fill all fields");
    try {
      const newUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.push("/");
    } catch (error: any) {}
  };

  return (
    <main>
      <div className="container mx-auto card mt-40 flex items-center justify-center flex-col gap-10">
        <div className="w-full max-w-[500px] h-[400px] bg-lilac border-[0.5px] rounded-[10px] p-8 border-whisper">
          <h2>Login</h2>

          <form className="w-full" onSubmit={handleLogin}>
            <InputText
              id="email"
              type="email"
              name="email"
              placeholder="Username"
              className="w-full mb-3"
              onChange={handleChangeInput}
            />
            <Password
              inputId="password"
              name="password"
              feedback={false}
              placeholder="Password"
              inputStyle={{ width: "100%" }}
              className="w-full mb-3"
              toggleMask
              onChange={handleChangeInput}
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
