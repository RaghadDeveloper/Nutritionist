
import { tableData } from '../Data/PriceTableData'
import PriceTableRow from '../PriceTableRow/PriceTableRow';
function PricingFeatures() {
  return (
    <section className="main-container mb-150">
      <PriceTableRow tableData={tableData} />
    </section>
  )
}
export default PricingFeatures;

