# kambaz-next-js

CS5610 Web Development

- `main` branch — Assignment 1 (Chapter 1: HTML user interfaces)
- `a2` branch — Assignment 2 (Chapter 2: CSS and Tailwind)
- `a3` branch — Assignment 3 (Chapter 3: JavaScript and a data driven Kambaz)
- `a4` branch — Assignment 4 (Chapter 4: client state with Context and Zustand)

Coco Choi · Section 09

## What is in here

- `app/labs` — Labs index, table of contents, and Lab 1 through Lab 5
- `app/labs/lab1` — one component per HTML topic, plus a `forms` folder
- `app/labs/lab2` — the CSS samples and `index.css`; Tailwind samples live in `app/labs/lab2/tailwind`
- `app/labs/lab3` — one component per JavaScript topic, plus `add/[a]/[b]` and the `todos` folder
- `app/labs/lab4` — events and state, plus the `profile`, `context`, `zustand`, `redux`, `hooks`, and `url-encoding` folders
- `app/(kambaz)/database` — the JSON files the Kambaz screens read
- `app/(kambaz)/store` — Zustand stores for courses, modules, assignments, and enrollments
- `app/(kambaz)/account/AccountContext.tsx` — the signed in user
- `app/(kambaz)` — the Kambaz prototype screens
- `app/not-found.tsx` — the page I show for routes that do not exist yet

## Routes

All routes use lower case, the same way the book writes them.

| Route | Screen |
| --- | --- |
| `/` | redirects to `/account/signin` |
| `/labs` | Labs index with my name and section |
| `/labs/lab1` | all Chapter 1 HTML examples |
| `/labs/lab2` | Chapter 2 CSS examples and React Icons |
| `/labs/lab2/tailwind` | Chapter 2 Tailwind examples |
| `/labs/lab3` | Chapter 3 JavaScript examples |
| `/labs/lab3/add/[a]/[b]` | adds the two numbers in the path |
| `/labs/lab4` | Chapter 4 events, state, Context, Zustand, and Redux |
| `/labs/lab4/profile-form` | the profile form three ways |
| `/labs/lab4/hooks` | the hooks I wrote |
| `/labs/lab4/url-encoding/query-params` | adds a and b (and c) from the query string |
| `/labs/lab4/url-encoding/path-params/[a]/[b]` and `/[a]/[b]/[c]` | adds the numbers in the path |
| `/account/signin` `/account/signup` `/account/profile` | account screens |
| `/dashboard` | course cards with add, edit, delete, and enroll |
| `/courses/[cid]/home` | modules plus course status |
| `/courses/[cid]/modules` | nested modules and lessons |
| `/courses/[cid]/assignments` | assignment list |
| `/courses/[cid]/assignments/[aid]` | assignment editor (`new` makes a new one) |
| `/courses/[cid]/people/table` | people table |

## Running it

```
npm install
npm run dev
```

Then open http://localhost:3000

## Deploying

I deploy this repository on Vercel with the Next.js preset. I turn off
Deployment Protection so graders can open the site without a login.
Branch deployments are on, so each branch has its own preview URL.

The new courses, modules, assignments, and enrollments only live in memory,
so a page reload brings back the JSON data.
