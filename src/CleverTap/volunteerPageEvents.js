export const handleCTVolunteerClicked = (volunteerData) => {
    clevertap.event.push("View_Volunteer_Details", {
      "Volunteer_Program": volunteerData.program,
      "Teacher/Expertise": volunteerData.expertise,
      // Add other relevant details here
    });
  };


export const handleCTSubmitVolunteerDetails = (name, email, imageURL, resumeURL, volunteerCategory) => {
    clevertap.event.push('Submit_Volunteer_Details', {
      "Name": name,
      "Email_ID": email,
      "Image_URL": imageURL,
      "Resume_URL": resumeURL,
      "Volunteer_Category": volunteerCategory,
    });
  };