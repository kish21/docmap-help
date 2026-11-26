// Every docmap feature, for the search box. One line each: title, page#anchor, one-line "what it does", extra words people might type.
// Taken from the extension itself (package.json commands, menus, keys and settings; HELP.md; CHANGELOG 3.0.0).
window.DOCMAP_SECTIONS = {
  "reading.html": "Reading your docs",
  "trust.html": "Trusting your docs",
  "finding.html": "Finding and tidying",
  "writing.html": "Writing docs",
  "agents.html": "Working with AI agents",
  "settings.html": "Settings, privacy and help"
};
window.DOCMAP_FEATURES = [
  // Reading your docs
  ["See the page instead of the code", "reading.html#show-preview", "Turn a Markdown file into a readable page in the same tab.", "show preview ctrl+alt+v same tab render view markdown"],
  ["Go back to the text", "reading.html#show-preview", "Show Source switches the tab back to the Markdown text.", "show source edit raw ctrl+alt+v"],
  ["Where this stands", "reading.html#where-this-stands", "A long doc opens with its parts, whether each is built, and their build records.", "status parts built timeline progress records phase milestone"],
  ["Long paragraphs, shorter", "reading.html#long-paragraphs", "Long paragraphs show two sentences, then more…", "more long paragraph wall of text fold"],
  ["Point at code to see it", "reading.html#code-preview", "Hover a code name or code link to see its lines.", "hover code preview peek lines function file"],
  ["Home", "finding.html#home", "What is being worked on, what is next, what is open, every feature.", "home start overview next handover whats open"],
  ["Open the page beside the text", "reading.html#preview-side", "Text on the left, page on the right, updating as you type.", "open preview to the side split live"],
  ["Find your way in a long doc", "reading.html#find-your-way", "Outline, filter headings, quick read, heading levels, j / k keys.", "outline table of contents quick read levels filter headings j k reading time remember place ctrl+f key points"],
  ["Click a file or function name", "reading.html#code-names", "File names, functions and classes in a doc open the code beside the page.", "click code link file function class open beside go to definition file:line"],
  ["▶ Terminal on command blocks", "reading.html#terminal", "Types a command from the doc into the terminal; you press Enter.", "terminal run command shell powershell npm copy"],
  ["Clean view for AI-written docs", "reading.html#clean-view", "Owner/status bullets as cards, notes as boxes, steps as a stepper.", "clean view show as written ai cards note box status chips"],
  ["Show the doc exactly as written", "reading.html#show-as-written", "Turn Clean view off to see the plain Markdown layout.", "show as written plain clean view off"],
  ["Tick tasks and change statuses on the page", "reading.html#tick-and-status", "Click a task box or a status label; only that line of the file changes.", "checkbox task done blocked in progress status table progress bar"],
  ["Diagrams", "reading.html#diagrams", "```mermaid blocks are drawn as diagrams.", "mermaid flowchart diagram chart"],
  ["1-click Look popover & 8 reading themes", "reading.html#reading-look", "8 themes (VS Code, Paper, GitHub, GitHub Dark, Warm Dark, Solarized Light, Night, Focus), text size and line width right on the page.", "theme look popover font size text size line width paper github dark warm dark solarized light night focus"],
  ["Chrome extension (local .md & GitHub)", "reading.html#chrome-extension", "Read local .md files and GitHub READMEs in Chrome with outline, themes and Mermaid diagrams.", "chrome extension mv3 browser github readme outline local markdown"],
  ["Number the headings", "reading.html#heading-numbers", "Show 1, 1.1, 1.2 … before headings on the page.", "heading numbers numbering"],
  ["Slides", "reading.html#slides", "A file with --- lines plays as slides: ⋯ Ask my AI agent → Show as slides.", "presentation slides deck present show as slides"],
  ["Highlight text", "reading.html#highlight", "Select text on the page → Highlight. Saved on your computer, never in the file.", "highlighter mark"],
  ["Open Preview in Browser", "reading.html#in-browser", "A live page in your browser that follows your edits. In the editor tab's ⋯ menu.", "browser live page share 127.0.0.1"],
  ["Export as HTML or PDF", "reading.html#export", "Save the page as one HTML file, or print it to PDF.", "export html pdf print share save"],

  // Trusting your docs
  ["Trust markers", "trust.html#trust-markers", "Marks paragraphs that don't match the code, conflict with another doc, or may be stale.", "doesn't match the code stale conflict verified wrong doubtful"],
  ["Mark a paragraph as verified", "trust.html#mark-verified", "Click a marker → Mark as verified; it comes back if the code changes.", "verify check true"],
  ["A file moved? One click fixes the doc", "trust.html#file-moved", "The ✗ menu offers Update old to new; it changes that one line.", "moved renamed file path fix update broken link"],
  ["Docs mentioned in code", "trust.html#mentioned-in-code", "Code files show “📄 Mentioned in N docs” at the top.", "code lens mentioned in docs"],
  ["Docs That Mention This File", "trust.html#mentions", "List every doc that names the file you are in.", "mentions references backlinks"],
  ["Docs to update before you commit", "trust.html#commit-hint", "The status bar says “N docs mention files you changed”; click to open or update them.", "status bar commit changed files docs mention update doc stale before you commit"],
  ["Does the Code Still Match This Doc?", "trust.html#design-check", "One list of the files, functions, commands and settings a doc names that the code no longer has.", "design check code match design doc spec architecture drift missing function file"],
  ["Compare: what changed, on the page", "trust.html#compare", "New words underlined, removed words crossed out — since the last commit, the main branch, a week ago…", "compare diff changes last commit main branch master tag version since I read"],
  ["Sign off a version", "trust.html#sign-off", "Write “I approve this version” into the file; warns when it changes later.", "sign off approve approval"],
  ["What kind of doc is this? (named formats)", "trust.html#doc-formats", "The page says when a doc is a decision record (MADR), design doc, spec, runbook…", "madr nygard adr rfc spec kit arc42 google design doc format label"],
  ["Compare with a Standard Format…", "trust.html#compare-standard", "Lists which parts of a format your doc has. Your team's own format first.", "standard format template sections missing"],

  // Finding and tidying
  ["What can docmap do?", "finding.html#what-can-docmap-do", "Every docmap command in one list, by what you want to do.", "all commands list features what can help discover"],
  ["Docs Inbox & docmap Activity Bar sidebar", "finding.html#docs-inbox", "Dedicated docmap sidebar with Quick Launch, Docs Inbox and Markdown Files.", "inbox quick launch activity bar sidebar changed since you read new last 7 days duplicates out of date stale doubtful mark as read archive skip folders include folders"],
  ["Where Do I Start?", "finding.html#where-to-start", "A reading order for a project: README, design, specs, decisions, plans, runbooks.", "where do i start reading order new project onboarding first read"],
  ["Markdown Files list", "finding.html#markdown-files", "Every Markdown file in the project, in the Explorer.", "markdown files list refresh explorer"],
  ["Search All Docs…", "finding.html#search-all-docs", "One search box over every Markdown file, with the headings each result sits under.", "search find all docs"],
  ["Doc Atlas", "finding.html#doc-atlas", "Interactive graph of docs and code with Features/All docs toggle, Back button and Legend.", "atlas links map graph feature code beside legend back"],
  ["Interactive Plans Dashboard", "finding.html#plans-dashboard", "Interactive view of every doc and plan with progress bars, Plans only filter, owners and overdue items.", "plans dashboard interactive filter overdue owner progress"],
  ["Sort, export or report on plans", "finding.html#plans-menu", "Sort the dashboard, save it as Markdown or CSV, or ask for a status report.", "csv export sort spreadsheet status report"],
  ["Open Questions (every doc)", "finding.html#open-questions", "Every real question from all your docs, each linked to its line.", "questions open undecided line"],
  ["My Items", "finding.html#my-items", "Tasks and questions that name you.", "my items assigned me @name my names"],
  ["Decision Log", "finding.html#decision-log", "Every “Decision:” line across your docs, on one page.", "decisions decision log"],
  ["Tidy these docs", "finding.html#tidy", "Docs Inbox → hover a group → ✨: your agent proposes what is current, duplicate or misplaced.", "tidy clean up sort docs agent"],

  // Writing docs
  ["Bold, italic, strikethrough keys", "writing.html#writing-keys", "Ctrl+B, Ctrl+I, Alt+S; lists continue on Enter.", "bold italic strikethrough enter list writing helpers"],
  ["Format Table", "writing.html#format-table", "Lines up a Markdown table's columns.", "table format align"],
  ["Insert / Update Table of Contents", "writing.html#toc", "Adds or refreshes a contents list in the file.", "toc table of contents"],
  ["New Doc from Template…", "writing.html#new-doc", "Your team's templates and five known formats first; More doc types… for plans, specs, runbooks, AGENTS.md…", "template new doc plan adr decision record spec runbook design.md test plan postmortem release notes agent guide vision scope architecture feature spec design doc ticket structure madr nygard rfc spec kit keep a changelog read more"],
  ["New docs follow your team", "writing.html#team-way", "New docs go in your team's folder, numbered like their neighbours, in your template.", "folder numbering adr-tools log4brains team template docs/templates"],
  ["Restructure into a clear doc", "writing.html#restructure", "Ask your agent to reshape an old doc into a clear shape, keeping every fact.", "restructure reshape rewrite tidy doc"],

  // Working with AI agents
  ["Ask My AI Agent About This File…", "agents.html#ask-agent", "Ready prompts: explain, challenge, find risks, turn into tasks, summarise, slides…", "ask agent prompt explain challenge risks summarise copilot claude code codex cursor"],
  ["Build from this doc · Fill in this doc", "agents.html#build-from-doc", "Your agent builds exactly what a design says, or fills a doc's empty sections from the code.", "build from this doc fill in this doc design implement decision record agent prompt"],
  ["Comment on any words", "agents.html#comments", "Select words → Comment; your notes go to your AI with the words they are about.", "comment note annotate review selection feedback"],
  ["Copy for my AI", "agents.html#copy-for-ai", "This doc plus the linked docs you pick, as one text, with its size.", "copy context paste chat tokens words linked docs bundle"],
  ["Review a doc and send it to your agent", "agents.html#review", "Mark sections, ask questions, then Send My Review to My AI Agent.", "review send review approve section question request change"],
  ["Prompts are copied for you", "agents.html#agent-target", "“Prompt copied — paste it into your AI agent”, or open Copilot Chat (Agent Target).", "clipboard agent target auto copilot chat"],
  ["Add Markdown Prompts to This Project", "agents.html#add-prompts", "Saves docmap's prompts as commands Copilot and Claude Code pick up.", "prompts .github/prompts .claude/commands"],
  ["Answer with my model", "agents.html#my-model", "Your own model in VS Code answers on a page. Off by default.", "ai level 1 copilot model answer summarise"],
  ["Tools for your AI agents (docmap-mcp & SKILL.md)", "agents.html#agent-tools", "Standalone local stdio MCP server (npx docmap-mcp) and SKILL.md for Claude, Codex, Cursor and Antigravity.", "mcp tools docmap-mcp skill.md npx ai level 2 copilot claude code codex cursor antigravity set up"],
  ["Point Other AI Tools to AGENTS.md…", "agents.html#agents-md", "Adds small pointer files so every agent reads the one AGENTS.md.", "agents.md claude.md copilot-instructions gemini.md rules pointer"],
  ["Write Doc Map for Agents", "agents.html#doc-map", "Adds a table to AGENTS.md saying where each kind of doc lives, and to read the design before building.", "doc map agents.md claude.md where docs live before building"],

  // Settings, privacy and help
  ["All settings", "settings.html#settings", "Settings → search “docmap”: what each one does and its default.", "settings options configure"],
  ["Privacy", "settings.html#privacy", "No accounts, no tracking, no servers.", "privacy telemetry data tracking"],
  ["Clear docmap's Saved Data…", "settings.html#clear-data", "Tick what docmap should forget: highlights, notes, reading places, copies.", "clear saved data forget remove highlights notes reset privacy"],
  ["Start here: install and words used", "index.html#start", "What docmap is, how to install it, and what Command Palette, Explorer and Docs Inbox mean.", "install get started beginner new command palette explorer status bar glossary what is markdown"],
  ["Help inside VS Code", "settings.html#help", "Help (All Features) and the Get Started walkthrough.", "help get started walkthrough"],
  ["Big files", "settings.html#big-files", "Files over 1 MB ask before they open.", "large file size slow 1mb"],
  ["Something not working?", "settings.html#trouble", "Reload Window, and where to report a problem.", "bug problem not working reload issue report"]
];
