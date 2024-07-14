import { useRef, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Button from "./Button";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory(); // Use useHistory instead of useLocation
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl text-center mb-4 text-color-1">Log In</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input type="email" id="email" className="form-input mt-1 block w-full p-2 border rounded text-black" ref={emailRef} required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input type="password" id="password" className="form-input mt-1 block w-full p-2 border rounded text-black" ref={passwordRef} required />
        </div>
        <Button
          disabled={loading}
          className=" w-full"
          type="submit"
        >
          Log In
        </Button>
      </form>
      <div className="text-center mt-3">
        <Link to="/forgot-password" className="text-color-1">Forgot Password?</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup" className="text-color-1">Sign Up</Link>
      </div>
    </div>
  );
}
