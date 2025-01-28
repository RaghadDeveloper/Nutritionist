
import { tableData } from '../Data/Pdata'
import PriceTableRow from '../PriceTableRow/PriceTableRow';
function PricingFeatures() {
  return (
    <>
    <div className="main-container mb-150">
      <PriceTableRow tableData={tableData} />
    </div>
    </>
  )
}
export default PricingFeatures;

