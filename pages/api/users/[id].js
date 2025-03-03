export default async function handler(req, res) {
    const { id } = req.query; // Mengambil parameter ID dari URL
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();

    if (!user.id) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
}
