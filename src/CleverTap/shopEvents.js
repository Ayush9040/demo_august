// addToCart.js
export const handleCTAddToCart = ({
  eventName,
    productName,
    productId,
    productUrl,
    productCategory,
    productPrice,
    quantity,
    stockAvailability,
    checkoutUrl,
    pageName,
    gender,
    productSize,
    language,
    material,
    color,
    printed,
}) => {

    // let Gender;
    //     if (gender.toLowerCase() === 'tshirt') {
    //         Gender = 'Male';
    //     } else if (gender.toLowerCase() === 'track pant') {
    //         Gender = 'Female';
    //     } else {
    //         Gender = 'NA';
    //     }

        


    if (window?.clevertap) {
        // Track the Add to Cart event with dynamic data
        window.clevertap.event.push(eventName, {
            "Product Name": productName,
            "Product ID": productId,
            "Product URL": productUrl,
            "Product Category": productCategory,
            "Product Price": productPrice,
            "Quantity": quantity,
            "Stock Availability": stockAvailability,
            "Checkout_URL": checkoutUrl,
            "Page_Name": pageName,
            "Gender": gender,
            "Product Size": productSize,
            "Language": language,
            "Material": material,
            "Color": color,
            "Printed": printed,
        });

        console.log('Add to Cart event tracked with dynamic data.', window?.clevertap.event);
    } else {
        console.error('CleverTap is not initialized.');
    }
};

export const trackProductClicked = ({
    productName,
    productId,
    category,
    productPrice,
    quantity,
    stockAvailability,
    nextPageUrl,
    productUrl,
    checkoutUrl,
    color,
    discount,
    discountedPrice,
    gender,
    productSize,
    language,
    material,
    printed
}) => {

    if (window?.clevertap) {
        // Track the Product Clicked event with dynamic data
        window.clevertap.event.push('Product_Clicked', {
            "Product Name": productName,
            "Product ID": productId,
            "Category": category,
            "Product Price": productPrice,
            "Quantity": quantity,
            "Stock Availability": stockAvailability,
            "Next_Page_URL": nextPageUrl,
            "Product_URL": productUrl,
            "Checkout_URL": checkoutUrl,
            "Color": color,
            "Discount": discount,
            "Discounted Price": discountedPrice,
            "Gender": gender,
            "Product Size": productSize,
            "Language": language,
            "Material": material,
            "Printed": printed,
        });

        console.log('Product Clicked event tracked with dynamic data.', window?.clevertap.event);
    } else {
        console.error('CleverTap is not initialized.');
    }
};



export const handleCTBuyNowStep1 = ({
  eventName,
    productName,
    productId,
    category,
    productPrice,
    quantity,
    stockAvailability,
    checkoutUrl,
    pageName,
    productUrl,
    gender,
    color,
    discount,
    discountedPrice,
    productSize,
    language,
    material,
    printed
  }) => {
    // Trigger CleverTap event when the user proceeds with Book Now Step 2
    if (window?.clevertap) {
      window.clevertap.event.push(eventName, {
        "Product Name": productName,
        "Product ID": productId,
        "Category": category,
        "Product Price": productPrice,
        "Quantity": quantity,
        "Stock Availability": stockAvailability,
        "Checkout_URL": checkoutUrl,
        "Page_Name": pageName,
        "Product URL": productUrl,
        "Gender": gender,
        "Color": color,
        "Discount": discount ? discount : "N/A",
        "Discounted Price": discountedPrice ? discountedPrice : "N/A",
        "Product Size": productSize,
        "Language": language,
        "Material": material,
        "Printed": printed,
        "date_time_timestamp": new Date().toISOString(),
      });
  
      console.log("Book_Now_Step2 event tracked", window.clevertap);
    } else {
      console.error("CleverTap is not initialized.");
    }
  };
  


// Function to trigger the CleverTap Charged event
export const handleCTCheckoutCompleted = (cartItems) => {
  if (!cartItems || cartItems.length === 0) {
    console.error("Cart is empty");
    return;
  }

  // Prepare the array of items to be sent in the Charged event
  const items = cartItems.map(item => ({
    "Product Name": item.name || 'N/A',
    "Product ID": item._id,
    "Category": item.categoryId.name || 'N/A',
    "Product Price": item.price,
    "Quantity": item.quantity || 1,
    // "Stock Availability": ,
    // "Price": item.price || 0,
    // Add other product details if needed
  }));

  // Calculate the total cart value
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Trigger the Charged event
  window.clevertap.event.push("Charged", {
    "event_name": "Checkout_Completed",
    "Amount": totalAmount, // Total transaction amount
    // "Payment mode": "Credit Card", // Change if needed
    "Charged ID": new Date().getTime(), // Example unique ID, you can replace with an actual order ID
    "Items": items, // Array of items in the cart
  });

  console.log("Charged event triggered with cart details");
};

export const handleCTCheckoutCompleted1 = (cartItems) => {
    if (!cartItems || cartItems.length === 0) {
      console.error("Cart is empty");
      return;
    }
  
    // Prepare the array of items to be sent in the Charged event
    const items = cartItems.map(item => ({
      "Product Name": item.name || 'N/A',
      "Product ID": item._id,
      "Category": item.categoryId.name || 'N/A',
      "Product Price": item.price,
      "Quantity": item.quantity || 1,
      // "Stock Availability": ,
      // "Price": item.price || 0,
      // Add other product details if needed
    }));
  
    // Calculate the total cart value
    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
    // Trigger the Charged event
    window.clevertap.event.push("Charged", {
      "event_name": "Checkout_Completed",
      "Amount": totalAmount, // Total transaction amount
      // "Payment mode": "Credit Card", // Change if needed
      'checkout_url': window.location.href,
      "Charged ID": new Date().getTime(), // Example unique ID, you can replace with an actual order ID
      "Items": items, // Array of items in the cart
    });
  
    console.log("Charged event triggered with cart details");
  };


  export const handleCTCheckoutCompleted2 = (cartItems) => {
    if (!cartItems || cartItems.length === 0) {
      console.error("Cart is empty");
      return;
    }
  
    // Prepare the array of items to be sent in the Charged event
    const items = cartItems.map(item => ({
      "Product Name": item.name || 'N/A',
      "Product ID": item._id,
      "Category": item.categoryId.name || 'N/A',
      "Product Price": item.price,
      "Quantity": item.quantity || 1,
      // "Stock Availability": ,
      // "Price": item.price || 0,
      // Add other product details if needed
    }));
  
    // Calculate the total cart value
    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
    // Trigger the Charged event
    window.clevertap.event.push("Charged", {
      "event_name": "Checkout_Completed_1",
      "Amount": totalAmount, // Total transaction amount
      // "Payment mode": "Credit Card", // Change if needed
      'checkout_url': window.location.href,
      "Charged ID": new Date().getTime(), // Example unique ID, you can replace with an actual order ID
      "Items": items, // Array of items in the cart
    });
  
    console.log("Charged event triggered with cart details");
  };


  export const handleCTProductPaymentCompleted = ({
    Name,
    Address,
    Country,
    State,
    City,
    Pincode,
    cartItems
}) => {
    if (!cartItems || cartItems.length === 0) {
      console.error("Cart is empty");
      return;
    }
  
    // Prepare the array of items to be sent in the Charged event
    const items = cartItems.map(item => ({
      "Product Name": item.name || 'N/A',
      "Product ID": item._id,
      "Category": item.categoryId.name || 'N/A',
      "Product Price": item.price,
      "Quantity": item.quantity || 1,
      // "Stock Availability": ,
      // "Price": item.price || 0,
      // Add other product details if needed
    }));
  
    // Calculate the total cart value
    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
    // Trigger the Charged event
    window.clevertap.event.push("Charged", {
      "event_name": "Product_Payment_Completed",
      "Amount": totalAmount, // Total transaction amount
      // "Payment mode": "Credit Card", // Change if needed
      'checkout_url': window.location.href,
      "Name": Name,
    "Address": Address,
    "Country": Country,
    "State": State,
    "City": City,
    "Pincode": Pincode,
    "Payment_Status": "Success",
      "Charged ID": new Date().getTime(), // Example unique ID, you can replace with an actual order ID
      "Items": items, // Array of items in the cart
    });
  
    console.log("Charged event triggered with cart details");
  };


  export const handleCTCheckoutFailed = ({
    cartItems
}) => {
    if (!cartItems || cartItems.length === 0) {
      console.error("Cart is empty");
      return;
    }
  
    // Prepare the array of items to be sent in the Charged event
    const items = cartItems.map(item => ({
      "Product Name": item.name || 'N/A',
      "Product ID": item._id,
      "Category": item.categoryId.name || 'N/A',
      "Product Price": item.price,
      "Quantity": item.quantity || 1,
      // "Stock Availability": ,
      // "Price": item.price || 0,
      // Add other product details if needed
    }));
  
    // Calculate the total cart value
    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
    // Trigger the Charged event
    window.clevertap.event.push("Charged", {
      "event_name": "Checkout_Failed",
      "Amount": totalAmount, // Total transaction amount
      // "Payment mode": "Credit Card", // Change if needed
      'checkout_url': window.location.href,
    "Payment_Status": "Failed",
      "Charged ID": new Date().getTime(), // Example unique ID, you can replace with an actual order ID
      "Items": items, // Array of items in the cart
    });
  
    console.log("Charged event triggered with cart details");
  };

