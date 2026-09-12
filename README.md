# kambaz-next-js

CS5610 Web Development — Assignment 1 (Chapter 1: HTML user interfaces)

Coco Choi · Section 04

## What is in here

- `app/labs` — Labs index, table of contents, and Lab 1 through Lab 5
- `app/labs/lab1` — one component per HTML topic, plus a `forms` folder
- `app/(kambaz)` — the Kambaz prototype screens
- `app/not-found.tsx` — the page I show for routes that do not exist yet

## Routes

All routes use lower case, the same way the book writes them.

| Route | Screen |
| --- | --- |
| `/` | redirects to `/account/signin` |
| `/labs` | Labs index with my name and section |
| `/labs/lab1` | all Chapter 1 HTML examples |
| `/account/signin` `/account/signup` `/account/profile` | account screens |
| `/dashboard` | course cards |
| `/courses/[cid]/home` | modules plus course status |
| `/courses/[cid]/modules` | nested modules and lessons |
| `/courses/[cid]/assignments` | assignment list |
| `/courses/[cid]/assignments/[aid]` | assignment editor |

## Running it

```
npm install
npm run dev
```

Then open http://localhost:3000

## Deploying

I deploy this repository on Vercel with the Next.js preset. I turn off
Deployment Protection so graders can open the site without a login.
