import { google } from 'googleapis'

const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const client = await auth.getClient();

// Instance of Google Sheets API
const googleSheets = google.sheets({ version: "v4", auth: client });

export const dynamic = "force-dynamic"
export async function GET(request: Request) {
    console.log("GET")
    console.log(request.body)
    const body = await request.json()
    const sheet = body.sheet
    return Response.json({ "title": "Sheet Data" })
}