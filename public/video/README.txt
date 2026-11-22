# Video Tour Directory

Place your property walkthrough / video tour here!

## Option 1: Local Video File (Recommended)
Place your video file here named:
`tour.mp4` (Full path: `public/video/tour.mp4`)

Supported formats: `.mp4`, `.webm`.

## Option 2: YouTube / Vimeo Link
If your video tour is uploaded to YouTube or Vimeo, you don't even need to place a file here!
Just open:
`src/lib/business.ts`
and update the `videoTourUrl` field with your YouTube or Vimeo link:
```typescript
videoTourUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
```
The website will automatically embed your YouTube/Vimeo video tour with custom responsive cinema styling!
