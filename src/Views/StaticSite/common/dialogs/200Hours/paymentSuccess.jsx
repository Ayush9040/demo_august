import Dialog from '@mui/material/Dialog';
import React, { useState } from 'react';
import './paymentSuccess.scss';
import NextButton from '../../buttons/200daya/next';

const PaymentSuccessPopup = ({ onSendValue }) => {
    const [isOpen, setOpen] = useState(true);
    const closeDialog = (value) => {
        setOpen(false);
        onSendValue(false)
    }

    return (
        <Dialog
            onClose={() => closeDialog(false)}
            open={isOpen}
            PaperProps={{
                sx: {
                    borderRadius: '30px', // Remove border radius
                    width: 'auto', // Set width
                    maxWidth: 'none', // Prevent default max-width limitation
                },
            }}
        >
            <div className='success-dialog'>
                <img src="images/21-days/dialog-success.png" alt="success-banner" />
                <div className='head'>Thank You for Joining Our TYI Community!</div>
                <div className='sub-head'>Embark on a journey of transformation and growth.
                    We wish you success and fulfillment in your yogic practice</div>
                <NextButton text="Close" onClick={() => closeDialog(false)} />
            </div>
        </Dialog >
    )
}

export default PaymentSuccessPopup;