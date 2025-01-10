import './PriceCard.css'

export default function PriceCard({ isHomePricing, title1, text1, describtion1, price1, month1, btn1, row1, row2, row3, row4, addP, row5, Note, CardNote }) {
  return (
    <div className={isHomePricing ? 'PriceCard' : 'PriceCard1'}>
      <div className='W0-TextContainer'>
        <h3>{title1}</h3>
        <p>{text1}</p>
      </div>
      {isHomePricing && <p className='WO-describtion'>{describtion1}</p>}
      {!isHomePricing && <div>
        <div className='WO-RowContainer'>
          <div className='WO-Row'>
            <p>{row1}</p>
          </div>
          <div className='WO-Row'>
            <p>{row2}</p>
          </div>
          <div className='WO-Row'>
            <p>{row3}</p>
          </div>
          <div className='WO-Row'>
            <p>{row4}</p>
          </div>
          {addP && <div className='WO-Row'>
            <p>{row5}</p>
          </div>}
        </div>
        {Note && <div className='WO-CardNote'>
          <p>{CardNote}</p>
        </div>}
      </div>}

      <div className='WO-bottomContainer'>
        <div className='WO-subContainer1'>
          <p>{price1}</p>
          <p>{month1}</p>
        </div>
        <button className='WO-Btn'>{btn1}</button>
      </div>
    </div>
  )
}
