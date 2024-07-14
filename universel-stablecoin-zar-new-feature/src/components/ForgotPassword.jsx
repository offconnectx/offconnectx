import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-8">

        <h2 className="text-2xl text-center mb-4 text-color-1">Password Reset</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
            {error}
          </div>
        )}
        {message && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative" role="alert">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input type="email" id="email" className="form-input mt-1 block w-full p-2 border rounded" ref={emailRef} required />
          </div>
          <Button
            disabled={loading}
            className=" w-full"
            type="submit"
          >
            Reset Password
          </Button>
        </form>
        <div className="text-center mt-3">
          <Link to="/login" className="text-color-1">Login</Link>
        </div>
      </div>
      <div className="text-center mt-2">
        Need an account? <Link to="/signup" className="text-color-1">Sign Up</Link>
      </div>
    </>
  );
}
