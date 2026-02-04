import path from 'path';
import { NextResponse, NextRequest } from 'next/server';
import fs from 'fs';

export async function GET(req: NextRequest, context: { params: Promise<{}> }) {
    const token = req.headers.get("api-key");
    if (token !== process.env.API_KEY) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const filepath = path.join(process.cwd(), 'formdata.xlsx');
    if (fs.existsSync(filepath)) {
        const buffer = fs.readFileSync(filepath);
        return new NextResponse(buffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition': 'attachment; filename="formdata.xlsx"',
            }
        });
    } else {
        return NextResponse.json({ message: "File not found" }, { status: 404 });
    }
}