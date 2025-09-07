import dotenv from 'dotenv';
import { sendWhatsAppMessage } from './utils/whatsapp.js';

dotenv.config();

console.log('🔧 Testing Twilio WhatsApp Configuration...\n');

// Check environment variables
console.log('📋 Environment Variables Check:');
console.log('TWILIO_ACCOUNT_SID:', process.env.TWILIO_ACCOUNT_SID ? '✅ Set' : '❌ Missing');
console.log('TWILIO_AUTH_TOKEN:', process.env.TWILIO_AUTH_TOKEN ? '✅ Set' : '❌ Missing');
console.log('TWILIO_WHATSAPP_NUMBER:', process.env.TWILIO_WHATSAPP_NUMBER ? '✅ Set' : '❌ Missing');

if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_WHATSAPP_NUMBER) {
  console.log('\n❌ Missing required environment variables. Please check your .env file.');
  process.exit(1);
}

console.log('\n📱 From Number:', process.env.TWILIO_WHATSAPP_NUMBER);

// Test message (replace with your actual phone number)
const testPhoneNumber = '+918887756715'; // ⚠️  REPLACE THIS WITH YOUR ACTUAL PHONE NUMBER (e.g., +919876543210)
const testMessage = '🧪 Test message from TaskTracker WhatsApp integration!';

console.log('\n⚠️  IMPORTANT: Make sure your TWILIO_WHATSAPP_NUMBER is a WhatsApp-enabled number!');
console.log('   - For Twilio Sandbox: Use the sandbox number from your Twilio Console');
console.log('   - For production: Enable WhatsApp on your Twilio phone number');
console.log('   - Visit: https://console.twilio.com/us1/develop/sms/whatsapp/overview');

console.log('\n📤 Sending test message...');
console.log('To:', testPhoneNumber);
console.log('Message:', testMessage);

try {
  await sendWhatsAppMessage(testPhoneNumber, testMessage);
  console.log('\n✅ Test completed! Check your WhatsApp for the test message.');
} catch (error) {
  console.log('\n❌ Test failed:', error.message);
}
