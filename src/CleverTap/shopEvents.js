// addToCart.js
export const handleCTAddToCart = ({
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
        window.clevertap.event.push("add_to_cart", {
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



export const handleCTCheckoutCompleted = ({
    checkoutUrl,
    paymentStatus,
    productName,
    productId,
    productUrl,
    category,
    productPrice,
    quantity,
    stockAvailability,
    gender,
    color,
    discount,
    discountedPrice,
    productSize,
    language,
    material,
    printed
}) => {
    if (window?.clevertap) {
        window.clevertap.event.push("Checkout_Completed", {
            "Checkout_URL": checkoutUrl,
            "Payment_Status": paymentStatus,
            "Product_Name": productName,
            "Product_ID": productId,
            "Product_URL": productUrl,
            "Category": category,
            "Product_Price": productPrice,
            "Quantity": quantity,
            "Stock_Availability": stockAvailability,
            "Gender": gender,
            "Color": color,
            "Discount": discount,
            "Discounted_Price": discountedPrice,
            "Product_Size": productSize,
            "Language": language,
            "Material": material,
            "Printed": printed
        });
        console.log('Checkout_Completed event tracked:');
    } else {
        console.error('CleverTap is not initialized.');
    }
};
