
// import { Col, Row } from "react-bootstrap";
// import "./PricingFeatures.css";
// import PriceTableRow from "../PriceTableRow/PriceTableRow";
// import imgTrue from "../../assets/images/pricing/true.png";
// import imgFalse from "../../assets/images/pricing/false.png";

// export default function PricingFeatures() {

//   const PricingData = [
//     {
//       titlePircing1: "Features",
//       titlePircing2: "Free Plan",
//       titlePircing3: "Free Plan",
//       titlePircing4: "Free Plan",
//     },


//     {
//       infoPircing: "Mobile App Access",

//       img1: imgTrue,
//       img2: imgTrue,
//       img3: imgTrue,
//     },
//     {
//       infoPircing: "Email Support",

//       img1: imgTrue,
//       img2: imgTrue,
//       img3: imgTrue,
//     },
//     {
//       infoPircing: "One -on One Video Consultations",

//       img1: imgFalse,
//       img2: imgTrue,
//       img3: imgTrue,
//     },
//     {
//       infoPircing: "Recipe Recommendations and Meal Planning",
//       img1: imgFalse,
//       img2: imgTrue,
//       img3: imgTrue,
//     },
//     {
//       infoPircing: "Priority Support",
//       img1: imgFalse,
//       img2: imgTrue,
//       img3: imgTrue,
//     },
//     {
//       infoPircing: "Educational Resources and Guides",

//       img1: imgFalse,
//       img2: imgTrue,
//       img3: imgTrue,
//     },
//     {
//       infoPircing: "Advanced Progress Tracking Tools",

//       img1: imgFalse,
//       img2: imgFalse,
//       img3: imgTrue,
//     },

//     {
//       infoPircing: "Customized Meal Plans and Recipe Suggestions",

//       img1: imgFalse,
//       img2: imgFalse,
//       img3: imgTrue,
//     },

//     {
//       infoPircing: "Phone Support",

//       img1: imgFalse,
//       img2: imgFalse,
//       img3: imgTrue,
//     },
//   ];
//   return (
//     <>
//         {PricingData.map((pircing, index) => {
//           return (
//             <>
//             <Row>
//             <PriceTableRow
//               key={index}
//               titlePircing1={pircing.titlePircing1}
//               titlePircing2={pircing.titlePircing2}
//               titlePircing3={pircing.titlePircing3}
//               titlePircing4={pircing.titlePircing4}
//               infoPircing={pircing.infoPircing}
//               img1={pircing.img1}
//               img2={pircing.img2}
//               img3={pircing.img3}
//               />
//               </Row></>
//           );
//         })}
//       {/*
//         <Col>
//           <PricingFeatures/>
//         </Col>
//       </Row> */}
//     </>
//   );
// }
import { PricingData } from '../Data/Pdata'

import PriceTableRow from '../PriceTableRow/PriceTableRow';

function PricingFeatures() {
  return (
    <>

              
      {PricingData.map((pircing, index) => {
        return (
          <PriceTableRow
            key={index}
            titlePircing1={pircing.titlePircing1}
            infoPircing={pircing.infoPircing}
            infoPircing1={pircing.infoPircing1}
            infoPircing2={pircing.infoPircing2}
            infoPircing3={pircing.infoPircing3}
            infoPircing4={pircing.infoPircing4}
            infoPircing5={pircing.infoPircing5}
            infoPircing6={pircing.infoPircing6}
            infoPircing7={pircing.infoPircing7}
            infoPircing8={pircing.infoPircing8}
            infoPircing9={pircing.infoPircing9}
            titlePircing2={pircing.titlePircing2}
            titlePircing3={pircing.titlePircing3}
            titlePircing4={pircing.titlePircing4}
            img1={pircing.img1}

          />
        );
      })}

    </>
  )
}
export default PricingFeatures;

