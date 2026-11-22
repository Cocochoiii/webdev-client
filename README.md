# kambaz-next-js

CS5610 Web Development

- `main` branch — Assignment 1 (Chapter 1: HTML user interfaces)
- `a2` branch — Assignment 2 (Chapter 2: CSS and Tailwind)
- `a3` branch — Assignment 3 (Chapter 3: JavaScript and a data driven Kambaz)
- `a4` branch — Assignment 4 (Chapter 4: client state with Context and Zustand)
- `a5` branch — Assignment 5 (Chapter 5: Kambaz reads and writes over HTTP)

Coco Choi · Section 09

The server half of the project is in a sibling repository,
[webdev-server](https://github.com/Cocochoiii/webdev-server). It runs on
http://localhost:4000 locally and on Render when deployed.

## What is in here

- `app/labs` — Labs index, table of contents, and Lab 1 through Lab 5
- `app/labs/lab1` — one component per HTML topic, plus a `forms` folder
- `app/labs/lab2` — the CSS samples and `index.css`; Tailwind samples live in `app/labs/lab2/tailwind`
- `app/labs/lab3` — one component per JavaScript topic, plus `add/[a]/[b]` and the `todos` folder
- `app/labs/lab4` — events and state, plus the `profile`, `context`, `zustand`, `redux`, `hooks`, and `url-encoding` folders
- `app/labs/lab5` — links and axios calls to the express server, with `client.ts` holding every request
- `app/api/lab5` — two Next.js route handlers, `hello` and `calculator`
- `app/(kambaz)/account/client.ts` and `courses/client.ts` — the axios functions Kambaz uses to talk to the server
- `app/(kambaz)/account/AccountContext.tsx` — the signed in user
- `app/(kambaz)` — the Kambaz prototype screens
- `app/not-found.tsx` — the page I show for routes that do not exist yet

## Routes

All routes use lower case, the same way the book writes them.

| Route | Screen |
| --- | --- |
| `/` | redirects to `/account/signin` |
| `/labs` | Labs index with my name, my section, and links to both repositories |
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
| `/labs/lab5` | Chapter 5 links and axios calls to the express server |
| `/api/lab5/hello` and `/api/lab5/calculator` | Next.js route handlers |
| `/account/signin` `/account/signup` `/account/profile` | account screens, signed in on the server |
| `/dashboard` | course cards with add, edit, delete, and enroll |
| `/courses/[cid]/home` | modules plus course status |
| `/courses/[cid]/modules` | nested modules and lessons |
| `/courses/[cid]/assignments` | assignment list |
| `/courses/[cid]/assignments/[aid]` | assignment editor (`new` makes a new one) |
| `/courses/[cid]/people/table` | people table with add, edit, and delete |

## Running it

```
npm install
npm run dev
```

Then open http://localhost:3000. The Kambaz screens and Lab 5 need the
server running too, so start `npm run dev` in `webdev-server` as well.
`.env.development` points `NEXT_PUBLIC_HTTP_SERVER` at http://localhost:4000.

## Deploying

I deploy this repository on Vercel with the Next.js preset. I turn off
Deployment Protection so graders can open the site without a login.
Branch deployments are on, so each branch has its own preview URL.
`NEXT_PUBLIC_HTTP_SERVER` is set in Vercel to the Render URL of the server.

The courses, modules, assignments, and users live on the server now, so a
page reload keeps them as long as the server is running.
