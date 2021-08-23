import contact from '../../config/contact';

async function contactApi(req, res) {
  require('dotenv').config();

  const { fullName, message, email } = req.body;

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: contact.form.mailto,
    from: contact.form.mailfrom,
    subject: `Contact form: ${fullName}`,
    text: `
    from: ${fullName}
    email: ${email}

    ${message}
    `,
    html: `
    <p>
    <strong>from: </strong>${fullName}<br>
    <strong>email: </strong>${email}
    </p>
    <p>${message}</p>
    `,
  };

  try {
    const sent = await sgMail.send(msg);

    res.status(sent[0].statusCode).json({ message: 'attempting to send...' });
    // res.status(404).json({ message: 'attempting to send...' });
  } catch (error) {
    console.error('error:', error);
  }
}

export default contactApi;
