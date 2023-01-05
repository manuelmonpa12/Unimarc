import 'animate.css';

export default function  Navbar() {
  const img =
    "https://mir-s3-cdn-cf.behance.net/projects/404/02a3c0101677027.Y3JvcCw3MTAsNTU1LDYwNSwyNjI.png";

  return (
    <div>
      <div className="content-navbar ">
        <div className="navbar-uni">
          <div className="navbar-option">
            <div>
              <img src={img} className="logo-img animate__animated animate__backInDown" alt="Unimarc" />
              <button className="btn btn-outline-danger">
                <span>Categorias</span>
              </button>
              <button className="btn btn-outline-danger">
                <span>Ofertas</span>
              </button>
            </div>
            <div className="form-group mb-0">
              <input
                type="text"
                className="form-control"
                id="search"
                placeholder="Que prodcuto necesita hoy?"
              />
            </div>
            <div>
              <button className="btn btn-outline-danger">
                <span>Hola</span>
                <br />
                <span>Inicia sesión</span>
              </button>
              <button className="btn btn-outline-danger">
                <span>
                  Mis <br /> compras
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
