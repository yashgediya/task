import axios from "axios";
import React, { useContext, useEffect, useMemo, useState } from "react";
import "./userDetails.css";
import { useNavigate } from "react-router";
import UserContext from "../userContext";

const UserList = () => {
  const navigate = useNavigate();

  const { users, setUsers } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 5;

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${limit}`
      );
      setUsers && setUsers(response.data);
      const total = response.headers["x-total-count"];
      setTotalPages(Math.ceil(total / limit));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useMemo(() => {
    fetchUsers();
  }, [currentPage]);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="userlist-container">
      <h1 className="userlist-title">Users List</h1>
      <table className="userlist-table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
        {users &&
          users.map((user: any) => {
            return (
              <tr>
                <td>{user?.id}</td>
                <td>{user?.name}</td>
                <td>
                  <button
                    className="userlist-view-button"
                    onClick={() =>
                      navigate(`/users/${user?.id}`, { state: user })
                    }
                  >
                    View
                  </button>
                </td>
              </tr>
            );
          })}
      </table>

      <div className="pagination-container">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
