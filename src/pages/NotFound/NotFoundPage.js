import NotFoundBro from "../../assets/404 Error-bro.svg";

export function NotFoundPage() {
  return (
    <main className="display-flex-column vertical-middle">
      <img src={NotFoundBro} alt="404-error" className="img-res" />
    </main>
  );
}
