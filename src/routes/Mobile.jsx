import Boom from "../img/boom.png";
export default function Mobile() {
  return (
    <div className="mobile">
      <h3 className="heading">Desarrollo Mobile</h3>
      <div>
        <img src={Boom} alt="boom-mobile" className="boom" />
      </div>
      <div className="p-mobile">
        <p>
          Actualmente trabajo en el desarrollo de una App de Tablet y otra de
          mobile.
        </p>
        <p>
          <span>Boom</span> es una App mobile de pubs y restaurantes.
        </p>
        <p>
          Boom te facilita la compra de bebidas ¡sin la necesidad de esperar a
          ser atendido!
        </p>
        <p className="p-span"> ¡Demosle vida a tu idea!</p>
      </div>
    </div>
  );
}
