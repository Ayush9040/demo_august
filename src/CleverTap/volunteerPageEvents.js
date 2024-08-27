const clevertap = window?.clevertap;

export const handleCTVolunteerClicked = (programNames) => {
  // if (window?.clevertap) {
    clevertap.event.push("View_Volunteer_Details", {
      "Volunteer_Programs": programNames.join(", "), // Joining all program names into a single string
      "Total_Programs": programNames.length, // Total number of programs
      // Add other relevant details here if necessary
    });

    console.log("View_Volunteer_Details event tracked", window.clevertap);
  // } else {
    //console.error("CleverTap is not initialized.");
  // }
};


export const handleCTSubmitVolunteerDetails = ({name, email, imageURL, resumeURL, volunteerCategory}) => {
    clevertap.event.push('Submit_Volunteer_Details', {
      "Name": name,
      "Email_ID": email,
      "Image_URL": imageURL,
      "Resume_URL": resumeURL,
      "Volunteer_Category": volunteerCategory,
    });
  };