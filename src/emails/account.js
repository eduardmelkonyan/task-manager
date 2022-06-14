const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "eduardmelkonyan.evistep@gmail.com",
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`, 
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "eduardmelkonyan.evistep@gmail.com",
        subject: "Cancelation account",
        text: `Goodbye ${name}. I hope to see you back sometime soon.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}