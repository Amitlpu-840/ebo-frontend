import React from 'react'
import styles from '../styles/IPhone13Mini22.module.css'
function Tthirdcard() {
    return (
        <div className='card-2'>
            <div>
                <div className={styles.completeYourPayment} style={{display:'flex', justifyContent:'center'}} >
                    Complete your payment now and get ₹250 off extra
                </div>
                <div className={styles.payNowAnd}>
                    Pay now and avoid last minute hassle or pay at your doorstep
                </div>
            </div>
            <div style={{ display: 'flex',justifyContent:'space-around' }}>
                <div className='pay-box'>
                    <div style={{border: '0.4px solid var(--color-gainsboro-100',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <div className={styles.payAdvance}>Pay advance</div>
                        <button className={styles.iphone13Mini22Child2} >₹ 125 off now</button>
                        {/* <div className={styles.offNow1}></div> */}
                    </div>
                    <br/>
                    <div style={{border: '0.4px solid var(--color-gainsboro-100',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <div className={styles.payAdvance}>Pay Total</div>
                        <button className={styles.rectangleButton} >₹ 250 off now</button>
                        {/* <div className={styles.offNow1}></div> */}
                    </div>
                </div>
                <div>
                    <img
                        className={styles.bd43fec43e7A8909709f802f75Icon}
                        alt=""
                        src="/29095bd43fec43e7a8909709f802f755@2x.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default Tthirdcard