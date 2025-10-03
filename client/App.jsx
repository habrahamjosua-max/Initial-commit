import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [form, setForm] = useState({ name: "", phone: "", state: "", quantity: 1 });
  const [response, setResponse] = useState(null);

  async function handlePurchase(e) {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/api/purchase", form);
    setResponse(res.data);
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🎟️ Rifas Toluca - Pulsar RR200 2025</h1>
      <form onSubmit={handlePurchase}>
        <input placeholder="Nombre" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Teléfono" onChange={e => setForm({ ...form, phone: e.target.value })} />
        <input placeholder="Estado" onChange={e => setForm({ ...form, state: e.target.value })} />
        <input type="number" min="1" max="10" defaultValue="1"
               onChange={e => setForm({ ...form, quantity: e.target.value })} />
        <button type="submit">Comprar</button>
      </form>

      {response && <p>Boletos asignados: {response.tickets.join(", ")}</p>}
    </div>
  );
}
