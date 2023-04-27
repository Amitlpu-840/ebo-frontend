import React from 'react'
import styles from '../styles/IPhone13Mini22.module.css'
function SecondCard() {
    return (

        <div className='card-1'>
            <div className='card-1-div' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }} >
                    <div >
                        <span>Ordered on:</span>
                        <span > Tue, Jan 24</span>
                    </div>
                    <div >
                        <span>
                            <span>Booking Id:</span>
                            <span>{` `}</span>
                        </span>
                        <span>
                            <span className={styles.span}>28312912</span>
                        </span>
                    </div>
                </div>
                <div className={styles.total2500}>
                    <span>
                        <span>Total</span>
                    </span>
                    <span>
                        <span>{` `}</span>
                        <span className={styles.span1}>₹2500</span>
                    </span>
                </div>

            </div>
            <div className='card-1-div2' style={{ display: 'flex', alignContent: 'center' }} >
                <img
                    className={styles.original21Icon}
                    alt=""
                    src="/1665576984-original-21@2x.png"
                />
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', left: '9px', width: '100%' }}>
                    <div>Black Theme Anniversary</div>
                    <div className={styles.bookedForFriContainer}>
                        <span>
                            <span>Booked for:</span>
                        </span>
                        <span className={styles.fri27JanAt700900Pm}>
                            <span>{` `}</span>
                            <span
                                className={styles.span}
                            >{`Fri, 27 Jan at 7:00 - 9:00 pm `}</span>
                        </span>
                    </div>
                </div>
                <div>

                </div>
            </div >
            <div className='card-1-div2' style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    className={styles.a6d9d05c201441dc9e9a463039Icon}
                    alt=""
                    src="/a6d9d05c201441dc9e9a463039f9d321@2x.png"
                />
                Pay ₹2500 at your doorstep
            </div>
        </div>

    )
}

export default SecondCard