const express = require('express');
const ffmpeg = require('fluent-ffmpeg');
const app = express();
const port = 3001;

app.use(express.json());

// Mock API for video metadata (in production, integrate with Firebase)
app.get('/api/videos', (req, res) => {
  // Fetch from Firestore in production
  res.json([
    { id: '1', title: 'Sample Video', url: 'https://your-storage/sample.m3u8', likes: 10, comments: [] }
  ]);
});

// Video transcoding endpoint (basic example)
app.post('/api/transcode', (req, res) => {
  const input = req.body.videoPath;
  const output = 'output.m3u8';
  ffmpeg(input)
    .outputOptions('-hls_time 10')
    .outputOptions('-hls_list_size 0')
    .output(output)
    .on('end', () => res.json({ url: output }))
    .on('error', (err) => res.status(500).json({ error: err.message }))
    .run();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});