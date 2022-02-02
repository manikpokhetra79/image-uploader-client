# Image Uploader Service

## Description

- This is a simple Image uploader which uses a serverless api to upload images to the S3 Bucket.
- The Image uploader also takes optional resizing parameters is a user wants to resize the images on the fly.
- Default resize sizes are 300x300.
- Uploader returns a new url to the image if upload is successful otherwise it returns a simple error image with unsuccessful message
