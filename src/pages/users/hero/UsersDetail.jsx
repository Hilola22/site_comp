import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";

const UsersDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/users/${id}`);

  console.log(data);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">{error.message}</div>
    );

  if (!data) return <div className="text-center py-10">User not found</div>;

  return (
    <div className="max-w-2xl mx-auto shadow-lg rounded-3xl p-10 mt-10 border border-gray-200">
      <div className="flex flex-col items-center text-center gap-6">
        <img
          src={data?.image}
          alt={data?.username}
          className="w-32 h-28 rounded-3xl object-cover shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{data?.username}</h2>
          <p className="text-gray-600 text-lg">
            {data?.firstName} {data?.lastName}
          </p>
        </div>
        <div className="w-full text-left rounded-2xl p-6 shadow-inner bg-white">
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {data?.email}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> {data?.phone}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Company:</span>{" "}
            {data?.company?.name}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Address:</span>{" "}
            {data?.address?.address}, {data?.address?.city}
          </p>
        </div>
        <Link className="text-blue-600 hover:underline" to="/users">
          {"<-- Back to Users"}
        </Link>
      </div>
    </div>
  );
};

export default UsersDetail;
