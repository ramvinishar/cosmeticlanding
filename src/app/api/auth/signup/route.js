import connect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs"; // ✅ use bcryptjs instead of bcrypt

export async function POST(req) {
  await connect();

  const { name, email, password } = await req.json();

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({
      name,
      email,
      password: hashedPassword, // store hashed password
    });

    return new Response(JSON.stringify({ message: "User created", user }), {
      status: 201,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
