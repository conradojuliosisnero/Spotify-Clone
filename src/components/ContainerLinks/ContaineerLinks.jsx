
import "@/app/styles.css";

export default function ContaineerLinks() {
  return (
    <div class="container-links">
      <div class="container-links-legal">
        <a href="https://www.spotify.com/ec/legal/">Legal</a>
        <a href="https://www.spotify.com/ec/privacy/">Centro de Privacidad</a>
        <a href="https://www.spotify.com/ec/legal/privacy-policy/">
          Política de Privacidad
        </a>
        <a href="https://www.spotify.com/ec/legal/cookies-policy/">Cookies</a>
        <a href="https://www.spotify.com/ec/legal/privacy-policy/#s3">
          Información sobre los anuncios
        </a>
      </div>

      <button class="btn-language">
        <i class="fa-solid fa-globe"></i>
        Español de España
      </button>
    </div>
  );
}
