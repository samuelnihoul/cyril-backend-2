import { google } from 'googleapis'
import { type NextRequest } from 'next/server'

const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const client = await auth.getClient();

// Instance of Google Sheets API
const googleSheets = google.sheets({ version: "v4", auth: client });

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const sheet = searchParams.get('sheet')
    console.log("GET")
    console.log(sheet)
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId: sheet,
        range: "Sheet1!A3:Z3",
    });
    console.log(getRows)
    return Response.json({ "data": getRows.data.values })
}