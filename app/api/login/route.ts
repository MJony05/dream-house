import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return new Response(
      JSON.stringify({ error: "JWT_SECRET is not defined" }),
      { status: 500 }
    );
  }

  if (username === "admin" && password === "admin") {
    const token = jwt.sign({ username, isAdmin: true }, secret, {
      expiresIn: "1h",
    });
    return new Response(JSON.stringify({ token }), { status: 200 });
  } else if (username === "user" && password === "user") {
    const token = jwt.sign({ username, isAdmin: false }, secret, {
      expiresIn: "1h",
    });
    return new Response(JSON.stringify({ token }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
    });
  }
}
