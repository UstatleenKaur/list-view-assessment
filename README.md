## How to run the code locally

First, run the development server:
```bash
npm i
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Modify`pages/index.tsx` to start editing the page. The page auto-updates as the file is edited.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Architecture 
The project is built using NextJS with Typescript and uses the atomic design system. Under this sytem
- the smallest building blocks of matter are atoms (here in this project, the pill used to show the status/priority is the atom),
- atoms combine together to form molecules (the status and priority pill along with their specific logic combine to form the molecules),
- molecules and atoms combine with each other and create form organisms (a complete row of issue in reference to this project).

Also, to handle the performance issues, Virtuoso package has been used which is designed to render huge lists with unknown item sizes. It makes use of the concept of virtualized rendering. Moreover, the page has been rendered using accordions which helps divide the entore list and content into multiple groups and at a given moment, one can view only of the accordions opened and others would be closed.
Once can see the different groups in the screenshot below like In Review, Todo, Done etc
![alt text](https://github.com/UstatleenKaur/list-view-assessment/assets/29287626/210d5f3c-da1b-4e8f-a618-0d226c170aa5)

## CSS and Styling 
The project uses [Tailwind CSS](https://tailwindcss.com/) framework for the styling purposes. Use the tailwind.config.js file to customise the defaults provided by the tailwind framework.

## Deployment and Public URL
Vercel has been used for the dpeloyment of the app.
Visit [https://list-view-assessment.vercel.app/](https://list-view-assessment.vercel.app/) for the hosted app.
## Built With / Packages Used
- ##### [Nextjs](https://nextjs.org/docs)
- ##### [Virtuoso](https://www.npmjs.com/package/react-virtuoso?activeTab=explore)
- ##### [Tailwind](https://tailwindcss.com/)
