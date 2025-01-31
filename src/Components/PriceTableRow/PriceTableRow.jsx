import imgTrue from "../../assets/images/pricing/true.png";
import imgFalse from "../../assets/images/pricing/false.png";
import "./PriceTableRow.css";
export default function PriceTableRow({ tableData }) {
  return (
    <section className="sh-sectiontabel">
      <div className="sh-innertable">
        <table className="w-100 sh-table">
          <thead>
            <tr>
              <th>
                <div className="sh-cardheader text-start ms-0">Features</div>
              </th>
              {tableData.plans.map((plan, index) => (
                <th key={index} className="sh-left text-center">
                  <div className="sh-cardheader">{plan.name}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="sh-tbody">
            {tableData.features.map((feature, index) => (
              <tr className="sh-tr" key={index}>
                <td className="sh-feature sh-bottom fw-500">{feature}</td>
                {tableData.plans.map((plan, planIndex) => (
                  <td className="sh-check sh-bottom sh-left" key={planIndex}>
                    <img className="img-status" src={plan.features[index] ? imgTrue : imgFalse} alt="" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
