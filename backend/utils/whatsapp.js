import axios from 'axios';

const META_API_VERSION = process.env.META_API_VERSION || 'v18.0';
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const META_PHONE_NUMBER_ID = process.env.META_PHONE_NUMBER_ID;

export const sendWelcomeMessage = async (phone) => {
  if (!phone || !META_ACCESS_TOKEN || !META_PHONE_NUMBER_ID) {
    console.log('Missing phone or WhatsApp credentials');
    return;
  }

  // Normalize phone: add default country code +91 if missing and remove spaces
  let normalizedPhone = phone.replace(/\s/g, '');
  if (!normalizedPhone.startsWith('+')) {
    normalizedPhone = '+91' + normalizedPhone;
  }
  const parsedPhone = normalizedPhone.replace(/\+/g, '');

  const url = `https://graph.facebook.com/${META_API_VERSION}/${META_PHONE_NUMBER_ID}/messages`;

  const data = {
    messaging_product: 'whatsapp',
    to: parsedPhone,
    type: 'template',
    template: {
      name: 'hello_world',
      language: { code: 'en_US' }
    }
  };

  const headers = {
    'Authorization': `Bearer ${META_ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('WhatsApp message sent:', response.data);
  } catch (error) {
    console.error('Error sending WhatsApp message:', error.response?.data || error.message);
  }
};
