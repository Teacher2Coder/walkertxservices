import axios from 'axios';

const handleSendEmail = async (formData) => {
  try {
    const response = await axios.post(
      'https://formsubmit.co/ajax/51a24ea3709ac8afaaa76d16a00b4a9d',
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export default handleSendEmail;