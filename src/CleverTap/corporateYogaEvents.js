
export const handleCTCorporateYogaInitiated = (emailId, dateTime, contact, designation, companyName, message) => {
    window.clevertap.event.push("CorporateYoga_Initiated", {
        "Email_ID": emailId,
        "Date_Time": dateTime,
        "Contact": contact,
        "Designation": designation,
        "Company_Name": companyName,
        "Message": message,
    });
};

export const handleCTCorporateYogaSubmitEvent = (email, dateTime, contact, designation, companyName, message, status) => {
    if (window.clevertap) {
        window.clevertap.event.push("CorporateYoga_Submit", {
            "Email_ID": email,
            "Date_Time": dateTime,
            "Contact": contact,
            "Designation": designation,
            "Company Name": companyName,
            "Message": message,
            "Status": status
        });
        console.log("CorporateYoga_Submit event pushed to CleverTap");
    } else {
        console.error("CleverTap is not initialized");
    }
};