export default function  SubNavbar() {
  const imgLocation =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_6Ew4okRG8zfQE4NzqEstUAaho1CpcZ7eQ&usqp=CAU";

  return (
    <div className="content-subNav">
    <div>
      <div className="subNav-option pl-2">
        <img src={imgLocation} className="icon-img" alt="Unimarc" />
        <span>¿Dónde quieres recibir tu compra?</span>
      </div>
      <div className="subNav-option">
        <span>Cupones</span>
        <span>UniPay</span>
        <span>Locales y horarios</span>
        <span>Centro de ayuda</span>
      </div>
    </div>
  </div>
  );
}
