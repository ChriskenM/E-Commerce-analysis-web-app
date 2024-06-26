<h2> landing page link </h2>

https://analytics-web-app.my.canva.site/landing-page

<h2> E-Commerce Analytics Web App </h2>

<h4> Overview </h4>

- The E-Commerce Analytics Web App is a comprehensive dashboard that provides businesses with actionable insights into their online sales.
- Has a Prediction page which uses simple **ML** algorithms to offer useful predictive insights to help in business decision making.
- Built using modern web technologies, this project aims to help e-commerce businesses optimize their strategies and improve customer engagement.

<h4> Features: </h4>

- Dashboard: Visualize sales performance, customer behavior, and website traffic statistics.
- Predictions: Utilize predictive analytics to forecast future trends and identify potential opportunities.
- Data Handling: Efficiently handle large datasets, including CSV file uploads and database integration.

<h4> Technologies Used: </h4>

- Frontend: React, HTML, CSS, MaterialUI, Recharts
- Backend: Node.js, Express.js, mongoose
- Database: MongoDB
- Analytics: regression.js

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![image](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

<h4> Deployment </h4>

- Back-end

![image](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

- Front-end

![image](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<h4> Installation </h4>

- Clone the repository:
  - bash

```
  git clone
```

- Navigate to the project directory:

```
cd E-Commerce-Analysis-Web-App
```

- Install dependencies for frontend and backend:

```
npm install
```

- Usage
  - Start the backend server:
  - remember to create a environment file linking to your database.

```
npm run dev
```

- Start the frontend development server:

```
npm run dev
```

- Access the web app in your browser.

<h4> Credits </h4>

The curriculum at <[ALX](https://www.alxafrica.com/)> School.
Mock Data source provided by Edroh.

<h4> Contributors </h4>

- ChrisKen Mutuma
  - <[Linkedin](https://www.linkedin.com/in/mutuma-chris-520355270)>
  - <[Twitter](https://twitter.com/MutumaChrisken)>

<h4> The Project Tree </h4>
```
E-Commerce-analysis-web-app
├─ client
│  ├─ .env.local
│  ├─ .eslintrc.json
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.tsx
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ BoxHeader.tsx
│  │  │  ├─ DashboardBox.tsx
│  │  │  └─ FlexBetween.tsx
│  │  ├─ expanded-theme.ts
│  │  ├─ index.css
│  │  ├─ main.tsx
│  │  ├─ scenes
│  │  │  ├─ dashboard
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ Row1.tsx
│  │  │  │  ├─ Row2.tsx
│  │  │  │  └─ Row3.tsx
│  │  │  ├─ login
│  │  │  │  ├─ Login.tsx
│  │  │  │  └─ LoginForm.tsx
│  │  │  ├─ navbar
│  │  │  │  └─ index.tsx
│  │  │  ├─ predictions
│  │  │  │  └─ index.tsx
│  │  │  └─ register
│  │  │     ├─ Register.tsx
│  │  │     └─ RegisterForm.tsx
│  │  ├─ state
│  │  │  ├─ api.ts
│  │  │  └─ types.ts
│  │  ├─ theme.ts
│  │  └─ vite-env.d.ts
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
└─ server
   ├─ .env
   ├─ data
   │  └─ data.js
   ├─ index.js
   ├─ models
   │  ├─ KPI.js
   │  ├─ Product.js
   │  ├─ Transaction.js
   │  └─ User.js
   ├─ package-lock.json
   ├─ package.json
   └─ routes
      ├─ kpi.js
      ├─ login.js
      ├─ product.js
      ├─ register.js
      └─ transaction.js

```

```
