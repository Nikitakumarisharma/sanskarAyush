import { useState } from "react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/sendLead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    setStatus(result.success ? "✅ Message sent successfully!" : "❌ Failed to send. Please try again.");
  };

  return (
    <div className="card shadow-md border-0 p-4 ">
      <h4 className="text-center  fw-bold mb-4">Get In Touch</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contact" className="form-label fw-medium">
            Contact (Phone or Email)
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="Phone or Email"
            required
            className="form-control"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            required
            rows="2"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Send Message
        </button>

        {status && (
          <div className="alert alert-info mt-3 text-center small mb-0 py-2">
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default LeadForm;
