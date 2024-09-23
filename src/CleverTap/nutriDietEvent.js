const clevertap = window?.clevertap;

export const handleCTEnquireNutriDietInitiated = ({
  Name,
Email_ID,
Phone_No,
Country,
City,
Payment_Mode,
Month,
Program_Type,
Status,
Amount,
}) => {
    clevertap.event.push("Enquire_Nutri_Diet_Initiated", {
      "Name": Name,
      "Email_ID": Email_ID,
      "Phone_No": Phone_No,
      "Country": Country,
      "City": City,
      "Payment_Mode": Payment_Mode,
      "Month": Month,
      "Program_Type": Program_Type,
      "Status": Status,
      "Amount": Amount,
    });
  };

  export const handleCTEnquireNutriDietCompleted = ({
    event_name,
    name,
    emailId,
    phoneNo,
    country,
    city,
    paymentMode,
    month,
    programType,
    status,
    amount,
  }) => {
    if (window?.clevertap) {
      window.clevertap.event.push(event_name, {
        "Name": name,
        "Email_ID": emailId,
        "Phone_No": phoneNo,
        "Country": country,
        "City": city,
        "Payment_Mode": paymentMode,
        "Month": month,
        "Program_Type": programType,
        "Status": status,
        "Amount": amount,
      });
  
      console.log("Enquire_Nutri_Diet_Completed event tracked", window.clevertap);
    } else {
      console.error("CleverTap is not initialized.");
    }
  };
  