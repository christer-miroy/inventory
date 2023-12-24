import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        getUsers();
    }, [currentPage])

    const getUsers = (page = 1) => {
        setLoading(true);
        axiosClient.get(`/users?page=${currentPage}`)
        .then(({data}) => {
            setLoading(false);
            console.log("Users data:", data);
            setUsers(data.data);
            setTotalPages(data.meta.last_page);
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
        })
    }

    const onDelete = (u) => {
        if (!window.confirm(`Are you sure you want to delete this user?`)) {
            return;
        }

        axiosClient.delete(`/users/${u.id}`)
        .then(() => {
            getUsers();
        })
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>Users</h1>
        <Link to="/users/new" className="btn-add">New User</Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date Created</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {
                loading && (
                    <tbody>
                        <tr>
                            <td colSpan={4} className="text-center">
                                Loading...
                            </td>
                        </tr>
                    </tbody>
                )
            }
            {
                !loading && (
                    <tbody>
                        {Array.isArray(users) && users.length > 0 ? (
                        users.map(u => (
                            <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.created_at}</td>
                            <td>
                                <Link to={`/users/${u.id}`} className="btn-profile">
                                Profile
                                </Link>&nbsp;
                                <Link to={`/users/${u.id}`} className="btn-edit">
                                Edit
                                </Link>&nbsp;
                                <button onClick={ev => onDelete(u)} className="btn-delete">Delete</button>
                            </td>
                            </tr>
                        ))
                        ) : (
                        <tr>
                            <td colSpan="4" className="text-center">No users found</td>
                        </tr>
                        )}
                    </tbody>
                )
            }
        </table>

        {/* pagination */}
        {totalPages > 1 && (
            <div className="pagination">
                <span className="pagination-info">Page {currentPage} of {totalPages}</span>&nbsp;
                <div className="btn-pagination">
                    <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} className="btn-prev">Prev</button>&nbsp;
                    <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} className="btn-next">Next</button>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}
export default Users
