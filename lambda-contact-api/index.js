const { Client } = require('pg');

exports.handler = async (event) => {
  const body = JSON.parse(event.body || '{}');
  const { name, email, phone, message } = body;

  if (!name || !phone) {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ error: 'Name and phone are required.' }),
    };
  }

  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,
  });

  try {
    await client.connect();

    await client.query(
      'INSERT INTO contact_submissions (name, email, phone, message) VALUES ($1, $2, $3, $4)',
      [name, email, phone, message]
    );

    await client.end();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ message: 'Contact saved successfully.' }),
    };
  } catch (err) {
    console.error('Error:', err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
}; 