# SocialMedia Command and Control — Project Soul

This file is the project memory and direction guide for future AI-assisted chats.

## Default Repository

Use this repository by default for all project-related GitHub work unless a different repository is explicitly provided:

```text
rater193/Socialmedia-command-and-control
```

Default branch:

```text
main
```

Repository URL:

```text
https://github.com/rater193/Socialmedia-command-and-control
```

## Current Prototype

The current primary UI prototype is:

```text
prototypes/socialmedia-c3-optimized-flow-toggle-sidebar.html
```

This file is a standalone HTML/CSS/JavaScript prototype for the SocialMedia C3 control panel.

## Project Vision

The project is a SocialMedia C3 control panel: Command, Control, and Campaigns.

The goal is to build a web-based control panel for managing social media campaigns across multiple platforms. The UI should feel like a modern campaign command center rather than a plain admin dashboard.

The platform should help manage:

- Social media platforms/accounts
- Videos and clips
- Upload targets per platform
- Campaigns
- Scheduling
- Analytics
- Comments
- Hierarchical comment replies
- Platform-specific settings
- Media publishing workflows

## Current UI Direction

The UI started as a Windows-desktop-like concept with folders and app icons, but the flow was optimized because deep folder navigation felt too slow.

The current preferred direction is a modern, fast-access layout with:

- Top bar
- Hamburger menu button
- Toggleable sidebar drawer
- Dashboard landing view
- Direct sections for Platforms, Videos, and Comments
- Global search
- Quick action buttons
- Modal windows for focused workflows
- Dark theme
- Responsive layout

The sidebar should be toggleable from a button with three horizontal lines. It should open as an off-canvas drawer and close when clicking outside it or pressing Escape.

## Important Navigation Decision

Avoid making users drill too deeply through folders to reach core workflows.

Preferred flow:

- Dashboard gives quick access to priority work
- Sidebar gives direct access to major sections
- Platform shortcuts are available in the sidebar
- Videos are directly accessible from the Videos section
- Comments are directly accessible from the Comments section
- Platform workspaces open quickly and expose related comments/videos/actions

The UI should feel modern, fast, and easy to move around in.

## Main Sections

### Dashboard

The dashboard should surface high-value work immediately:

- Priority comments
- Active videos
- Platform snapshot
- Fast workflow suggestions
- Quick actions such as Upload Video, Review Comments, Manage Videos, and Open Platforms

### Platforms

The Platforms section should show each social media platform as a card/workspace.

Current demo platforms:

- YouTube
- TikTok
- X / Twitter
- Instagram

Each platform should provide access to:

- Platform comments
- Platform videos/media
- Account settings
- Campaigns
- Analytics
- Scheduler

### Videos

The Videos section is the global video/clip library.

Each video should be its own card/object. Opening a video should show:

- Video title
- Video type
- Length
- Campaign
- Notes
- Upload target configuration
- Which platforms the video should be uploaded to
- Condensed per-platform stats
- Related comments
- Actions such as Edit Metadata, Upload to Selected, Schedule Release, and Generate Variants

Videos are global campaign assets. Platform-specific upload configuration and stats should be attached to the video.

### Comments

The Comments section is a global comment inbox.

Each top-level comment should be its own card/object and should include:

- Comment author
- Comment text
- Sentiment/category
- Related video
- Related platform
- Reply count

Opening a comment should show the specific comment thread and allow replies.

Comments should support hierarchical replies:

- User comment
- Your reply
- Replies to your reply
- Nested follow-up replies

Replies should appear directly under the comment or reply they respond to.

## Comment Workflow

The user wants to be able to:

1. Click Comments
2. View a list of comments
3. Open a specific comment
4. Reply to that comment or any nested reply
5. See the full reply history in hierarchical order

The comment UI should prioritize fast review and response.

Useful filters or views include:

- All Threads
- Awaiting Reply
- Useful Feedback
- Positive
- Replies to You
- Your Replies

## Media Upload Workflow

The user wants to be able to upload videos and clips to platforms and manage those videos/clips.

The prototype should include:

- Upload Video action
- Choose File
- Import From Library
- Record Clip
- Default platform targets
- Per-video platform targeting
- Upload to selected platforms
- Schedule release
- Metadata editing
- AI-assisted title/caption/hashtag ideas in future iterations

## Visual Style

Preferred style:

- Dark theme
- Modern SaaS/control-center feel
- Smooth cards
- Soft glassy panels
- Subtle gradients
- Rounded corners
- Clean hierarchy
- Minimal friction
- Fast navigation
- Professional but still visually engaging

Avoid:

- Deep folder-only navigation
- Too many clicks to reach common sections
- Large static sidebars that cannot scroll properly
- Overly plain admin tables as the primary UI

## Current Prototype Technical Notes

The prototype is currently a single standalone HTML file with embedded CSS and JavaScript.

It does not require a build system.

It currently uses fake/static demo data for:

- Platforms
- Videos
- Comments
- Replies
- Stats
- Upload configuration

Future implementation may move this into a Node.js web server structure.

## Desired Future Node.js Structure

The user previously suggested a structure similar to:

```text
./platform/platforms/youtube.json
./platform/platforms/twitterx.json
./platform/lib/config.js
./platform/lib/restendpoints.js
./platform/lib/platformapi/platform.js
./platform/lib/platformapi/platform_youtube.js
./platform/lib/platformapi/platform_twitterx.js
./html/js/source.js
./html/index.html
./html/css/themes/default/style.css
./.env
```

This can be adapted as needed for a clean Node.js web server host.

## AI Collaboration Preferences

When modifying the project:

- Prefer full, usable files over tiny patch snippets when practical
- Keep changes organized and easy to follow
- Commit directly to the default repository only when explicitly asked
- Use the default repository and `main` branch unless told otherwise
- Preserve the current UI direction unless the user asks to change it
- Be honest if something could not be done

## Current Known Commit

The initial prototype was committed to:

```text
prototypes/socialmedia-c3-optimized-flow-toggle-sidebar.html
```

Commit SHA:

```text
f219d5c9826c584bf17d2e392b6e4482627f7b0b
```
