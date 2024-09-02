import app from "./firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";
import { FIREBASE_ERRORS } from "./firebaseErrors";

export const auth = getAuth(app);

// Logica de autenticación
export async function singInWithEmailAndPassword(email, password) {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("isLoggedIn", "true");
    return response;
  } catch (error) {
    const errorMessage =
      FIREBASE_ERRORS[error.code] || FIREBASE_ERRORS["default"];
    return errorMessage;
  }
}

// Logica de registro
export async function registerUserWithEmailAndPassword(email, password) {
  try {
    const response = await createUserWithEmailAndPassword(auth,email,password);
    // Enviar correo de verificación
    await sendEmailVerification(auth.currentUser);
    return response;
  } catch (error) {
    const errorMessage = FIREBASE_ERRORS[error.code] || FIREBASE_ERRORS["default"];
    return errorMessage;
  }
}

// Logica de logout
export async function logout() {
  try {
    await signOut(auth);
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
    return {
      success: true,
      message: "Logout successful",
    };
  } catch (error) {
    return {
      success: false,
      message: "Logout failed",
    };
  }
}

// Enviar correo de recuperación de contraseña
export async function sendPasswordReset(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    return {
      success: true,
      message: "Correo de recuperación de contraseña enviado",
    };
  } catch (error) {
    const errorMessage =
      FIREBASE_ERRORS[error.code] || FIREBASE_ERRORS["default"];
    return {
      success: false,
      message: errorMessage,
    };
  }
}

// Confirmar el restablecimiento de contraseña
export async function resetPassword(oobCode, newPassword) {
  try {
    await confirmPasswordReset(auth, oobCode, newPassword);
    return {
      success: true,
      message: "Contraseña restablecida con éxito",
    };
  } catch (error) {
    const errorMessage =
      FIREBASE_ERRORS[error.code] || FIREBASE_ERRORS["default"];
    return {
      success: false,
      message: errorMessage,
    };
  }
}

// Verificar si el correo está verificado
export async function isEmailVerified() {
  const user = auth.currentUser;
  if (user) {
    return user.emailVerified;
  }
  return false;
}