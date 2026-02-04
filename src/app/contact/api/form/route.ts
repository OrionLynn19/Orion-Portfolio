import { NextRequest, NextResponse } from 'next/server';
import ExcelJS from 'exceljs';
import path from 'path';

export async function POST(req: NextRequest) {
    const { name, phone, email, subject, message } = await req.json();
    const filepath = path.join(process.cwd(), 'formdata.xlsx');
    const workbook = new ExcelJS.Workbook();

    try {
        await workbook.xlsx.readFile(filepath);
    } catch {
        const sheet = workbook.addWorksheet('sheet1');
        sheet.addRow(['name', 'phone', 'email', 'subject', 'message']);
    }

    const sheet = workbook.getWorksheet('sheet1');
    sheet?.addRow([name, phone, email, subject, message]);
    await workbook.xlsx.writeFile(filepath);

    return NextResponse.json({ message: "Form data saved successfully" }, { status: 200 });
}