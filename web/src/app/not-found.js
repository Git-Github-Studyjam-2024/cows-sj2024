"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <div className="h-screen w-full flex flex-col gap-4 items-center justify-center text-4xl text-green-900 ">
        <div>
          Oops.. Mooo... mooo.. 🐄 <br />
        </div>
        <div>Sorry Cows couldn't find this page for you.</div>
        <button
          className="btn btn-success"
          onClick={() => {
            router.push("/");
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
