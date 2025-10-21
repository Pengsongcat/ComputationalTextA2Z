import dotenv from 'dotenv';
import { AtpAgent } from '@atproto/api';
import { setup, generate } from './generation.js';

dotenv.config();

const agent = new AtpAgent({
  service: 'https://bsky.social',
});

await agent.login({
  identifier: process.env.BLUESKY_USERNAME,
  password: process.env.BLUESKY_PASSWORD,
});

await setup();
let text = generate();
console.log(text);
postIt(text);

async function postIt(txt) {
  const record = {
    $type: 'app.bsky.feed.post',
    text: txt,
  };
  const response = await agent.post(record);
  console.log('Posted single skeet!', response.validationStatus, response.uri);
}
