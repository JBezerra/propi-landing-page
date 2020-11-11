import fetch from 'node-fetch'

const EMAILJS_SEND_EMAIL_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'
const SERVICE_ID = 'service_py1cq2d'
const TEMPLATE_ID = 'template_4tchf4i'
const USER_ID = 'user_vDCXuTC8wxoN8UhPz61aY'

export default async function sendEmail({ name, email, phone }) {
    const template_params = {
        contact_name: name,
        contact_mail: email,
        contact_phone: phone
    }

    const response = await fetch(EMAILJS_SEND_EMAIL_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: USER_ID,
            template_params
        })
    })
    return response
}