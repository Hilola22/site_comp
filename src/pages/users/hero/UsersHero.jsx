import React from "react";
import UsersView from "../../../components/users/UsersView";
import { useFetch } from "../../../hooks/useFetch";

const UsersHero = () => {
  const { data, loading, error } = useFetch("/users");

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return (
    <p className="text-center py-10 text-red-500">Error: {error.message}</p>
  );

  return (
    <div className="mt-20 container mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6 text-blue-500">
        Users
      </h2>
      <UsersView data={data} />
    </div>
  );
};

export default UsersHero;
