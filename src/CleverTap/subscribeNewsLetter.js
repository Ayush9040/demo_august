

export const handleCTSubscribeNewsletterClicked = ({
    email,
    date
}) => {

    if (window.clevertap) {
        window.clevertap.event.push("Subscribe_Newsletter", {
           "Email_ID": email,
            "Date_Time": new Date().toISOString(),
        });
        console.log("SubscribeNewsletterClicked event pushed to CleverTap");
    } else {
        console.error("CleverTap is not initialized");
    }
  };