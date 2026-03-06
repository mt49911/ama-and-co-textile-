// Initialize EmailJS with your public key
emailjs.init("AmBc4DDM9-g-yodkb");

function sendOrderEmail(orderDetails) {
  // Create HTML for product images
  let imagesHtml = '';
  if (orderDetails.productImages && orderDetails.productImages.length > 0) {
    imagesHtml = '<h3>Product Images:</h3><div style="display: flex; flex-wrap: wrap; gap: 10px;">';
    orderDetails.productImages.forEach(img => {
      imagesHtml += `<img src="${img}" style="max-width: 200px; height: auto; border-radius: 8px; margin: 5px;">`;
    });
    imagesHtml += '</div>';
  }

  // Template for business (amaandcotextile@gmail.com)
  const templateParamsToBusiness = {
    to_email: "amaandcotextile@gmail.com",
    from_name: orderDetails.name,
    from_phone: orderDetails.phone,
    product: orderDetails.productName,
    quantity: orderDetails.quantity,
    state: orderDetails.state,
    lga: orderDetails.lga,
    address: orderDetails.address,
    description: orderDetails.description,
    order_id: orderDetails.orderId,
    from_email: orderDetails.email,
    images_html: imagesHtml
  };

  // Template for customer (auto-reply) - replace with your actual Template ID
  const templateParamsToCustomer = {
    to_email: orderDetails.email,
    from_name: orderDetails.name,
    from_phone: orderDetails.phone,
    product: orderDetails.productName,
    quantity: orderDetails.quantity,
    state: orderDetails.state,
    lga: orderDetails.lga,
    address: orderDetails.address,
    description: orderDetails.description,
    order_id: orderDetails.orderId,
    from_email: orderDetails.email,
    images_html: imagesHtml
  };

  // Send both emails
  return Promise.all([
    emailjs.send("service_mjc22u7", "template_sn601gw", templateParamsToBusiness),
    emailjs.send("service_mjc22u7", "template_sn601gw", templateParamsToCustomer) // Replace with actual auto-reply ID
  ]);
}
