import React from 'react';

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map(user => ({
        params: { id: user.id.toString() },
    }));

    return { paths, fallback: false }; // fallback false berarti hanya path yang sudah dibuat yang akan ditampilkan
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/users/${params.id}`);
    const user = await res.json();

    return {
        props: { user },
    };
}

const UserDetail = ({ user }) => {
    return (
        <div>
            <h1>Detail Pengguna</h1>
            <p><strong>Nama:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Telepon:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
        </div>
    );
};

export default UserDetail;
