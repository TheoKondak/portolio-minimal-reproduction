// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// console.log('hi');
const handler = (req, res) => {
  if (req.method === 'POST') {
    try {
      fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET_KEY}&response=${req.body.gRecaptchaToken}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then((reCaptchaRes) => {
          console.log(reCaptchaRes, 'Response from Google reCatpcha verification API');
          if (reCaptchaRes?.score > 0.5) {
            // Save data to the database from here
            res.status(200).json({
              status: 'success',
              message: 'Ok, you are not a robot!',
            });
          } else {
            res.status(200).json({
              status: 'failure',
              message: 'Bot Detected',
            });
          }
        });
    } catch (err) {
      res.status(405).json({
        status: 'failure',
        message: 'Error submitting the enquiry form',
      });
    }
  } else {
    console.log('Status 405');
    res.status(405);
    res.end();
  }
};

export default handler;
