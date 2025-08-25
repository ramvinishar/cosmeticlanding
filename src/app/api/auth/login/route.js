import connectToDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";


export async function POST(req) {
  const { email, password } = await req.json();
  await connectToDB();

  const user = await User.findOne({ email });
  if (!user) return new Response("User not found", { status: 404 });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return new Response("Invalid password", { status: 401 });

  return new Response(JSON.stringify({ message: "Login successful", userId: user._id }), {
    status: 200,
  });
}
