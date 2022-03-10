import blog from "../img/blog.png";
export default function Api() {
  return (
    <>
      <h3 className="heading">¿Qué es un servicio API?</h3>
      <div className="description">
        <p>
          API, “Application Programming Interface” es la forma en que dos
          aplicaciones o servicios se comunican entre sí.
        </p>
        <p>
          {" "}
          Una API se encarga de procesar y proveer información a sitios webs o
          Mobile que consumen la API. Desde recibir información desde base de
          datos, autenticación de usuario, hasta manipulación, procesamiento y
          creación de archivos.
        </p>
      </div>
      <div>
        <h3 className="heading">Beneficios de API</h3>
      </div>
      <div>
        <ul className="totem-list">
          <li className="list1">
            Permiten la reutilización de código, reduciendo los tiempos y costes
            asociados al desarrollo de aplicaciones.{" "}
          </li>
          <li className="list2">
            Comunican de información entre sí, de una forma más rápida.
          </li>
        </ul>
      </div>
      <div className="api-img">
        <h4 className="parrafo">Recursos disponibles sobre API en </h4>
        <div className="blog">
          <a href="http://blog.edwinpiston.com/api" target="_blank">
            <img src={blog} alt="blog" />
          </a>
        </div>
      </div>
    </>
  );
}
