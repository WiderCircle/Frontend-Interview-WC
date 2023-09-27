# Form Submission - shape of data
```javascript
{
     Patients: [{
        firstname: string,
        lastname: string,
        dateOfBirth: {
            year: number,
            month: number,
            day: number,
        },
        address1: string,
        city: string,
        state: string,
        zipcode: string,
        country: string,
        language: string,
        contacts: [{
            active: bool,
            type: string, // eg. email, sms, voice, fax
            value: string
        }],
        notes: string
     }
}
```