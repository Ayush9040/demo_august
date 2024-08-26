export const handleCTEnquireNutriDietInitiated = (data) => {
    clevertap.event.push("Enquire_Nutri_Diet_Initiated", {
      "Name": data.name,
      "Email_ID": data.email,
      "Phone_No": data.phoneNo,
      "Country": data.country,
      "City": data.city,
      "Payment_Mode": data.paymentMode,
      "Month": data.month,
      "Program_Type": data.programType,
      "Status": data.status,
      "Amount": data.amount,
    });
  };