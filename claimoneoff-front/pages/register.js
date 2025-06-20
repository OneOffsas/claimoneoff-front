import { useState } from "react";
import { apiCall } from "../utils/api";

export default function Register() {
  const [societe, setSociete] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError(""); setSuccess("");
    const res = await apiCall("register", { societe, nom, prenom, email, password, role:"Client" });
    if (res.status === "success") {
      setSuccess("Compte cr��?! Connectez-vous.");
      setTimeout(() => window.location.href = "/login", 1500);
    } else {
      setError(res.message || "Erreur � la cr�ation du compte.");
    }
  }

  return (
    <div className="card">
      <img src="/logo.png" width={120} height={60} alt="Logo" className="logo" />
      <h2>Cr�er un compte client</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Soci�t�" value={societe} onChange={e=>setSociete(e.target.value)} required />
        <input placeholder="Nom" value={nom} onChange={e=>setNom(e.target.value)} required />
        <input placeholder="Pr�nom" value={prenom} onChange={e=>setPrenom(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit">Cr�er le compte</button>
      </form>
      <p><a href="/login">? Retour � la connexion</a></p>
      {error && <div style={{color: "red"}}>{error}</div>}
      {success && <div style={{color: "green"}}>{success}</div>}
    </div>
  );
}