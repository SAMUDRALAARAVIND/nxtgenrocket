import React, { useEffect, useState } from "react";
import "./users.scss";

export const AllContacts = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const columns = results[0] ? Object.keys(results[0]) : [];

    useEffect(() => {
        (async function () {
            try {
                const response = await fetch("https://contact-service-b9wn.onrender.com/contact/nxtgen/all");
                const results = await response.json();
                setError('');
                setResults(results);
            }
            catch (err) {
                setError(err.message ?? "Something went wrong");
            }
        })();
    }, []);

    return (
        <div>
            {error && <h2>{error}</h2>}
            <h2>Registered Users:</h2>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            {columns.map((column) => <th key={column}>{column}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            results.map((user) => {
                                return (
                                    <tr key={user._id}>
                                        {
                                            columns.map((column, index) => {
                                                return <td key={index}>
                                                    {user[column]}
                                                </td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}