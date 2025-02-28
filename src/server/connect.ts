const { MongoClient } = require('mongodb');

try {
    require('dotenv').config({ path: 'server/config.env' });
    console.log('Environment variables loaded successfully');
    console.log('ATLAS_URI:', process.env.ATLAS_URI);
} catch (error) {
    console.error('Error loading environment variables:', error);
}

if (!process.env.ATLAS_URI) {
    console.error('ATLAS_URI is not defined. Please check your .env file.');
    process.exit(1); // Exit the process with an error code
}

async function main() {
    const db = process.env.ATLAS_URI;
    const client = new MongoClient(db);

    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (e) {
        console.error('Error connecting to MongoDB:', e);
    } finally {
        await client.close();
    }
}
async function getTopScore() {
    const client = new MongoClient(process.env.ATLAS_URI);
    try {
        await client.connect();
        const database = client.db('mathgame');
        const collection = database.collection('numbertrain');
        const query = { score: { $gt: 0 } };
        const options = { sort: { score: -1 }, limit: 1 };
        const result = await collection.findOne(query, options);
        console.log(result);
        return result.score;
    } catch (e) {
        console.error('Error:', e);
    } finally {
        await client.close();
    }
}

export default getTopScore;