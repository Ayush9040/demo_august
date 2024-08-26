

export const handleCTSubscribeNewsletterClicked = ({
    email,
    date
}) => {

    if (window.clevertap) {
        window.clevertap.event.push("Subscribe_Newsletter_Clicked", {
           "Email_ID": email,
            "Date_Time":date
        });
        console.log("SubscribeNewsletterClicked event pushed to CleverTap");
    } else {
        console.error("CleverTap is not initialized");
    }
  };