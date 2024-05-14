import "@/app/styles/styles.css";
import Link from "next/link";

export default function Button() {
  return (
    <div class="buttons-user">
      <Link href="/auth/login" class="btn-register">
        Registrarte
      </Link>
      <Link href="/auth/register" class="btn-login btn-full">
        Iniciar sesión
      </Link>
    </div>
  );
}
