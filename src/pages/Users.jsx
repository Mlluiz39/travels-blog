import React, { useState, useEffect } from "react";
import api from "@/shared/services/api";
import { faker } from "@faker-js/faker";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await api.get(`/users`);
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleUserClick = async (user) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`);

    MySwal.fire({
      html: `
      <div class="flex flex-col items-center">
      <h1 class="text-lg font-medium">Dados do Usuário:</h1>
      <h3>Personal data</h3>
        <p class="text-sm text-gray-500">Name: ${user.name}</h2>
        <p class="text-sm text-gray-500">Username: ${user.username}</p>
        <p class="text-sm text-gray-500">Email: ${user.email}</p>
        <p class="text-sm text-gray-500">Phone: ${user.phone}</p>
        <p class="text-sm text-gray-500">Website: ${user.website}</p>
        <h3>Street</h3>
        <p class="text-sm text-gray-500">Street: ${user.address.street}</p>
        <p class="text-sm text-gray-500">Suite: ${user.address.suite}</p>
        <p class="text-sm text-gray-500">City: ${user.address.city}</p>
        <p class="text-sm text-gray-500">Zipcode: ${user.address.zipcode}</p>
        <h3>Company</h3>
        <p class="text-sm text-gray-500">Name: ${user.company.name}</p>
        <p class="text-sm text-gray-500">catchPhrase: ${user.company.catchPhrase}</p>
        <p class="text-sm text-gray-500">bs: ${user.company.bs}</p>
        </div>
        `
    });
  };

  return (
    <div>
      <h1 className="text-3xl text-sky-500 my-4 flex justify-center">
        Lista de Usuários
      </h1>

      <ul className="m-6 grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <section
            className="p-3 rounded-md flex flex-col justify-center items-center bg-white"
            key={user.id}
          >
            <div className="p-3 flex justify-center items-center gap-3">
              <div>
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={faker.image.avatar()}
                  alt="image profile" />
              </div>
              <div>
                <h1 className="text-base font-medium">{user.name}</h1>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="border-t border-gray-200 w-full flex justify-center my-3">
              <footer>
                <button
                  className="bg-blue-600 p-2 rounded-md mt-6 text-white"
                  onClick={() => handleUserClick(user)}
                >
                  Ver mais
                </button>
              </footer>
            </div>
          </section>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
