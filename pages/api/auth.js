export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (username === "admin" && password === "password123") {
      res.status(200).json({ token: "valid-token" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } else {
    res.status(405).end();
  }
}
