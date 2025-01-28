import './PriceCard.css'

export default function PriceCard({ isHomePricing, title1, text1, describtion1, price1, month1, btn1, row1, row2, row3, row4, addP, row5, Note, CardNote }) {
  return (
    <div className={isHomePricing ? 'PriceCard' : 'PriceCard1'}>
      <div className='W0-TextContainer'>
        <h3 className='fw-600 fs-30-24-22 mb-0'>{title1}</h3>
        <p className='fs-500 fs-18-16-14 mb-0'>{text1}</p>
      </div>
      {isHomePricing && <p className='WO-describtion fw-500 fs-18-16-14 mb-0'>{describtion1}</p>}
      {!isHomePricing && <div>
        <div className='WO-RowContainer'>
          <div className='WO-Row'>
            <p className='fw-500 fs-18-16-14'>{row1}</p>
          </div>
          <div className='WO-Row'>
            <p className='fw-500 fs-18-16-14'>{row2}</p>
          </div>
          <div className='WO-Row'>
            <p className='fw-500 fs-18-16-14'>{row3}</p>
          </div>
          <div className='WO-Row'>
            <p className='fw-500 fs-18-16-14'>{row4}</p>
          </div>
          {addP && <div className='WO-Row'>
            <p className='fw-500 fs-18-16-14'>{row5}</p>
          </div>}
        </div>
        {Note && <div className='WO-CardNote'>
          <p className='fw-500 fs-18-16-14'>{CardNote}</p>
        </div>}
      </div>}

      <div className='WO-bottomContainer'>
        <div className='WO-subContainer1'>
          <p className='fw-700 fs-50-40 mb-0'>{price1}</p>
          <p className='fw-500 fs-18-16 mb-0'>{month1}</p>
        </div>
        <button className='WO-Btn fw-600'>{btn1}</button>
      </div>
    </div>
  )
}
