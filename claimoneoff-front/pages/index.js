export default function Home() {
  return (
    <div className="card">
      <img src="/logo.png" width={120} height={60} alt="Logo" className="logo" />
      <h2>Bienvenue sur ClaimOneOff</h2>
      <p>
        Portail de gestion des r�clamations logistiques e-commerce.<br/>
        <a href="/login"><b>Se connecter</b></a> ou <a href="/register"><b>Cr�er un compte</b></a>
      </p>
    </div>
  );
}