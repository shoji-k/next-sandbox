"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export function Admin() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  if (status === "loading") {
    return <p>Hang on there...</p>;
  }

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <iframe src="/api/movies/list" />
        <button onClick={() => signOut()}>Sign out</button>
        <Image
          src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png"
          alt="sample"
          width={500}
          height={500}
        />
      </>
    );
  }

  return (
    <>
      <p>Not signed in.</p>
      <iframe src="/api/movies/list" />
      <button onClick={() => signIn("github")}>Sign in</button>
    </>
  );
}
