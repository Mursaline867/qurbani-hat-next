"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const USER_STORAGE_KEY = "qurbanihat-user";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedUser = localStorage.getItem(USER_STORAGE_KEY);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to load user from storage", error);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (user) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    } catch (error) {
      console.error("Failed to save user to storage", error);
    }
  }, [user]);

  const loginUser = async (email, password) => {
    setUser({
      email,
      displayName: email.split("@")[0],
      photoURL: "https://i.postimg.cc/7Z4BNK5K/user.png",
    });
  };

  const registerUser = async (email, password, name, photo) => {
    setUser({
      email,
      displayName: name,
      photo: photo || "https://i.postimg.cc/7Z4BNK5K/user.png",
      photoURL: photo || "https://i.postimg.cc/7Z4BNK5K/user.png",
    });
  };

  const logoutUser = async () => {
    setUser(null);
  };

  const updateUserInfo = async (name, photo) => {
  const finalPhoto = photo || user?.photoURL || "https://i.postimg.cc/7Z4BNK5K/user.png";

  setUser((prev) => ({
    ...prev,
    name,
    displayName: name,
    photo: finalPhoto,
    image: finalPhoto,
    photoURL: finalPhoto,
  }));
};

  const googleLogin = async () => {
    alert("Google login requires OAuth setup");
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, registerUser, logoutUser, googleLogin, updateUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);