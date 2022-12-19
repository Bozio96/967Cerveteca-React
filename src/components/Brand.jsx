import "./styles/brand.css";

export function Brand() {
  const logo =
    "https://res.cloudinary.com/dnfil5isx/image/upload/v1662515798/imagenes/logo_k84eyr.png";
  return (
    <>
      <div className="logoYtitulo">
        <img className="logo" src={logo} alt="Logo de 967"></img>
        <h2 className="titulo"> 967-Cerveteca</h2>
      </div>
    </>
  );
}
