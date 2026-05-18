const appData = {
  platforms: [
    { id: 'youtube', name: 'YouTube', icon: '▶️', gradient: 'gradient-youtube', status: 'Healthy', followers: '14.2K', reach: '89.4K', unread: 38 },
    { id: 'tiktok', name: 'TikTok', icon: '🎵', gradient: 'gradient-tiktok', status: 'Needs Review', followers: '8.7K', reach: '132K', unread: 91 },
    { id: 'twitterx', name: 'X / Twitter', icon: '𝕏', gradient: 'gradient-twitterx', status: 'Healthy', followers: '2.1K', reach: '21.8K', unread: 17 },
    { id: 'instagram', name: 'Instagram', icon: '📸', gradient: 'gradient-instagram', status: 'Healthy', followers: '5.4K', reach: '47.6K', unread: 22 }
  ],
  videos: [
    {
      id: 'video-1',
      title: 'Starter Crate Opening - 15s Clip',
      icon: '🎬',
      type: 'Short Clip',
      length: '0:15',
      campaign: 'Launch awareness push',
      status: 'Ready',
      notes: 'Best hook starts at 0:02. Use as a vertical short.',
      uploadTargets: { youtube: true, tiktok: true, twitterx: false, instagram: true },
      stats: {
        youtube: { status: 'Queued', views: '0', likes: '0', comments: '0', shares: '0' },
        tiktok: { status: 'Ready', views: '0', likes: '0', comments: '0', shares: '0' },
        instagram: { status: 'Draft', views: '0', likes: '0', comments: '0', shares: '0' },
        twitterx: { status: 'Disabled', views: '-', likes: '-', comments: '-', shares: '-' }
      }
    },
    {
      id: 'video-2',
      title: 'Pet Merge Before After Showcase',
      icon: '🔁',
      type: 'Gameplay Video',
      length: '0:38',
      campaign: 'Weekend crate-opening clips',
      status: 'Queued',
      notes: 'Shows the visual improvement from basic pet to upgraded pet.',
      uploadTargets: { youtube: true, tiktok: true, twitterx: true, instagram: true },
      stats: {
        youtube: { status: 'Published', views: '12.8K', likes: '841', comments: '74', shares: '38' },
        tiktok: { status: 'Published', views: '47.2K', likes: '4.1K', comments: '190', shares: '310' },
        instagram: { status: 'Queued', views: '0', likes: '0', comments: '0', shares: '0' },
        twitterx: { status: 'Published', views: '8.9K', likes: '211', comments: '19', shares: '34' }
      }
    },
    {
      id: 'video-3',
      title: 'Goblin Caves First Look',
      icon: '🕳️',
      type: 'Devlog Clip',
      length: '1:24',
      campaign: 'Community feedback loop',
      status: 'Published',
      notes: 'Longer gameplay clip used to gather design feedback.',
      uploadTargets: { youtube: true, tiktok: false, twitterx: true, instagram: false },
      stats: {
        youtube: { status: 'Published', views: '6.4K', likes: '302', comments: '41', shares: '16' },
        tiktok: { status: 'Disabled', views: '-', likes: '-', comments: '-', shares: '-' },
        instagram: { status: 'Disabled', views: '-', likes: '-', comments: '-', shares: '-' },
        twitterx: { status: 'Published', views: '2.2K', likes: '64', comments: '7', shares: '9' }
      }
    },
    {
      id: 'video-4',
      title: 'Rare Pet Drop Reaction',
      icon: '✨',
      type: 'Short Clip',
      length: '0:21',
      campaign: 'Launch awareness push',
      status: 'Needs Edit',
      notes: 'Needs louder drop sound and caption pass.',
      uploadTargets: { youtube: false, tiktok: true, twitterx: false, instagram: true },
      stats: {
        youtube: { status: 'Disabled', views: '-', likes: '-', comments: '-', shares: '-' },
        tiktok: { status: 'Needs Edit', views: '0', likes: '0', comments: '0', shares: '0' },
        instagram: { status: 'Needs Edit', views: '0', likes: '0', comments: '0', shares: '0' },
        twitterx: { status: 'Disabled', views: '-', likes: '-', comments: '-', shares: '-' }
      }
    }
  ],
  comments: [
    {
      id: 'c-1', platformId: 'youtube', videoId: 'video-1', user: 'PixelCrafter', sentiment: 'Positive', time: '12 min ago',
      comment: 'The crate opening animation looks super clean. Is merging available yet?',
      replies: [{ id: 'c-1-r1', user: 'You', owner: true, time: '8 min ago', comment: 'Yep — merging is already in the prototype. I’m polishing the feedback animation so it feels more satisfying.', replies: [{ id: 'c-1-r1-r1', user: 'PixelCrafter', time: '4 min ago', comment: 'Nice. A big glow or burst when the tier upgrades would be awesome.', replies: [] }] }]
    },
    {
      id: 'c-2', platformId: 'youtube', videoId: 'video-3', user: 'CozyGamer42', sentiment: 'Useful Feedback', time: '41 min ago',
      comment: 'The UI is easy to understand, but the reward popups could stay longer.',
      replies: [{ id: 'c-2-r1', user: 'You', owner: true, time: '29 min ago', comment: 'Good call. I’m going to test a slightly longer popup duration and maybe add a setting for reduced UI speed.', replies: [] }]
    },
    {
      id: 'c-3', platformId: 'tiktok', videoId: 'video-2', user: 'LoopClipz', sentiment: 'Positive', time: '4 min ago',
      comment: 'This would go crazy if the pets had rare effects.',
      replies: [{ id: 'c-3-r1', user: 'You', owner: true, time: '2 min ago', comment: 'That’s the plan. Rare pets will eventually get stronger glow, trails, and maybe unique idle effects.', replies: [] }]
    },
    {
      id: 'c-4', platformId: 'tiktok', videoId: 'video-1', user: 'GameTokDaily', sentiment: 'Useful Feedback', time: '18 min ago',
      comment: 'First 3 seconds need a bigger visual payoff.',
      replies: []
    },
    {
      id: 'c-5', platformId: 'twitterx', videoId: 'video-2', user: '@SteamScout', sentiment: 'Useful Feedback', time: '58 min ago',
      comment: 'Would love to see the farming loop explained in one image.',
      replies: [{ id: 'c-5-r1', user: 'You', owner: true, time: '45 min ago', comment: 'That’s a great idea. I’ll make a simple loop graphic showing farm → coins → crates → pets → better farm output.', replies: [] }]
    },
    {
      id: 'c-6', platformId: 'instagram', videoId: 'video-4', user: 'idlecore', sentiment: 'Useful Feedback', time: '1 hr ago',
      comment: 'Can you show before/after pet upgrades? That would be satisfying.',
      replies: [
        { id: 'c-6-r1', user: 'You', owner: true, time: '37 min ago', comment: 'Absolutely. I’m planning a side-by-side upgrade clip because it communicates progression really fast.', replies: [] },
        { id: 'c-6-r2', user: 'idlecore', time: '22 min ago', comment: 'That would probably perform well as a reel too.', replies: [] }
      ]
    }
  ]
};

const state = {
  view: 'dashboard',
  sidebarOpen: false,
  activeReplyTargetId: null,
  activeCommentId: null,
  commentIdCounter: 1000
};

const viewMeta = {
  dashboard: ['Dashboard', 'At-a-glance campaign operations.'],
  platforms: ['Platforms', 'Direct access to every social media workspace.'],
  videos: ['Videos', 'Global video library with upload targeting and platform stats.'],
  comments: ['Comments', 'One-click comment thread inbox with hierarchical replies.']
};

const $ = (id) => document.getElementById(id);
const platformById = (id) => appData.platforms.find((platform) => platform.id === id);
const videoById = (id) => appData.videos.find((video) => video.id === id);
const commentById = (id) => appData.comments.find((comment) => comment.id === id);
const commentsForPlatform = (id) => appData.comments.filter((comment) => comment.platformId === id);
const commentsForVideo = (id) => appData.comments.filter((comment) => comment.videoId === id);

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[character]));
}

function countReplies(nodes) {
  let total = 0;
  const walk = (items) => items.forEach((item) => {
    total += (item.replies || []).length;
    walk(item.replies || []);
  });
  walk(nodes);
  return total;
}

function findCommentNode(nodes, id) {
  for (const node of nodes) {
    if (node.id === id) return node;
    const found = findCommentNode(node.replies || [], id);
    if (found) return found;
  }
  return null;
}

function getInitials(name) {
  if (name === 'You') return 'YOU';
  return String(name).replace('@', '').split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase();
}

function getVideoTargetCount(video) {
  return Object.values(video.uploadTargets).filter(Boolean).length;
}

function toggleSidebar() {
  state.sidebarOpen = !state.sidebarOpen;
  applySidebarState();
}

function closeSidebar() {
  state.sidebarOpen = false;
  applySidebarState();
}

function applySidebarState() {
  $('sidebar').classList.toggle('open', state.sidebarOpen);
  $('sidebarScrim').classList.toggle('active', state.sidebarOpen);
}

function setView(viewName) {
  state.view = viewName;
  state.activeReplyTargetId = null;
  state.activeCommentId = null;
  closeSidebar();

  document.querySelectorAll('.view').forEach((view) => view.classList.remove('active'));
  $(`${viewName}View`).classList.add('active');

  document.querySelectorAll('.nav-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === viewName);
  });

  $('pageTitle').textContent = viewMeta[viewName][0];
  $('pageSubtitle').textContent = viewMeta[viewName][1];

  renderCurrentView();
}

function renderCurrentView() {
  if (state.view === 'dashboard') renderDashboard();
  if (state.view === 'platforms') renderPlatformsView();
  if (state.view === 'videos') renderVideosView();
  if (state.view === 'comments') renderCommentsView();
}

function renderShell() {
  $('platformQuickLinks').innerHTML = appData.platforms.map((platform) => `
    <button class="nav-button" onclick="openPlatformWorkspace('${platform.id}')">
      <span class="nav-icon ${platform.gradient}">${platform.icon}</span>
      ${escapeHtml(platform.name)}
    </button>
  `).join('');

  document.querySelectorAll('[data-view]').forEach((button) => {
    button.addEventListener('click', () => setView(button.dataset.view));
  });

  document.querySelectorAll('[data-view-shortcut]').forEach((button) => {
    button.addEventListener('click', () => setView(button.dataset.viewShortcut));
  });

  $('sidebarToggle').addEventListener('click', toggleSidebar);
  $('sidebarScrim').addEventListener('click', closeSidebar);
  $('uploadVideoButton').addEventListener('click', openUploadWindow);
  $('modalClose').addEventListener('click', closeModal);
  $('modalOverlay').addEventListener('click', (event) => {
    if (event.target.id === 'modalOverlay') closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (state.sidebarOpen) {
      closeSidebar();
      return;
    }
    closeModal();
  });

  $('globalSearch').addEventListener('input', handleSearch);
  renderCurrentView();
}

function renderDashboard() {
  const unread = appData.platforms.reduce((sum, platform) => sum + platform.unread, 0);
  const queued = appData.videos.filter((video) => video.status === 'Queued').length;

  $('dashboardView').innerHTML = `
    <div class="hero-grid">
      <div class="hero-card">
        <h2>Everything important is one click away.</h2>
        <p>This optimized layout uses a hamburger menu, dashboard shortcuts, global search, and direct cards for platforms, videos, and comments.</p>
        <div class="quick-actions">
          <button class="primary-button" onclick="openUploadWindow()">Upload New Video</button>
          <button class="ghost-button" onclick="setView('comments')">Reply to Comments</button>
          <button class="ghost-button" onclick="setView('videos')">Manage Videos</button>
          <button class="ghost-button" onclick="setView('platforms')">Open Platforms</button>
        </div>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><span>Total Reach</span><strong>290K</strong></div>
        <div class="stat-card"><span>Unread Comments</span><strong>${unread}</strong></div>
        <div class="stat-card"><span>Video Assets</span><strong>${appData.videos.length}</strong></div>
        <div class="stat-card"><span>Queued Videos</span><strong>${queued}</strong></div>
      </div>
    </div>
    <div class="two-column">
      <div>
        <div class="section-header"><div><h2>Priority Comments</h2><p>Open a thread directly.</p></div><button class="ghost-button" onclick="setView('comments')">View All</button></div>
        <div class="cards-grid">${appData.comments.slice(0, 3).map(renderCommentCard).join('')}</div>
        <div class="section-header"><div><h2>Active Videos</h2><p>Manage videos and platform stats.</p></div><button class="ghost-button" onclick="setView('videos')">Manage All</button></div>
        <div class="cards-grid">${appData.videos.slice(0, 3).map(renderVideoCard).join('')}</div>
      </div>
      <aside>
        <div class="panel-card">
          <h3>Platform Snapshot</h3>
          <p>Jump directly into a platform workspace.</p>
          <div class="quick-list">
            ${appData.platforms.map((platform) => `
              <button class="quick-row" onclick="openPlatformWorkspace('${platform.id}')">
                <div><strong>${platform.icon} ${escapeHtml(platform.name)}</strong><span>${platform.reach} reach · ${platform.unread} unread</span></div>
                <span class="badge ${platform.status === 'Healthy' ? 'green' : 'yellow'}">${escapeHtml(platform.status)}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderPlatformsView() {
  $('platformsView').innerHTML = `
    <div class="section-header"><div><h2>Platforms</h2><p>Every platform opens straight into its workspace.</p></div><button class="primary-button" onclick="openUploadWindow()">Upload Video</button></div>
    <div class="cards-grid">${appData.platforms.map(renderPlatformCard).join('')}</div>
  `;
}

function renderVideosView() {
  $('videosView').innerHTML = `
    <div class="split-layout">
      <aside class="filter-panel">
        <h3>Video Filters</h3>
        <button class="active">All Videos <span>${appData.videos.length}</span></button>
        <button>Ready <span>${appData.videos.filter((video) => video.status === 'Ready').length}</span></button>
        <button>Queued <span>${appData.videos.filter((video) => video.status === 'Queued').length}</span></button>
        <button>Published <span>${appData.videos.filter((video) => video.status === 'Published').length}</span></button>
        <button>Needs Edit <span>${appData.videos.filter((video) => video.status === 'Needs Edit').length}</span></button>
        <button class="primary-button" style="justify-content:center" onclick="openUploadWindow()">Upload New Video</button>
      </aside>
      <div>
        <div class="section-header" style="margin-top:0"><div><h2>Videos</h2><p>Global asset list. Open any video to configure platform targets.</p></div></div>
        <div class="cards-grid">${appData.videos.map(renderVideoCard).join('')}</div>
      </div>
    </div>
  `;
}

function renderCommentsView() {
  $('commentsView').innerHTML = `
    <div class="split-layout">
      <aside class="filter-panel">
        <h3>Comment Filters</h3>
        <button class="active">All Threads <span>${appData.comments.length}</span></button>
        <button>Awaiting Reply <span>${appData.comments.filter((comment) => !comment.replies.length).length}</span></button>
        <button>Useful Feedback <span>${appData.comments.filter((comment) => comment.sentiment === 'Useful Feedback').length}</span></button>
        <button>Positive <span>${appData.comments.filter((comment) => comment.sentiment === 'Positive').length}</span></button>
        <button class="ghost-button" style="justify-content:center" onclick="openAllCommentsWindow()">Open Thread Inbox</button>
      </aside>
      <div>
        <div class="section-header" style="margin-top:0"><div><h2>Comments</h2><p>Open a card to reply in hierarchical order.</p></div></div>
        <div class="cards-grid">${appData.comments.map(renderCommentCard).join('')}</div>
      </div>
    </div>
  `;
}

function renderPlatformCard(platform) {
  const platformVideos = appData.videos.filter((video) => video.uploadTargets[platform.id]);
  const platformComments = commentsForPlatform(platform.id);
  return `
    <button class="entity-card" onclick="openPlatformWorkspace('${platform.id}')">
      <div class="card-top"><div class="big-icon ${platform.gradient}">${platform.icon}</div><span class="badge ${platform.status === 'Healthy' ? 'green' : 'yellow'}">${escapeHtml(platform.status)}</span></div>
      <div><h3>${escapeHtml(platform.name)}</h3><p>${platformVideos.length} selected videos · ${platformComments.length} tracked comment threads</p></div>
      <div class="mini-stats"><div><strong>${platform.followers}</strong><span>Followers</span></div><div><strong>${platform.reach}</strong><span>Reach</span></div><div><strong>${platform.unread}</strong><span>Unread</span></div></div>
    </button>
  `;
}

function renderVideoCard(video) {
  const enabled = Object.entries(video.uploadTargets).filter((entry) => entry[1]).map((entry) => platformById(entry[0]).icon).join(' ');
  const gradient = video.status === 'Needs Edit' ? 'gradient-warning' : 'gradient-video';
  return `
    <button class="entity-card" onclick="openVideoWindow('${video.id}')">
      <div class="card-top"><div class="big-icon ${gradient}">${video.icon}</div><span class="badge ${video.status === 'Needs Edit' ? 'yellow' : 'blue'}">${escapeHtml(video.status)}</span></div>
      <div><h3>${escapeHtml(video.title)}</h3><p>${escapeHtml(video.type)} · ${video.length} · ${escapeHtml(video.campaign)}</p></div>
      <div class="mini-stats"><div><strong>${getVideoTargetCount(video)}</strong><span>Targets</span></div><div><strong>${commentsForVideo(video.id).length}</strong><span>Comments</span></div><div><strong>${enabled || '—'}</strong><span>Platforms</span></div></div>
    </button>
  `;
}

function renderCommentCard(comment) {
  const platform = platformById(comment.platformId);
  const video = videoById(comment.videoId);
  return `
    <button class="entity-card" onclick="openCommentWindow('${comment.id}')">
      <div class="card-top"><div class="big-icon ${platform.gradient}">💬</div><span class="badge ${comment.sentiment === 'Useful Feedback' ? 'yellow' : 'green'}">${escapeHtml(comment.sentiment)}</span></div>
      <div><h3>${escapeHtml(comment.user)}</h3><p>${escapeHtml(comment.comment)}</p></div>
      <div class="mini-stats"><div><strong>${escapeHtml(platform.name)}</strong><span>Platform</span></div><div><strong>${countReplies([comment])}</strong><span>Replies</span></div><div><strong>${video.icon}</strong><span>Video</span></div></div>
    </button>
  `;
}

function openModal(title, bodyHtml) {
  state.activeReplyTargetId = null;
  $('modalTitle').textContent = title;
  $('modalBody').innerHTML = bodyHtml;
  $('modalOverlay').classList.add('active');
}

function closeModal() {
  state.activeReplyTargetId = null;
  state.activeCommentId = null;
  $('modalOverlay').classList.remove('active');
  $('modalBody').innerHTML = '';
}

function openUploadWindow() {
  openModal('Upload Video', `
    <div class="modal-grid">
      <div class="modal-card" style="padding:18px">
        <div class="video-preview gradient-video"><div style="font-size:52px">⬆️</div></div>
        <h3 style="margin:0;font-size:24px">Upload a new campaign video</h3>
        <p>Create a global video asset, choose platform targets, title variants, thumbnails, captions, and schedule rules.</p>
        <div class="quick-actions"><button class="primary-button">Choose File</button><button class="ghost-button">Import From Library</button><button class="ghost-button">Record Clip</button></div>
      </div>
      <aside class="panel-card">
        <h3>Default Targets</h3><p>Select platforms for the new upload.</p>
        <div class="toggle-list">${appData.platforms.map((platform) => renderPlatformToggle(platform, true)).join('')}</div>
      </aside>
    </div>
  `);
}

function openPlatformWorkspace(platformId) {
  closeSidebar();
  const platform = platformById(platformId);
  const platformVideos = appData.videos.filter((video) => video.uploadTargets[platformId]);
  const platformComments = commentsForPlatform(platformId);
  openModal(`${platform.name} Workspace`, `
    <div class="modal-grid">
      <div>
        <div class="hero-card" style="margin-bottom:16px">
          <div class="card-top"><div class="big-icon ${platform.gradient}">${platform.icon}</div><span class="badge ${platform.status === 'Healthy' ? 'green' : 'yellow'}">${escapeHtml(platform.status)}</span></div>
          <h2 style="font-size:34px;margin-top:16px">${escapeHtml(platform.name)}</h2>
          <p>Fast workspace view for comments, videos, analytics, account settings, and scheduling.</p>
          <div class="quick-actions"><button class="primary-button" onclick="openPlatformComments('${platformId}')">Open Comments</button><button class="ghost-button" onclick="openPlatformVideos('${platformId}')">Manage Videos</button><button class="ghost-button">Account Settings</button><button class="ghost-button">Analytics</button></div>
        </div>
        <div class="section-header"><div><h2>Selected Videos</h2><p>Videos configured for ${escapeHtml(platform.name)}.</p></div></div>
        <div class="cards-grid">${platformVideos.map(renderVideoCard).join('')}</div>
      </div>
      <aside><div class="panel-card"><h3>Recent Comments</h3><div class="quick-list">${platformComments.slice(0, 4).map((comment) => `<button class="quick-row" onclick="openCommentWindow('${comment.id}')"><div><strong>${escapeHtml(comment.user)}</strong><span>${escapeHtml(videoById(comment.videoId).title)}</span></div></button>`).join('') || '<div class="quick-row"><div><strong>No comments</strong><span>No tracked comments yet.</span></div></div>'}</div></div></aside>
    </div>
  `);
}

function openPlatformComments(platformId) {
  const platform = platformById(platformId);
  openModal(`${platform.name} Comments`, renderThreadInbox(commentsForPlatform(platformId), `${platform.name} Comments`));
}

function openPlatformVideos(platformId) {
  const platform = platformById(platformId);
  const platformVideos = appData.videos.filter((video) => video.uploadTargets[platformId]);
  openModal(`${platform.name} Videos`, `<div class="section-header" style="margin-top:0"><div><h2>${escapeHtml(platform.name)} Videos</h2><p>Videos configured for ${escapeHtml(platform.name)}.</p></div><button class="primary-button" onclick="openUploadWindow()">Upload Video</button></div><div class="cards-grid">${platformVideos.map(renderVideoCard).join('')}</div>`);
}

function openVideoWindow(videoId) {
  const video = videoById(videoId);
  openModal(`Video / ${video.title}`, `
    <div class="modal-grid">
      <div>
        <div class="modal-card" style="padding:18px"><div class="video-preview ${video.status === 'Needs Edit' ? 'gradient-warning' : 'gradient-video'}"><div class="play-button">▶</div><div class="video-length">${video.length}</div></div><div class="card-top"><div><h3 style="margin:0;font-size:24px">${escapeHtml(video.title)}</h3><p>${escapeHtml(video.notes)}</p></div><span class="badge ${video.status === 'Needs Edit' ? 'yellow' : 'blue'}">${escapeHtml(video.status)}</span></div></div>
        <div class="panel-card" style="margin-top:14px"><h3>Platform Upload Configuration</h3><p>Configure where this video should be uploaded.</p><div class="toggle-list">${appData.platforms.map((platform) => renderPlatformToggle(platform, video.uploadTargets[platform.id])).join('')}</div></div>
        <div class="panel-card" style="margin-top:14px"><h3>Condensed Platform Stats</h3><div class="stats-table">${appData.platforms.map((platform) => renderStatsRow(platform, video.stats[platform.id])).join('')}</div></div>
      </div>
      <aside><div class="panel-card"><h3>Related Comments</h3><div class="quick-list">${commentsForVideo(video.id).map((comment) => `<button class="quick-row" onclick="openCommentWindow('${comment.id}')"><div><strong>${escapeHtml(comment.user)}</strong><span>${escapeHtml(platformById(comment.platformId).name)} · ${escapeHtml(comment.sentiment)}</span></div></button>`).join('') || '<div class="quick-row"><div><strong>No comments</strong><span>No tracked comments for this video.</span></div></div>'}</div></div></aside>
    </div>
  `);
}

function renderPlatformToggle(platform, enabled) {
  return `<div class="toggle-row"><div class="platform-left"><div class="platform-dot ${platform.gradient}">${platform.icon}</div><div><strong>${escapeHtml(platform.name)}</strong><p style="margin:2px 0 0;font-size:12px">${enabled ? 'Selected for upload' : 'Not selected'}</p></div></div><span class="toggle ${enabled ? 'on' : ''}"></span></div>`;
}

function renderStatsRow(platform, stats = { status: 'Not configured', views: '-', likes: '-', comments: '-', shares: '-' }) {
  return `<div class="stats-row"><div class="platform-left"><div class="platform-dot ${platform.gradient}">${platform.icon}</div><div><strong>${escapeHtml(platform.name)}</strong><span>${escapeHtml(stats.status)}</span></div></div><div><strong>${stats.views}</strong><span>views</span></div><div><strong>${stats.likes}</strong><span>likes</span></div><div><strong>${stats.comments}</strong><span>comments</span></div><div><strong>${stats.shares}</strong><span>shares</span></div></div>`;
}

function openAllCommentsWindow() {
  openModal('All Comment Threads', renderThreadInbox(appData.comments, 'All Comment Threads'));
}

function renderThreadInbox(items, title) {
  return `<div class="modal-grid"><div><div class="section-header" style="margin-top:0"><div><h2>${escapeHtml(title)}</h2><p>Open a thread to reply in hierarchical order.</p></div></div><div class="cards-grid">${items.map(renderCommentCard).join('')}</div></div><aside><div class="panel-card"><h3>Thread Stats</h3><div class="quick-list"><div class="quick-row"><div><strong>${items.length}</strong><span>Top-level comments</span></div></div><div class="quick-row"><div><strong>${items.reduce((sum, item) => sum + countReplies([item]), 0)}</strong><span>Total replies</span></div></div><div class="quick-row"><div><strong>${items.filter((item) => !item.replies.length).length}</strong><span>Awaiting reply</span></div></div></div></div></aside></div>`;
}

function openCommentWindow(commentId) {
  state.activeCommentId = commentId;
  const comment = commentById(commentId);
  const platform = platformById(comment.platformId);
  const video = videoById(comment.videoId);
  openModal(`Comment / ${comment.user}`, renderSingleThread(comment, platform, video));
}

function renderSingleThread(comment, platform, video) {
  return `<div class="modal-grid"><div class="panel-card"><div class="thread-context"><div class="big-icon ${platform.gradient}" style="width:50px;height:50px">${video.icon}</div><div><strong>${escapeHtml(video.title)}</strong><div style="color:var(--muted);font-size:13px">${escapeHtml(platform.name)} · ${escapeHtml(comment.sentiment)} · ${escapeHtml(comment.time)}</div></div></div><div class="thread">${renderCommentNode(comment, false)}</div></div><aside><div class="panel-card"><h3>Thread Context</h3><div class="quick-list"><div class="quick-row"><div><strong>${escapeHtml(video.title)}</strong><span>Video</span></div></div><div class="quick-row"><div><strong>${escapeHtml(platform.name)}</strong><span>Platform</span></div></div><div class="quick-row"><div><strong>${countReplies([comment])}</strong><span>Replies</span></div></div></div></div><div class="panel-card" style="margin-top:14px"><h3>Fast Actions</h3><div class="quick-list"><button class="quick-row" onclick="showReplyComposer('${comment.id}')"><div><strong>Reply to Original</strong><span>Respond under the root comment</span></div></button><button class="quick-row" onclick="openVideoWindow('${video.id}')"><div><strong>Open Related Video</strong><span>View platform stats</span></div></button></div></div></aside></div>`;
}

function renderCommentNode(comment, isReply) {
  const children = (comment.replies || []).map((reply) => renderCommentNode(reply, true)).join('');
  const composer = state.activeReplyTargetId === comment.id ? renderReplyComposer(comment.id) : '';
  const ownerClass = comment.owner ? 'owner' : '';
  return `<div class="comment-node ${isReply ? 'reply' : ''}"><div class="avatar ${ownerClass}">${getInitials(comment.user)}</div><div><div class="comment-bubble ${ownerClass}"><div class="comment-meta"><span class="comment-user">${escapeHtml(comment.user)}</span>${comment.sentiment ? `<span class="badge yellow">${escapeHtml(comment.sentiment)}</span>` : ''}${comment.owner ? '<span class="badge green">Your Reply</span>' : ''}<span class="comment-time">${escapeHtml(comment.time)}</span></div><p class="comment-text">${escapeHtml(comment.comment)}</p><div class="comment-actions"><button class="small-button" onclick="showReplyComposer('${comment.id}')">Reply</button><button class="small-button">Mark Reviewed</button></div></div>${composer}${children}</div></div>`;
}

function renderReplyComposer(parentId) {
  return `<div class="reply-composer"><textarea id="replyText-${parentId}" placeholder="Write a reply..."></textarea><div class="composer-actions"><button class="ghost-button" onclick="cancelReply()">Cancel</button><button class="primary-button" onclick="submitReply('${parentId}')">Post Reply</button></div></div>`;
}

function showReplyComposer(parentId) {
  state.activeReplyTargetId = parentId;
  refreshThreadWindow();
  setTimeout(() => {
    const textArea = $(`replyText-${parentId}`);
    if (textArea) textArea.focus();
  }, 0);
}

function cancelReply() {
  state.activeReplyTargetId = null;
  refreshThreadWindow();
}

function submitReply(parentId) {
  const textArea = $(`replyText-${parentId}`);
  const text = textArea ? textArea.value.trim() : '';
  if (!text) {
    if (textArea) textArea.focus();
    return;
  }

  const parent = findCommentNode(appData.comments, parentId);
  if (!parent) return;

  if (!parent.replies) parent.replies = [];
  parent.replies.push({
    id: `reply-${state.commentIdCounter++}`,
    user: 'You',
    owner: true,
    comment: text,
    time: 'Just now',
    replies: []
  });

  state.activeReplyTargetId = null;
  refreshThreadWindow();
  renderCurrentView();
}

function refreshThreadWindow() {
  if (!state.activeCommentId) return;
  const comment = commentById(state.activeCommentId);
  $('modalBody').innerHTML = renderSingleThread(comment, platformById(comment.platformId), videoById(comment.videoId));
}

function handleSearch(event) {
  const query = event.target.value.trim().toLowerCase();
  if (!query) {
    renderCurrentView();
    return;
  }

  const platformMatches = appData.platforms.filter((platform) => [platform.name, platform.status, platform.reach, platform.followers].join(' ').toLowerCase().includes(query));
  const videoMatches = appData.videos.filter((video) => [video.title, video.type, video.campaign, video.status, video.notes].join(' ').toLowerCase().includes(query));
  const commentMatches = appData.comments.filter((comment) => {
    const platform = platformById(comment.platformId);
    const video = videoById(comment.videoId);
    return [comment.user, comment.comment, comment.sentiment, platform.name, video.title].join(' ').toLowerCase().includes(query);
  });

  setView('dashboard');
  $('dashboardView').innerHTML = `
    <div class="hero-card"><h2>Search Results</h2><p>Showing matches for <strong>${escapeHtml(query)}</strong>. Open any result directly.</p></div>
    <div class="section-header"><div><h2>Platforms</h2><p>${platformMatches.length} matches</p></div></div><div class="cards-grid">${platformMatches.map(renderPlatformCard).join('') || '<div class="panel-card"><p>No platform matches.</p></div>'}</div>
    <div class="section-header"><div><h2>Videos</h2><p>${videoMatches.length} matches</p></div></div><div class="cards-grid">${videoMatches.map(renderVideoCard).join('') || '<div class="panel-card"><p>No video matches.</p></div>'}</div>
    <div class="section-header"><div><h2>Comments</h2><p>${commentMatches.length} matches</p></div></div><div class="cards-grid">${commentMatches.map(renderCommentCard).join('') || '<div class="panel-card"><p>No comment matches.</p></div>'}</div>
  `;
}

document.addEventListener('DOMContentLoaded', renderShell);
