import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const body = await req.json();
    const { 
      fullName, 
      email, 
      phoneNumber, 
      companyName, 
      country, 
      serviceName, 
      formSource 
    } = body;

    // Check email is provided
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required.' },
        { status: 400 }
      );
    }

    // Determine target subdirectory
    // Sanitize the formSource to prevent directory traversal
    const pageKey = formSource 
      ? formSource.toLowerCase().trim().replace(/^\/+|\/+$/g, '').replace(/[^a-z0-9_-]/g, '_') 
      : 'homepage';
    
    const sanitizedSource = pageKey || 'homepage';

    const timestamp = new Date().toISOString();
    const cleanEmail = email.replace(/[^a-zA-Z0-9@.]/g, '_');
    const filename = `submission_${Date.now()}_${cleanEmail}.txt`;

    let fileContent = '';

    // Structure content based on form type/source
    if (sanitizedSource === 'newsletter') {
      fileContent = `Newsletter Subscription
=======================
Timestamp:     ${timestamp}
Email Address: ${email}
Source Page:   ${formSource || '/'}
`;
    } else if (sanitizedSource === 'datasheet') {
      fileContent = `Datasheet Download
==================
Timestamp:     ${timestamp}
Full Name:     ${fullName || 'N/A'}
Company Email: ${email}
Datasheet:     ${serviceName || 'Generic Datasheet'}
`;
    } else {
      // General Assessment Form
      // Check required fields for assessment
      if (!fullName || !phoneNumber || !companyName || !country || !serviceName) {
        return NextResponse.json(
          { success: false, message: 'All fields are required for assessment.' },
          { status: 400 }
        );
      }

      fileContent = `Assessment Request
==================
Timestamp:     ${timestamp}
Full Name:     ${fullName}
Company Email: ${email}
Phone Number:  ${phoneNumber}
Company Name:  ${companyName}
Country:       ${country}
Service Name:  ${serviceName}
Source Path:   /${sanitizedSource}
`;
    }

    // Define response subdirectory path: responses/[sanitizedSource]
    const responsesDir = path.join(process.cwd(), 'responses', sanitizedSource);

    // Create the subdirectory recursively if it doesn't exist
    if (!fs.existsSync(responsesDir)) {
      fs.mkdirSync(responsesDir, { recursive: true });
    }

    // Write file to disk
    const filePath = path.join(responsesDir, filename);
    fs.writeFileSync(filePath, fileContent, 'utf8');

    console.log(`Saved form response to ${filePath}`);

    return NextResponse.json({
      success: true,
      message: 'Submission saved successfully!',
      subdirectory: sanitizedSource,
      filename: filename
    });
  } catch (error) {
    console.error('Error handling form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing submission.' },
      { status: 500 }
    );
  }
}
