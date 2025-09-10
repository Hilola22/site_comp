import React from "react";
import { useNavigate } from "react-router-dom";

const UsersView = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 items-center mx-auto">
      {data?.users?.map((user) => (
        <div
          key={user.id}
          className="max-w-[300px] bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-200 overflow-hidden"
        >
          <div className="flex justify-center mt-6">
            <img
              src={user.image}
              alt={user.username}
              className="w-24 h-24 rounded-3xl object-cover shadow-md"
            />
          </div>
          <div className="flex flex-col items-center p-6 ">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {user.username || `${user.firstName} ${user.lastName}`}
            </h3>
            <p className="text-gray-600 mb-2 text-sm">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-gray-500 text-xs mb-4 truncate">{user.email}</p>
            <button
              onClick={() => navigate(`/users/${user.id}`)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white text-sm font-semibold rounded-xl shadow-md transition-colors"
            >
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersView;
