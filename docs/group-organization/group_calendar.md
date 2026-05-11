# Shared Calendars Guide

> Nextcloud server: **https://cal.quantumoptics.fr**

---

## 1. First login

1. Open [https://cal.quantumoptics.fr](https://cal.quantumoptics.fr) in your browser.
2. Credentials:
   - **Login:** `firstname_lastname` (e.g. `quentin_glorieux`)
   - **Initial password:** `lkblkb2026`
3. **Change your password immediately** after the first login:  
   `Settings (top-right icon) → Security → Change password`

---

## 2. Groups

When you join, the administrator assigns you to the groups matching your profile.

| Group | Members |
|-------|---------|
| `eq15b` | All team members |
| `rb` | Rb team members |
| `nano` | Nano team members |
| `polariton` | Polaritons team members |
| `permanents` | Quentin, Alberto, Hanna |
| `phd` | PhD students |
| `postdocs` | Postdoctoral researchers |
| `interns` | Interns |
| `visitors` | Visitors |

If you are missing from a group, contact the administrator.

---

## 3. Available calendars

### 3.1 Calendars shared by the admin

The admin automatically shares calendars based on your group membership. Each lab has three calendars:

| Calendar | Content | Access |
|----------|---------|--------|
| `RbLab` / `NanoLab` / `PolaritonLab` | General lab info (meetings, experiments, events) | **Read / Write** |
| `RbOff` / `NanoOff` / `PolaritonOff` | Absences, holidays, teaching, travel | **Read / Write** |
| `RbInterns` / `NanoInterns` / `PolaritonInterns` | Intern planning (arrivals, departures) | **Read only** |

> The `Interns` calendars are managed by permanent staff only.

### 3.2 Permanent staff calendars

Each permanent staff member shares a personal calendar with the team:

| Calendar | Owner |
|----------|-------|
| `Quentin` | Quentin Glorieux |
| `Alberto` | Alberto Bramati |
| `Hanna` | Hanna Le Jeannic |

### 3.3 Other teams' calendars (read only)

If you are in the Rb team, you have **read-only** access to `NanoLab`, `NanoOff`, `PolaritonLab`, `PolaritonOff` (and vice versa). This helps coordinate shared resources and stay informed across teams.

---

## 4. What you need to do

### Report your absences — mandatory

Whenever you are away (holidays, travel, teaching, extended remote work…), **add an event to your team's `Off` calendar**:

- `RbOff` for the Rb team
- `NanoOff` for the Nano team
- `PolaritonOff` for the Polaritons team

Include a clear reason and your initials in the event title (e.g. `QG — Holidays`, `AB — Conference Paris`, `HLJ — Teaching L3`).

### Add lab-wide information

Use your team's `Lab` calendar for collective events: group meetings, internal seminars, shared equipment bookings, etc.

---

## 5. Personal calendars

You can create personal calendars and choose freely who to share them with.

**Example uses:**
- A `Beers` calendar shared with the `phd` group
- A `YourFirstName` calendar shared with `permanents`
- A fully private calendar (visible only to you)

**How to share a personal calendar:**

1. In the web interface, click `...` next to the calendar name.
2. Select **Share with users or groups**.
3. Type a group name (`phd`, `permanents`, `eq15b`…) or an individual login (`quentin_glorieux`).
4. Choose the access level (read only or read/write).

You can also keep a calendar **entirely private** — no one else will see it.

---

## 6. Access from your calendar app

You can sync the calendars with your usual app (Thunderbird, Apple Calendar, Google Calendar, Outlook…) via the **CalDAV** protocol.

| Parameter | Value |
|-----------|-------|
| Server address | `https://cal.quantumoptics.fr` or `cal.quantumoptics.fr` |
| Login | `firstname_lastname` |
| Password | your Nextcloud password |

**Thunderbird:**  
`New calendar → On the network → CalDAV → https://cal.quantumoptics.fr`

**Apple Calendar (macOS / iOS):**  
`Settings → Accounts → Add account → Other CalDAV account → https://cal.quantumoptics.fr`

**Android (e.g. DAVx⁵):**  
Install [DAVx⁵](https://www.davx5.com/), add an account with URL `https://cal.quantumoptics.fr`.

---

## 7. Access rights summary

| Calendar | Your team | Other teams |
|----------|:---------:|:-----------:|
| `[Your]Lab` | R/W | Read only |
| `[Your]Off` | R/W | Read only |
| `[Your]Interns` | Read only | Not visible |
| `[Other]Lab` | Read only | — |
| `[Other]Off` | Read only | — |
| Permanent staff calendars | Read only | — |
| Personal calendar | R/W | your choice |

---

## 8. Contact & administration

For any issue (locked account, missing access, calendar not showing up): contact **Quentin G.**