export type Difficulty = "Easy" | "Medium" | "Advanced";

export type Step = {
  title: string;
  body: string;
};

export type Article = {
  slug: string;
  category: string; // category slug
  title: string;
  summary: string;
  overview: string;
  symptoms: string[];
  estTime: string;
  difficulty: Difficulty;
  lastUpdated: string;
  views: number;
  steps: Step[];
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string; // lucide name
  tone: "primary" | "mint" | "coral" | "amber" | "sky" | "pink";
};

export const categories: Category[] = [
  { slug: "laptop-setup", name: "Laptop Setup", description: "Get a new machine ready for work.", icon: "Laptop", tone: "primary" },
  { slug: "wifi-internet", name: "Wi-Fi & Internet", description: "Fix slow or dropped connections.", icon: "Wifi", tone: "sky" },
  { slug: "passwords-login", name: "Passwords & Login", description: "Reset passwords and unlock accounts.", icon: "KeyRound", tone: "amber" },
  { slug: "email", name: "Email", description: "Outlook, Gmail, and shared inboxes.", icon: "Mail", tone: "coral" },
  { slug: "software", name: "Software", description: "Install and update approved apps.", icon: "AppWindow", tone: "mint" },
  { slug: "new-employee", name: "New Employee Setup", description: "First-day checklist for new hires.", icon: "UserPlus", tone: "primary" },
  { slug: "security", name: "Security", description: "MFA, VPN, and safe practices.", icon: "ShieldCheck", tone: "pink" },
  { slug: "printers-devices", name: "Printers & Devices", description: "Printers, cameras, and peripherals.", icon: "Printer", tone: "sky" },
];

export const articles: Article[] = [
  {
    slug: "mac-wifi-not-connecting",
    category: "wifi-internet",
    title: "Mac won't connect to Wi-Fi",
    summary: "Reconnect your Mac to the office network in a few quick steps.",
    overview: "If your Mac can see the network but won't connect, the fix is usually to forget the network and rejoin it.",
    symptoms: ["Wi-Fi icon shows an exclamation mark", "Pages won't load", "Connected but no internet"],
    estTime: "5 min",
    difficulty: "Easy",
    lastUpdated: "2026-06-12",
    views: 1284,
    steps: [
      { title: "Toggle Wi-Fi off and on", body: "Click the Wi-Fi icon in the menu bar. Switch it off, wait 10 seconds, then switch it back on." },
      { title: "Forget the network", body: "Open System Settings → Wi-Fi. Click the (i) next to the network name, then choose 'Forget This Network'." },
      { title: "Rejoin the network", body: "Select the network again from the list and enter the password. Use the Wi-Fi password listed in your welcome email." },
      { title: "Renew your DHCP lease", body: "Open System Settings → Network → Wi-Fi → Details → TCP/IP. Click 'Renew DHCP Lease'." },
      { title: "Restart your Mac", body: "If you still can't connect, restart your laptop. This clears most temporary network issues." },
    ],
  },
  {
    slug: "vpn-wont-connect",
    category: "security",
    title: "VPN won't connect",
    summary: "Get back on the company VPN when it refuses to connect.",
    overview: "Most VPN problems come from an expired session or a blocked network. Try these steps in order.",
    symptoms: ["VPN spins and times out", "Error: 'Could not reach server'", "Disconnects every few minutes"],
    estTime: "7 min",
    difficulty: "Easy",
    lastUpdated: "2026-06-20",
    views: 2103,
    steps: [
      { title: "Check your internet first", body: "Open a website like google.com. If that doesn't load, fix Wi-Fi before trying the VPN." },
      { title: "Quit and reopen the VPN app", body: "Fully quit the VPN app (right-click → Quit), then reopen it and sign in again." },
      { title: "Sign in again with SSO", body: "If your company uses SSO, sign out from the VPN and sign back in. Approve the MFA prompt on your phone." },
      { title: "Switch networks", body: "Some hotels and cafés block VPN traffic. Try a phone hotspot to confirm." },
      { title: "Submit a ticket", body: "If none of the above works, submit a ticket and include a screenshot of the error." },
    ],
  },
  {
    slug: "forgot-password",
    category: "passwords-login",
    title: "Forgot your password",
    summary: "Reset your work password from any device.",
    overview: "You can reset your password yourself using the self-service portal — no ticket needed.",
    symptoms: ["Can't sign in to email", "'Incorrect password' error", "Account locked"],
    estTime: "3 min",
    difficulty: "Easy",
    lastUpdated: "2026-06-25",
    views: 3412,
    steps: [
      { title: "Open the reset page", body: "Go to passwords.company.com from any browser. You can do this from your phone." },
      { title: "Enter your work email", body: "Type your full work email and click 'Next'." },
      { title: "Verify with MFA", body: "Approve the prompt on your phone or enter the 6-digit code from your authenticator app." },
      { title: "Choose a new password", body: "Pick at least 12 characters with a mix of letters, numbers, and a symbol." },
      { title: "Sign in everywhere again", body: "Sign back into email, Slack, and any other apps with the new password." },
    ],
  },
  {
    slug: "slack-login-issues",
    category: "software",
    title: "Slack login issues",
    summary: "Fix Slack when it won't let you sign in.",
    overview: "Slack login issues are almost always solved by signing in through the workspace URL with SSO.",
    symptoms: ["Stuck on the Slack login screen", "'Workspace not found' error", "MFA loop"],
    estTime: "4 min",
    difficulty: "Easy",
    lastUpdated: "2026-06-18",
    views: 870,
    steps: [
      { title: "Use the workspace URL", body: "Open company.slack.com in your browser instead of the app." },
      { title: "Sign in with SSO", body: "Click 'Sign in with Google' (or your company's SSO option). Don't use the email + password fields." },
      { title: "Reopen the Slack app", body: "Once you're in via the browser, open the Slack app — it should auto-connect." },
      { title: "Clear Slack's cache", body: "In the Slack app menu, choose Help → Troubleshooting → Clear Cache and Restart." },
    ],
  },
  {
    slug: "printer-offline",
    category: "printers-devices",
    title: "Printer shows offline",
    summary: "Bring an office printer back online from your laptop.",
    overview: "An offline printer usually just needs to be re-added or woken up.",
    symptoms: ["Printer status says 'Offline'", "Jobs stuck in queue", "Can't find printer in list"],
    estTime: "6 min",
    difficulty: "Easy",
    lastUpdated: "2026-06-05",
    views: 540,
    steps: [
      { title: "Make sure you're on office Wi-Fi", body: "Printers are only reachable on the office network, not on the guest network or VPN." },
      { title: "Clear the print queue", body: "Open System Settings → Printers. Select the printer and delete any stuck jobs." },
      { title: "Remove and re-add the printer", body: "Click the '−' button to remove it, then '+' to add it again. Choose the printer from the list." },
      { title: "Print a test page", body: "Print a one-page document to confirm everything works." },
    ],
  },
  {
    slug: "camera-not-working",
    category: "printers-devices",
    title: "Camera not working",
    summary: "Fix your webcam for video calls.",
    overview: "If your camera shows a black screen or isn't detected, another app is usually holding it.",
    symptoms: ["Black screen in Zoom or Meet", "Camera not detected", "Green light off"],
    estTime: "5 min",
    difficulty: "Easy",
    lastUpdated: "2026-06-22",
    views: 1120,
    steps: [
      { title: "Quit other video apps", body: "Fully quit Zoom, Meet, Teams, and Photo Booth. Only one app can use the camera at a time." },
      { title: "Check app permissions", body: "Open System Settings → Privacy & Security → Camera. Make sure the app you're using is allowed." },
      { title: "Restart the app", body: "Close the video call app completely and reopen it." },
      { title: "Restart your laptop", body: "A restart resets the camera driver and fixes most stubborn cases." },
    ],
  },
  {
    slug: "new-employee-laptop-setup",
    category: "new-employee",
    title: "New employee laptop setup",
    summary: "Get your new work laptop ready in under 30 minutes.",
    overview: "Follow these steps on your first day to get fully set up.",
    symptoms: ["Brand-new laptop", "First-day onboarding", "Need to access work apps"],
    estTime: "30 min",
    difficulty: "Easy",
    lastUpdated: "2026-06-28",
    views: 1980,
    steps: [
      { title: "Sign in with your work email", body: "Use the temporary password from your welcome email. You'll be asked to set a new one." },
      { title: "Turn on FileVault", body: "Open System Settings → Privacy & Security → FileVault and turn it on. This encrypts your disk." },
      { title: "Install your apps", body: "Open the Self Service app and install Slack, Zoom, Chrome, and 1Password." },
      { title: "Set up MFA", body: "Install Okta Verify or Duo on your phone and scan the QR code shown on screen." },
      { title: "Join a test call", body: "Use Zoom to join the onboarding test call. This confirms your mic and camera work." },
    ],
  },
  {
    slug: "software-installation",
    category: "software",
    title: "Install approved software",
    summary: "Install company-approved apps without admin rights.",
    overview: "You can install any approved app yourself from Self Service — no IT needed.",
    symptoms: ["Need a new app", "'Admin password required' error", "App not in App Store"],
    estTime: "5 min",
    difficulty: "Easy",
    lastUpdated: "2026-06-15",
    views: 760,
    steps: [
      { title: "Open Self Service", body: "Find the Self Service app in your Applications folder or via Spotlight." },
      { title: "Search for the app", body: "Type the app name in the search bar at the top." },
      { title: "Click 'Install'", body: "Installs run in the background and usually take 1–3 minutes." },
      { title: "Request a new app", body: "If the app isn't listed, submit a documentation request and we'll review it." },
    ],
  },
  {
    slug: "google-workspace-access",
    category: "email",
    title: "Google Workspace access",
    summary: "Get into Gmail, Drive, and Calendar on day one.",
    overview: "Your Google Workspace account is created automatically — you just need to sign in once.",
    symptoms: ["Can't open Gmail", "'Account not found'", "Missing from a shared drive"],
    estTime: "4 min",
    difficulty: "Easy",
    lastUpdated: "2026-06-10",
    views: 612,
    steps: [
      { title: "Go to mail.google.com", body: "Open Gmail in Chrome and click 'Sign in'." },
      { title: "Use your work email", body: "Enter your full work email address, then your password." },
      { title: "Approve MFA", body: "Approve the sign-in prompt on your phone." },
      { title: "Request shared-drive access", body: "If a folder is missing, ask the owner to share it — IT can't grant access to team drives." },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
export function articlesByCategory(slug: string) {
  return articles.filter((a) => a.category === slug);
}
