// trackDonateInitiated.js

export const handleCTDonateInitiated = ({
    amount,
    firstName,
    lastName,
    emailId,
    dob,
    phone,
    country,
    paymentMode,
    taxExemption,
    acceptTerms
}) => {

    if (window?.clevertap) {
        // Track the Donate Initiated event with dynamic data
        window.clevertap.event.push('Donate_Initiated', {
            "Amount": amount,
            "First_Name": firstName,
            "Last_Name": lastName,
            "Email_ID": emailId,
            "DOB": dob,
            "Phone": phone,
            "Country": country,
            // "Payment_Mode": paymentMode,
            "80G tax exemption": taxExemption,
            "Accept Terms": acceptTerms,
        });

        console.log('Donate Initiated event tracked with dynamic data.', window?.clevertap.event);
    } else {
        console.error('CleverTap is not initialized.');
    }
};

// trackDonateCompleted.js

export const handleCTDonateCompleted = ({
    amount,
    firstName,
    lastName,
    emailId,
    dob,
    phone,
    country,
    paymentMode,
    taxExemption,
    acceptTerms,
    status
}) => {

    if (window?.clevertap) {
        // Track the Donate Completed event with dynamic data
        window.clevertap.event.push('Donate_Completed', {
            "Amount": amount,
            "First_Name": firstName,
            "Last_Name": lastName,
            "Email_ID": emailId,
            "DOB": dob,
            "Phone": phone,
            "Country": country,
            "Payment_Mode": paymentMode,
            "80G tax exemption": taxExemption,
            "Accept Terms": acceptTerms,
            "Status": status,
        });

        console.log('Donate Completed event tracked with dynamic data.', window?.clevertap.event);
    } else {
        console.error('CleverTap is not initialized.');
    }
};

