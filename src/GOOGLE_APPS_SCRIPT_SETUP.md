# Google Apps Script Setup Guide for CuffWay Contact Form

This guide will help you set up the Google Apps Script to receive contact form submissions.

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "CuffWay Contact Form Submissions"
4. In the first row, add these headers:
   - Column A: `Timestamp`
   - Column B: `First Name`
   - Column C: `Last Name`
   - Column D: `Email`
   - Column E: `Phone`
   - Column F: `Organization`
   - Column G: `Message`

## Step 2: Open Apps Script Editor

1. In your Google Sheet, click on `Extensions` → `Apps Script`
2. Delete any existing code in the editor
3. Copy and paste the code below

## Step 3: Google Apps Script Code

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the form data
    const params = e.parameter;
    
    // Create a new row with the form data
    const timestamp = params.timestamp || new Date().toISOString();
    const firstName = params.firstName || '';
    const lastName = params.lastName || '';
    const email = params.email || '';
    const phone = params.phone || '';
    const organization = params.organization || '';
    const message = params.message || '';
    
    // Append the data to the sheet
    sheet.appendRow([
      timestamp,
      firstName,
      lastName,
      email,
      phone,
      organization,
      message
    ]);
    
    // Optional: Send email notification to yourself
    sendEmailNotification({
      timestamp,
      firstName,
      lastName,
      email,
      phone,
      organization,
      message
    });
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Function to send email notifications
function sendEmailNotification(data) {
  // Replace with your email address
  const YOUR_EMAIL = 'your-email@example.com';
  
  const subject = `New Contact Form Submission from ${data.firstName} ${data.lastName}`;
  
  const body = `
New contact form submission received:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Organization: ${data.organization}

Message:
${data.message}

Timestamp: ${data.timestamp}
  `;
  
  try {
    MailApp.sendEmail({
      to: YOUR_EMAIL,
      subject: subject,
      body: body
    });
  } catch (error) {
    console.error('Failed to send email notification:', error);
  }
}

// Handle GET requests (optional, for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'This script accepts POST requests only' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 4: Deploy the Script

1. Click on the **Deploy** button (top right) → **New deployment**
2. Click on the gear icon ⚙️ next to "Select type"
3. Select **Web app**
4. Configure the deployment:
   - **Description**: CuffWay Contact Form Handler (or any description you want)
   - **Execute as**: Me (your email address)
   - **Who has access**: Anyone
5. Click **Deploy**
6. You'll need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Your Project Name] (unsafe)** (this is your own script, so it's safe)
   - Click **Allow**
7. Copy the **Web app URL** (it should look like: `https://script.google.com/macros/s/AKfycby.../exec`)

## Step 5: Update Your Contact Form

1. Open `/components/Contact.tsx`
2. Find the line with `GOOGLE_SCRIPT_URL`
3. Replace the URL with your new Web app URL from Step 4

```typescript
const GOOGLE_SCRIPT_URL = "YOUR_WEB_APP_URL_HERE";
```

## Step 6: Enable Email Notifications (Optional)

If you want to receive email notifications for each submission:

1. In the Google Apps Script code, find the `sendEmailNotification` function
2. Replace `'your-email@example.com'` with your actual email address
3. Save and redeploy the script (Deploy → Manage deployments → Edit → Version: New version → Deploy)

## Step 7: Test Your Form

1. Go to your website
2. Navigate to the Contact page
3. Fill out the form with test data
4. Click "Send Message"
5. Check your Google Sheet to see if the data appears
6. If you enabled email notifications, check your inbox

## Troubleshooting

### Issue: Form submits but data doesn't appear in spreadsheet

**Solution**: 
- Make sure you deployed the script with "Who has access" set to "Anyone"
- Check that the spreadsheet is not protected or restricted
- Look at the Apps Script execution logs (View → Executions) for errors

### Issue: Getting CORS errors

**Solution**: 
- This is normal with Google Apps Script. The `mode: "no-cors"` in the fetch request handles this
- The form will still work, you just won't be able to read the response in the browser

### Issue: Email notifications not working

**Solution**:
- Make sure you've authorized the script to send emails
- Check your spam folder
- Verify the email address in the `sendEmailNotification` function is correct
- Check the Apps Script execution logs for email-related errors

### Issue: Need to update the script

**Solution**:
1. Make changes in the Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the edit icon (pencil) on your deployment
4. Change "Version" to "New version"
5. Click **Deploy**
6. The URL stays the same, so you don't need to update your website

## Security Notes

- The script only accepts the fields specified in the code
- All submissions are logged with timestamps
- You can add additional validation in the Google Apps Script if needed
- Consider adding rate limiting or CAPTCHA for production use
- This setup is suitable for low to medium traffic websites

## Next Steps

Once your form is working:
1. Test it thoroughly with various inputs
2. Set up email notifications
3. Consider adding auto-reply emails to users
4. Monitor the spreadsheet regularly
5. Back up the spreadsheet periodically
