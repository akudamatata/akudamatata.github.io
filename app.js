// Akudamatata portfolio core script

// 1. Projects Data (With realistic static fallbacks)
const projects = [
    {
        name: "Solara",
        repoName: "Solara",
        description: "一个极简风格的基于免费API的音乐播放器。支持流媒体播放，界面轻量极简，响应迅速。",
        tags: ["Music Player", "Free API", "Vanilla JS", "Audio"],
        url: "https://github.com/akudamatata/Solara",
        type: "Web / PWA",
        stars: 1526,
        forks: 3020,
        branch: "main",
        commitMsg: "Update stream endpoints",
        commitDate: "2026-06-24"
    },
    {
        name: "Solara Downloader",
        repoName: "Solara-Downloader",
        description: "基于 yt-dlp 内核的轻量化媒体下载与解析工具。支持通过编译的客户端本地运行，并提供极简流畅的 Web 交互控制面板，实现音视频的批量获取与管理。",
        tags: ["yt-dlp", "Downloader", "Client-Web", "Utility"],
        url: "https://github.com/akudamatata/Solara-Downloader",
        type: "Desktop / Web",
        stars: 0,
        forks: 0,
        branch: "main",
        commitMsg: "Optimize download concurrent tasks",
        commitDate: "2026-07-03"
    },
    {
        name: "iOS Location Spoofer Web",
        repoName: "iOS-Location-Spoofer-Web",
        description: "iOS 免越狱 GPS 虚拟定位面板。利用 Shadowrocket MITM 机制实现地图定位请求拦截与修改，并提供基于地图选点的直观 Web 交互界面以进行位置模拟。",
        tags: ["Shadowrocket", "MITM", "GPS Spoofer", "JavaScript"],
        url: "https://github.com/akudamatata/iOS-Location-Spoofer-Web",
        type: "Web / Tools",
        stars: 0,
        forks: 0,
        branch: "main",
        commitMsg: "Fix coordinate mapping issues",
        commitDate: "2026-07-01"
    },
    {
        name: "Trojan Web",
        repoName: "Trojan-Web",
        description: "Trojan 代理的简易 Web 控制台与订阅生成工具。提供节点可视化状态分析及自适应订阅转换服务。",
        tags: ["Trojan", "Proxy", "Web Admin", "Subscription"],
        url: "https://github.com/akudamatata/Trojan-Web",
        type: "Web / Utility",
        stars: 0,
        forks: 0,
        branch: "master",
        commitMsg: "Optimize Trojan payload generation",
        commitDate: "2026-06-27"
    }
];

// 2. Render Projects on UI
const featuredContainer = document.getElementById('featured-project-container');
const normalProjectsGrid = document.getElementById('normal-projects-grid');

function renderProjects() {
    featuredContainer.innerHTML = '';
    normalProjectsGrid.innerHTML = '';

    // Render Solara (C-Position Featured Card)
    const solara = projects[0];
    const featuredCard = document.createElement('div');
    featuredCard.className = 'featured-wrapper';
    featuredCard.id = `project-card-${solara.repoName.toLowerCase()}`;
    featuredCard.innerHTML = `
        <div class="featured-content">
            <!-- Left Side: Main Info & Mini Player Widget -->
            <div class="featured-left">
                <div>
                    <div class="featured-title-area">
                        <h2 style="font-size: 2rem; font-weight: 700; margin: 0;">${solara.name}</h2>
                        <span class="featured-badge">FEATURED PROJECT</span>
                    </div>
                    <p class="featured-slogan">极简流媒体音乐播放器</p>
                    <p class="project-desc" style="margin-top: 12px; font-size: 0.95rem;">${solara.description}</p>
                </div>

                <!-- Mini Player Widget (Premium design element) -->
                <div class="mini-player-widget">
                    <div class="vinyl-disc" id="solara-vinyl">
                        <div class="vinyl-center"></div>
                    </div>
                    <div class="player-info-area">
                        <div class="track-name" id="player-track">死在旋转公寓</div>
                        <div class="artist-name" id="player-artist">发光曲线 &middot; Click Play</div>
                    </div>
                    <div class="player-controls">
                        <i class="fas fa-play" id="player-toggle" style="font-size: 1.3rem; color: #fff; cursor: pointer; padding: 5px;" title="Play Music"></i>
                    </div>
                </div>

                <div>
                    <div class="project-tags" style="margin-top: 10px;">
                        ${solara.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-footer" style="margin-top: 15px; justify-content: flex-start;">
                        <a href="${solara.url}" target="_blank" class="project-link">
                            View on GitHub <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Right Side: Big Metrics Board & Commit Log -->
            <div class="featured-right">
                <div>
                    <div class="featured-commit-title">GitHub Analytics</div>
                    <div class="featured-stats-board">
                        <div class="stat-box">
                            <span id="star-0" class="stat-value">${solara.stars}</span>
                            <span class="stat-label">Stars ⭐</span>
                        </div>
                        <div class="stat-box">
                            <span id="fork-0" class="stat-value">${solara.forks}</span>
                            <span class="stat-label">Forks 🍴</span>
                        </div>
                        <div class="stat-box">
                            <span id="branch-0" class="stat-value" style="font-size: 1.3rem;">${solara.branch}</span>
                            <span class="stat-label">Branch 🌿</span>
                        </div>
                    </div>
                </div>

                <div class="featured-commit-status">
                    <div class="featured-commit-title">Latest Repository Push</div>
                    <div class="featured-commit-log">
                        <i class="fas fa-history"></i>
                        <span id="commit-msg-0" class="featured-commit-msg">${solara.commitMsg}</span>
                        <span id="commit-date-0" class="featured-commit-date">${solara.commitDate}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    featuredContainer.appendChild(featuredCard);

    // Render remaining projects (3-column layout underneath)
    for (let i = 1; i < projects.length; i++) {
        const project = projects[i];
        const card = document.createElement('div');
        card.className = 'card-wrapper';
        card.id = `project-card-${project.repoName.toLowerCase()}`;
        card.innerHTML = `
            <div class="card-content">
                <div>
                    <div class="project-title">
                        <h3>${project.name}</h3>
                        <span>${project.type}</span>
                    </div>
                    <p class="project-desc">${project.description}</p>
                </div>
                <div>
                    <!-- Repository Stats -->
                    <div class="repo-meta">
                        <div class="meta-item" title="Stars">
                            <i class="far fa-star"></i>
                            <span id="star-${i}">${project.stars}</span>
                        </div>
                        <div class="meta-item" title="Forks">
                            <i class="fas fa-code-branch"></i>
                            <span id="fork-${i}">${project.forks}</span>
                        </div>
                        <div class="meta-item" title="Default Branch">
                            <i class="fas fa-code"></i>
                            <span id="branch-${i}">${project.branch}</span>
                        </div>
                    </div>
                    
                    <!-- Commit Details -->
                    <div class="commit-status">
                        <i class="fas fa-history"></i>
                        <span id="commit-msg-${i}" class="commit-msg">${project.commitMsg}</span>
                        <span id="commit-date-${i}" class="commit-date">${project.commitDate}</span>
                    </div>

                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-footer">
                        <a href="${project.url}" target="_blank" class="project-link">
                            View on GitHub <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        normalProjectsGrid.appendChild(card);
    }
}

// 3. Fetch Live GitHub API Data
async function updateGitHubStats() {
    projects.forEach(async (project, index) => {
        const targetRepo = project.repoName || project.name;
        try {
            // Fetch stars, forks, default branch
            const repoRes = await fetch(`https://api.github.com/repos/akudamatata/${targetRepo}`);
            if (repoRes.ok) {
                const repoData = await repoRes.json();
                document.getElementById(`star-${index}`).innerText = repoData.stargazers_count;
                document.getElementById(`fork-${index}`).innerText = repoData.forks_count;
                document.getElementById(`branch-${index}`).innerText = repoData.default_branch;
            }

            // Fetch latest commit message and date
            const commitRes = await fetch(`https://api.github.com/repos/akudamatata/${targetRepo}/commits?per_page=1`);
            if (commitRes.ok) {
                const commitData = await commitRes.json();
                if (commitData && commitData.length > 0) {
                    const latest = commitData[0];
                    let msg = latest.commit.message.split('\n')[0]; // First line only
                    if (msg.length > 35) msg = msg.substring(0, 32) + '...';
                    
                    const dateRaw = latest.commit.committer.date; // e.g. "2026-07-03T17:02:02Z"
                    const formattedDate = dateRaw.split('T')[0];

                    document.getElementById(`commit-msg-${index}`).innerText = msg;
                    document.getElementById(`commit-msg-${index}`).title = latest.commit.message;
                    document.getElementById(`commit-date-${index}`).innerText = formattedDate;
                }
            }
        } catch (e) {
            console.warn(`Could not fetch live GitHub stats for ${targetRepo}, using fallbacks:`, e);
        }
    });
}

// 4. Interactive Terminal Logic
const terminalBody = document.getElementById('terminal-body');
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');

terminalBody.addEventListener('click', () => {
    terminalInput.focus();
});

let commandHistory = [];
let historyIndex = -1;

const commandDescriptions = {
    "help": "Show lists of available commands.",
    "about": "Get details about Wet Dream Boy (梦遗少年).",
    "repos": "List of my featured repositories with metrics.",
    "skills": "List my coding skills & development environments.",
    "clear": "Clear the terminal screen."
};

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = terminalInput.value.trim();
        if (input) {
            commandHistory.push(input);
            historyIndex = commandHistory.length;
        }
        executeCommand(input);
        terminalInput.value = '';
    } else if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
            historyIndex--;
            terminalInput.value = commandHistory[historyIndex];
        }
        e.preventDefault();
    } else if (e.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            terminalInput.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            terminalInput.value = '';
        }
        e.preventDefault();
    }
});

function appendToTerminal(text, isCommand = false) {
    if (isCommand) {
        terminalOutput.innerHTML += `<span class="terminal-prompt">WetDreamBoy@github.io:~$</span> ${text}\n`;
    } else {
        terminalOutput.innerHTML += `${text}\n`;
    }
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

function executeCommand(rawCommand) {
    const parts = rawCommand.split(' ');
    const cmd = parts[0].toLowerCase();
    
    appendToTerminal(rawCommand, true);

    if (cmd === '') {
        return;
    }

    switch(cmd) {
        case 'help':
            let helpText = 'Available commands:\n';
            for (let [command, desc] of Object.entries(commandDescriptions)) {
                helpText += `  ${command.padEnd(10)} - ${desc}\n`;
            }
            appendToTerminal(helpText);
            break;
            
        case 'about':
            appendToTerminal(
                `Wet Dream Boy (梦遗少年) - 一个被梦遗弃的少年。\n` +
                `Fullstack developer with a passion for building robust & elegant web tools.\n` +
                `Focus areas: Web App Spoofer panels, Serverless computing, Automation scripts.\n` +
                `Core philosophy: "Make complex setups simple and beautifully accessible."`
            );
            break;
            
        case 'repos':
            let repoText = 'Featured repositories (Live metrics):\n';
            projects.forEach(p => {
                const starSpan = document.getElementById(`star-${projects.indexOf(p)}`);
                const branchSpan = document.getElementById(`branch-${projects.indexOf(p)}`);
                const stars = starSpan ? starSpan.innerText : p.stars;
                const branch = branchSpan ? branchSpan.innerText : p.branch;
                repoText += `  * ${p.name.padEnd(28)} [${p.type}] ⭐:${stars.toString().padEnd(4)} 🌿:${branch}\n`;
            });
            appendToTerminal(repoText);
            break;
            
        case 'skills':
            appendToTerminal(
                `Skills matrix:\n` +
                `  - Frontend: HTML5, CSS3, JavaScript (ES6+), TypeScript, Vue, React\n` +
                `  - Backend: Node.js, Go, Python, Serverless APIs, Cloudflare Workers\n` +
                `  - Tools: Git, GitHub Actions, Docker, Shadowrocket MITM`
            );
            break;
            
        case 'clear':
            terminalOutput.innerHTML = `Welcome to Wet Dream Boy's console.\nType 'help' to see list of available commands.\n\nWetDreamBoy@github.io:~$ `;
            break;
            
        default:
            appendToTerminal(`Command not found: ${cmd}. Type 'help' for command list.`);
    }
}

// 5. Audio Player Integration (Single-track on-demand loader)
const audio = new Audio();
let isPlaying = false;
let isLoaded = false;

const featuredTrack = {
    name: "死在旋转公寓",
    artist: "发光曲线 &middot; Playing",
    localUrl: "./assets/die_in_spinning_apartment.mp3",
    remoteUrl: "https://music.163.com/song/media/outer/url?id=1345872195.mp3" // 网易云音乐公开外链
};

function initMiniPlayer() {
    const vinyl = document.getElementById('solara-vinyl');
    const toggleBtn = document.getElementById('player-toggle');
    const trackName = document.getElementById('player-track');
    const artistName = document.getElementById('player-artist');

    if (!toggleBtn) return;

    // Load initial track immediately for autoplay
    audio.src = featuredTrack.localUrl;
    isLoaded = true;

    function updatePlayerUI() {
        trackName.innerHTML = featuredTrack.name;
        artistName.innerHTML = featuredTrack.artist;
        if (isPlaying) {
            toggleBtn.className = 'fas fa-pause';
            vinyl.classList.add('spinning');
        } else {
            toggleBtn.className = 'fas fa-play';
            vinyl.classList.remove('spinning');
        }
    }

    toggleBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            updatePlayerUI();
        } else {
            // Attempt to play the local file
            audio.play().then(() => {
                isPlaying = true;
                updatePlayerUI();
            }).catch(e => {
                console.warn("Local audio play failed, falling back to remote URL:", e);
                // Fallback to remote stream
                audio.src = featuredTrack.remoteUrl;
                audio.play().then(() => {
                    isPlaying = true;
                    updatePlayerUI();
                }).catch(err => {
                    console.error("All audio play attempts failed:", err);
                    isPlaying = false;
                    updatePlayerUI();
                });
            });
        }
    });

    // Auto loop play
    audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        audio.play().catch(e => console.warn(e));
    });

    // Robust Autoplay handler compatible with browser security models
    function attemptAutoplay() {
        // 1. Direct play attempt (works if MEI is high or policy allows)
        audio.play().then(() => {
            isPlaying = true;
            updatePlayerUI();
        }).catch(err => {
            console.warn("Direct autoplay blocked. Awaiting user interaction...");
            
            // 2. Setup interaction trigger fallback
            const playOnFirstInteraction = () => {
                if (!isPlaying) {
                    audio.play().then(() => {
                        isPlaying = true;
                        updatePlayerUI();
                        cleanupListeners();
                    }).catch(e => {
                        console.warn("Autoplay interaction fallback failed, falling back to remote link:", e);
                        audio.src = featuredTrack.remoteUrl;
                        audio.play().then(() => {
                            isPlaying = true;
                            updatePlayerUI();
                            cleanupListeners();
                        }).catch(ex => console.error("All fallback plays failed:", ex));
                    });
                }
            };

            const triggers = ['click', 'keydown', 'mousedown', 'touchstart', 'scroll'];
            
            function cleanupListeners() {
                triggers.forEach(t => document.removeEventListener(t, playOnFirstInteraction));
            }

            triggers.forEach(t => document.addEventListener(t, playOnFirstInteraction, { once: true }));
        });
    }

    // Trigger autoplay sequence on load
    attemptAutoplay();
}

// 6. Background Mouse Interaction with Aurora
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const glow1 = document.querySelector('.aurora-1');
    const glow2 = document.querySelector('.aurora-2');
    
    if (glow1 && glow2) {
        glow1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        glow2.style.transform = `translate(${-x * 30}px, -${y * 30}px)`;
    }
});

// Initialize
renderProjects();
updateGitHubStats();
initMiniPlayer();
