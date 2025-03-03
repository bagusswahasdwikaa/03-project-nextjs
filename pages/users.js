import React from 'react';

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/users'); // Mengambil data dari API lokal
    const users = await res.json();

    return {
        props: { users }, // Mengirim data ke komponen sebagai prop
    };
}

const UsersPage = ({ users }) => {
    return (
        <div>
            <h1>Daftar Pengguna</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;
