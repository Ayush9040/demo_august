export const handleCTPublicationSubscribeEvent = (magazineName) => {
    if (window?.clevertap) {
        window.clevertap.event.push("Publication_Subscribe", {
            "Magazine_Name": magazineName
        });
        console.log('Subscribe event tracked:', magazineName);
    } else {
        console.error('CleverTap is not initialized.');
    }
};

export const handleCTHardCopyIndiaInitiated = ({
    name,
    emailId,
    phoneNumber,
    postalAddress,
    pincode,
    amount,
    paymentMode,
    status,
    productName,
    productUrl
}) => {
    if (window?.clevertap) {
        window.clevertap.event.push("HardCopy(India)_Initiated", {
            "Name": name,
            "Email_ID": emailId,
            "Phone_Number": phoneNumber,
            "Postal_Address": postalAddress,
            "Pincode": pincode,
            "Amount": amount,
            "Payment_Mode": paymentMode,
            "Status": status,
            "Product_Name": productName,
            "Product_URL": productUrl
        });
        console.log('HardCopy(India)_Initiated event tracked:');
    } else {
        console.error('CleverTap is not initialized.');
    }
};



export const handleCTHardCopyIndiaSubmitted = ({
    name,
    emailId,
    phoneNumber,
    postalAddress,
    amount,
    paymentMode,
    status,
    productName,
    productUrl
}) => {
    if (window?.clevertap) {
        window.clevertap.event.push("HardCopy(India)_Submitted", {
            "Name": name,
            "Email_ID": emailId,
            "Phone_Number": phoneNumber,
            "Postal_Address": postalAddress,
            "Amount": amount,
            "Payment_Mode": paymentMode,
            "Status": status,
            "Product_Name": productName,
            "Product_URL": productUrl
        });
        console.log('HardCopy(India)_Submitted event tracked:');
    } else {
        console.error('CleverTap is not initialized.');
    }
};

export const handleCTHardCopyInternationalInitiated = ({
    name,
    emailId,
    phoneNumber,
    postalAddress,
    amount,
    paymentMode,
    status,
    productName,
}) => {
    if (window?.clevertap) {
        window.clevertap.event.push("HardCopy(International)_Initiated", {
            "Name": name,
            "Email_ID": emailId,
            "Phone_Number": phoneNumber,
            "Postal_Address": postalAddress,
           
            "Amount": amount,
            "Payment_Mode": paymentMode,
            "Status": status,
            "Product_Name": productName,
        
        });
        console.log('HardCopy(International)_Initiated event tracked:');
    } else {
        console.error('CleverTap is not initialized.');
    }
};


export const handleCTHardCopyInternationalSubmitted = ({
    name,
    emailId,
    phoneNumber,
    postalAddress,
    amount,
    paymentMode,
    status,
    productName,
}) => {
    if (window?.clevertap) {
        window.clevertap.event.push("HardCopy(International)Submitted", {
            "Name": name,
            "Email_ID": emailId,
            "Phone_Number": phoneNumber,
            "Postal_Address": postalAddress,
           
            "Amount": amount,
            "Payment_Mode": paymentMode,
            "Status": status,
            "Product_Name": productName,
        
        });
        console.log('HardCopy(International)Submitted event tracked:');
    } else {
        console.error('CleverTap is not initialized.');
    }
};