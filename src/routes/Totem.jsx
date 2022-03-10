import totem from "../img/totem.png";
import check from "../img/check.png";

export default function Totem() {
  return (
    <>
      <div>
        <p className="description">
          Creación de TOTEM interactivo, integrando servicios de usuario como de
          encuestas, solicitudes o sistemas publicitarios.
        </p>
        <div className="totem-img">
          <img src={totem} alt="totem" className="totem" />
        </div>
        <h3 className="heading">Beneficios del TOTEM</h3>
        <div className="main">
          <div className="check">
            <img src={check} alt="" className="check1" />
            <img src={check} alt="" className="check2" />
            <img src={check} alt="" className="check3" />
            <img src={check} alt="" className="check4" />
          </div>
          <ul className="totem-list">
            <li className="list1">
              Vertical: La disposición de forma vertical favorece la
              comunicación y la integración de mensajes de rápida lectura.{" "}
            </li>
            <li className="list2">
              Presencia: los mensajes tienen un marco que los hace destacar.
            </li>
            <li className="list3">
              Comodidad: los contenidos se reproducen de manera automática, lo
              que ahorra tiempo a los comerciantes.{" "}
            </li>
            <li className="list4">
              Branding: los tótems permiten incorporar tu logotipo para
              asociarlo a los contenidos que emites y así brindar un mejor
              servicio entre empresa y cliente.{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
