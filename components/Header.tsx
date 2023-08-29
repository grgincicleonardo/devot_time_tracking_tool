"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.svg";
import { auth } from "../firebase/firebase";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

const Header = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const [user] = useAuthState(auth);
  const handleLogout = () => {
    signOut();
  };

  return (
    <header className="w-full bg-dark h-28 rounded-b-[1.38em] flex items-center">
      <nav className="container mx-auto w-full flex justify-between items-center">
        <div className="flex gap-x-2 items-center">
          <Link href="/" className="cursor-pointer">
            <Image
              src={logo}
              alt=""
              priority={true}
              className="max-w-[10.125rem]"
            />
          </Link>
          <h2 className="text-2xl text-white mt-[10px]">Tracking tool</h2>
        </div>

        <div className="text-ghost hidden lg:flex text-base">
          <Link href="/" className="flex gap-x-2 items-center px-12">
            <i
              className="pi pi-clock"
              style={{ fontSize: "1.5rem", color: "#F9F9FD" }}
            />
            Trackers
          </Link>
          <Link href="/history" className="flex gap-x-2 items-center px-12">
            <i
              className="pi pi-history"
              style={{ fontSize: "1.5rem", color: "#F9F9FD" }}
            />
            History
          </Link>
          {!user && (
            <Link
              href="/login"
              className="flex gap-x-2 items-center px-12 cursor-pointer"
              onClick={handleLogout}
            >
              <i
                className="pi pi-user"
                style={{ fontSize: "1.5rem", color: "#F9F9FD" }}
              />
              Login
            </Link>
          )}

          {user && (
            <div
              className="flex gap-x-2 items-center px-12 cursor-pointer"
              onClick={handleLogout}
            >
              <i
                className="pi pi-power-off"
                style={{ fontSize: "1.5rem", color: "#F9F9FD" }}
              />
              Logout
            </div>
          )}
        </div>

        <div className="lg:hidden flex">
          <i
            className="pi pi-bars"
            style={{ fontSize: "1.5rem", color: "#F9F9FD" }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
