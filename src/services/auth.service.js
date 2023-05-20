import axios from "axios";

export const loginService = async (email, password) => {
  try {
    const {
      status,
      data: { foundUser, encodedToken },
    } = await axios.post("/api/auth/login", {
      email,
      password,
    });

    if (status === 200) {
      const user = {
        user: foundUser,
        token: encodedToken,
      };
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    }
  } catch (error) {
    console.error(error);
  }
};

export const signUpService = async (email, password, firstName, lastName) => {
  try {
    const {
      status,
      data: { createdUser, encodedToken },
    } = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });

    if (status === 201) {
      const user = { user: createdUser, token: encodedToken };
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    }
  } catch (error) {
    console.error(error);
  }
};
