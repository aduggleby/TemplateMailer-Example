# Migrating Postmark Templates to React.Email

This is the source code to go along with this [blog article](https://alexduggleby.com/2024/09/19/migrating-from-postmark-templates-to-react-email/).

# Usage

1. Copy `.env.example` to `.env.local` and replace tokens.

2. Start express server with `npm run dev`.

3. Change `config.tsx` to use either `postmark` or `resend` providing the right token.

4. Send email with:

```
curl --request POST \
 --url http://localhost:3000/ \
 --header 'Authorization: Bearer MYTOKEN123' \
 --header 'content-type: application/json' \
 --data '{
    "from": "test@example.com",
    "to": "test@example.com",
    "templateAlias": "welcome",
    "templateModel": {
        "name": "name-example",
        "productUrl": "productUrl-example",
        "productName": "productName-example",
        "companyName": "companyName-example",
        "companyAddress": "companyAddress-example",
        "actionUrl": "actionUrl-example",
        "loginUrl": "loginUrl-example",
        "username": "username-example",
        "trialLength": "trialLength-example",
        "trialStartDate": "trialStartDate-example",
        "trialEndDate": "trialEndDate-example",
        "supportEmail": "supportEmail-example",
        "liveChatUrl": "liveChatUrl-example",
        "senderName": "senderName-example",
        "helpUrl": "helpUrl-example"
    }
}'
```

# Deployment

Tested with Render, but should be fine with any host that supports Express and Typescript.
