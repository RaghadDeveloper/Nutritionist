// import { Col, Row } from 'react-bootstrap';
import imgTrue from "../../assets/images/pricing/true.png";
import imgFalse from "../../assets/images/pricing/false.png";
import "./PriceTableRow.css";
export default function PriceTableRow({
  titlePircing1,
  titlePircing2,
  titlePircing3,
  titlePircing4,
  infoPircing,
  infoPircing1,
  infoPircing2,
  infoPircing3,
  infoPircing4,
  infoPircing5,
  infoPircing6,
  infoPircing7,
  infoPircing8,
  infoPircing9,
  // img1,
}) {
  return (
    <section className="sh-cards  d-flex">
      <div className="sh-card-feature d-flex flex-direction-column">
        <h5 className="sh-card-title ">{titlePircing1}</h5>

        <p>{infoPircing}</p>
        <p>{infoPircing1}</p>
        <p>{infoPircing2}</p>
        <p>{infoPircing3}</p>
        <p>{infoPircing4}</p>
        <p>{infoPircing5}</p>
        <p>{infoPircing6}</p>
        <p>{infoPircing7}</p>
        <p>{infoPircing8}</p>
        <p>{infoPircing9}</p>
      </div>
      <div className="sh-card-plane d-flex flex-direction-column">
        <h5 className="sh-card-title ">{titlePircing2}</h5>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgFalse} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgFalse} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgFalse} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgFalse} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgFalse} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgFalse} alt="" />
        </div>
        <img src={imgFalse} alt="" />
      </div>
      <div className="sh-card-plane d-flex flex-direction-column">
        <h5 className="sh-card-title ">{titlePircing3}</h5>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgFalse} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgFalse} alt="" />
        </div>
        <img src={imgFalse} alt="" />
      </div>
      <div className="sh-card-plane-last d-flex flex-direction-column">
        <h5 className="sh-card-title ">{titlePircing4}</h5>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <div className="sh-tf-img">
          <img src={imgTrue} alt="" />
        </div>
        <img src={imgTrue} alt="" />
      </div>
    </section>
  );
}
