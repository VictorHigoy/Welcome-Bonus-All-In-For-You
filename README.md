The layout is built with Next.js and TailwindCSS, and the components are organized in a way that keeps the code clean and easier to maintain. I also refactored the component structure to follow better development practices and improve readability. On the first row, I placed the Olympus image together with the spinning wheel and added a Jackpot container with a dynamic value display. The section uses a responsive flexbox layout that stacks into a column on smaller screens and switches to a row on larger screens.

I also improved the wheel spinning logic so it properly triggers the Win and Lose modals after the spin. Both modals were implemented along with the functionality of their buttons, and I made sure they stay responsive across different screen sizes so they display properly on both mobile and desktop.

The second row contains four sections: Real Players Records, Gaming License, Gaming Provider, and Payment Method. Each section uses responsive widths (w-full, sm:w-1/2) to keep the layout balanced across devices. For the Gaming License and Gaming Provider sections, I used arrays to render the images, which keeps the code simpler and easier to understand for other developers. I also reorganized the public images folder to make the asset structure cleaner. Additionally, I added page metadata such as the title, description, and favicon, and organized the project with dedicated components and images folders.

Some elements still rely on fixed widths and z-index layering to maintain the intended visual design, although this can slightly limit flexibility on unusual screen sizes.

TechStack: NextJS, Typescript, TailwindCss

