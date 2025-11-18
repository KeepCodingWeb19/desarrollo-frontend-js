export const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:8000/auth/login', {
      method: "POST",
      body: JSON.stringify({
        username: email,
        password,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message, { cause: "data" });
    }

  } catch (error) {
    const errorMessage = error.cause === "data" ? error.message : "Error iniciando sesión";
    throw new Error(errorMessage)
  }
}