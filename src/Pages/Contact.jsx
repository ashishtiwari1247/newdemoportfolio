import React from "react";
import "./Contact.css";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contactbox" id="contact">
      <div>
        <h1> Contact Us</h1>
        <p> Drop a message and let's connect! </p>
      </div>{" "}
      <br />
      <hr />
      <div className="contactdiv">
        <div className="contact">
          <h3 className="text">
            <h3>
              <FaHome /> Address: <br /> Marihan Mirzapur UP 231309
            </h3>{" "}
            <br />
            <h3>
              <IoCall /> Mobile : <br />
              8081040036
            </h3>{" "}
            <br />
            <h3>
              {" "}
              <MdMarkEmailRead /> Email: <br />
              ashishtiwariap78@gmail.com
            </h3>
          </h3>
        </div>
        <div className="contactinfo">
          <h1> Send Message</h1>
          <form action="">
            <input type="text" placeholder="Full Name" className="address" />
            <br />
            <input type="email" placeholder="Email" className="email" />
            <br />
            <input
              className="comment"
              type="fild"
              placeholder="Please Type Your Message...."
            ></input>
            <button className="submit"> Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
