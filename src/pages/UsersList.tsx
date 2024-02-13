import React, { useState, useEffect } from "react";

import { IUser, getUsers } from "@/services/user";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);

      const result = await getUsers(); // Add params if needed
      if (result.code === "success") {
        setUsers(result.data);
      } else {
        setError(result.error.message);
      }

      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <div>No users found.</div>
      )}
    </div>
  );
};

export default UserList;
