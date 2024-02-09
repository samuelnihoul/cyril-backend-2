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
    const line_number = searchParams.get("line")
    const page = searchParams.get("page")
    const column = searchParams.get("column")
    console.log("GET")
    console.log(sheet)
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId: sheet,
        range: `${page}!A${line_number}:Z${line_number}`,
    });
    console.log("✅ row sent")
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId: sheet,
        range: `${page}!${column}${line_number}:ZZZ`,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: ["OK"],
        },
    });
    console.log("✅ wrote OK")
    return Response.json({ "data": getRows.data.values })
}