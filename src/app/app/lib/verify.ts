import twilio from 'twilio'
const accountSSid = process.env.TWILIO_ACCOUNT_SSID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = twilio(accountSSid, authToken)

export const sendOTP = async (phoneNumber: string) => {
  const otp = Math.random() * 1000000

  const message = await client.messages.create({
    body: ` One Time Verification Password is ${otp}`,
    to: phoneNumber
  })

  console.log(message)
}
