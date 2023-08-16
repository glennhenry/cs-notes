---
slug: /digital-media-processing/mime-type
id: mime-type
title: MIME Type
description: MIME Type
---

**Main Source : [Wikipedia Media type](https://en.wikipedia.org/wiki/Media_type)**

MIME type, or media type, is a two-part identifier for file formats and format contents transmitted on the Internet. It is used to indicate the type of data that is being transmitted, so that the recipient knows how to handle it.

### MIME type syntax

MIME type syntax looks like the following :
`mime-type = type "/" [tree "."] subtype ["+" suffix]* [";" parameter];`

- `type` is the general category of the data, such as text, image, audio, or video.
- `tree` is an optional prefix that can be used to further categorize the data. For example, the type application can have the tree x- to indicate that it is an experimental format.
- `subtype` is the specific format of the data, such as plain text, HTML, PDF, MS word document
- `suffix` is an optional suffix that can be used to represent specific structure of the format. For example, the suffix xml can be used to classify XML data, and the suffix json can be used to classify JSON data.
- `parameter` is an optional parameter that can be used to provide additional information or metadata about the data. For example, the parameter charset can be used to specify the character encoding of the text data.

For example, a MIME type for JPEG file is `image/jpeg; charset=utf-8`

Other example :

- `text/plain` : plain text.
- `image/jpeg` : JPEG images.
- `audio/mp3` : MP3 audio.
- `video/mp4` : MP4 videos.
- `application/pdf` : PDF documents.
- `application/msword` : Microsoft Word documents.
- `application/zip` : ZIP archives.
