import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Button from "./Button";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-8">
        <h2 className="text-2xl text-center mb-4 text-color-1">Sign Up</h2>
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
          <div className="mb-4">
            <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-600">
              Password Confirmation
            </label>
            <input
              type="password"
              id="password-confirm"
              className="form-input mt-1 block w-full p-2 border rounded text-black"
              ref={passwordConfirmRef}
              required
            />
          </div>
          <Button
            disabled={loading}
            className="w-full mb-6"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
      <div className="text-center mt-4">
        Already have an account? <Link to="/login" className="text-color-1">Log In</Link>
      </div>
    </>
  );
}
