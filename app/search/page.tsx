"use client";

import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
};

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://67665e96410f849996577919.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1 className={"my-5 text-center text-3xl font-semibold text-zinc-700"}>User List</h1>
      <div className={"my-5"}>
        <input type={"text"} onChange={(e) => setSearch(e.target.value)} className={"w-full rounded-lg border border-zinc-400 p-2 text-zinc-700 focus:border-zinc-700 focus:outline-none"} placeholder={"Search"} />
      </div>
      <table className={"w-full text-sm"}>
        <thead className={"text-xs"}>
          <tr className={"bg-zinc-800 text-white"}>
            <th className={"px-6 py-3"}>No</th>
            <th className={"px-6 py-3"}>Name</th>
            <th className={"px-6 py-3"}>Email</th>
            <th className={"px-6 py-3"}>Address</th>
            <th className={"px-6 py-3"}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => {
              return search.toLowerCase() === "" ? user : user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()) || user.address.toLowerCase().includes(search.toLowerCase()) || user.phone.toLowerCase().includes(search.toLowerCase());
            })
            .map((user, index) => (
              <tr key={user.id}>
                <td className={"px-6 py-3"}>{index + 1}</td>
                <td className={"px-6 py-3"}>{user.name}</td>
                <td className={"px-6 py-3"}>{user.email}</td>
                <td className={"px-6 py-3"}>{user.address}</td>
                <td className={"px-6 py-3"}>{user.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
