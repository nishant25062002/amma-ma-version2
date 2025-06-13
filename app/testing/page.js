"use client";
import { Button } from "@/components";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("✅ Message sent!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus(`❌ Failed: ${data.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 max-w-4xl mx-auto bg-[#28282888]"
    >
      <input
        name="name"
        placeholder="name"
        value={form.name}
        onChange={handleChange}
        required
        className="border "
      />
      <input
        name="email"
        placeholder="email"
        value={form.email}
        onChange={handleChange}
        required
        className="border "
      />
      <textarea
        name="message"
        placeholder="message"
        value={form.message}
        onChange={handleChange}
        required
        className="border "
      />
      <Button type="submit" secondary>
        Send
      </Button>
      <p>{status}</p>
    </form>
  );
}
