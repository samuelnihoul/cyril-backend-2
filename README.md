This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. run the development server:

```powershell
pnpm dev
```

The server has live update capabilities and does not shut down on uncaught errors.

2. add the service account as an editor of your sheet.s. You can find it in credentials.json (the email address).

You can start editing the app by modifying `app/route.tsx`. The page auto-updates as you edit the file.


## routes

### /
#### GET
Returns spreadsheet cells at the given range.
URL params:
- sheet (the shit ID)
- line (the line number)

## appendix

### URL params
You can pass parameters to web requests by postfixing the url with a "?" and then content following the paramName=paramValue&param2=p2&param3=p3 format.

### Next.js 

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

