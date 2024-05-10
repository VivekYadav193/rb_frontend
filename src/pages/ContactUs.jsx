import  { useState } from "react";
const backgroundImage =
  "https://plus.unsplash.com/premium_photo-1669048776605-28ea2e52ae66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    queryType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission. For example, send formData to your backend.
    console.log(formData);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Opacity
      }}
    >
      <div className="bg-white bg-opacity-90 p-6 rounded-md">
        <h1 className="text-2xl font-bold mb-5">Contact Us</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="block mb-2">
            Query Type:
            <select
              name="queryType"
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">--Please choose an option--</option>
              <option value="booking">Booking</option>
              <option value="feedback">Feedback</option>
              <option value="support">Support</option>
            </select>
          </label>
          <label className="block mb-2">
            Message:
            <textarea
              name="message"
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <input
            type="submit"
            value="Submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
