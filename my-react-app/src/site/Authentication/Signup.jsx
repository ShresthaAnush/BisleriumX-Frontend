import React from "react"; // Import React
import { Form } from "react-bootstrap"; // Import Form from react-bootstrap
import "./Signup.css";

function Signup() {
  return (
    <>
      <div>
        <div className="signup-box"> {/* Use className instead of class */}
          <h1>Sign Up</h1>
          <h4>It's free and only takes a minute</h4>
          <Form>
            <label>First Name</label>
            <input type="text" placeholder="" />
            <label>Last Name</label>
            <input type="text" placeholder="" />
            <label>Phone number</label>
            <input type="phone" required placeholder="Phone number" />
            <label>Email</label>
            <input
              className="input" // Use className instead of class
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <label>Password</label>
            <input type="password" placeholder="" />
            <label htmlFor="image">Profile Picture</label> {/* Use htmlFor instead of for */}
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              required
            />
            <input
              type="submit"
              value="Submit"
              style={{ marginTop: "1.875rem" }} // Use double curly braces for inline styles
            />
          </Form>
          <p>
            By clicking the Submit button, you agree to our <br />
            <a href="#">Terms and Condition</a> and{" "}
            <a href="#">Policy Privacy</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
