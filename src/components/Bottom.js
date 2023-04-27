import Button from '@mui/material/Button';
import React from 'react'
import styles from '../styles/IPhone13Mini22.module.css'

function Bottom() {
    return (
        <div className='bottom'>
            <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
                <div><h1>Total amount</h1></div>
                <div>
                    
                    <div className={styles.div1}><h5>{`₹2500 `}</h5></div>
                    <div className={styles.div2}><h2>{`₹2250 `}</h2></div>
                </div>

            </div>
            <div>
                <Button variant='contained' style={{ width: '500px' }} >Pay 2250</Button>
            </div>
        </div>
    )
}

export default Bottom