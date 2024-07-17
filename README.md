# Group Project - Tiffin Box

Our project’s purpose is to provide a platform through which the food ordering and delivery process becomes easy for both the customers and food service providers. It also has an administrator role to manage the customers and food service providers of the application. Our goal is to enhance the overall food experience by providing a platform for effective order tracking and meal management. With features like tracking deliveries in real-time, earning reward points, and easy-to-use dashboards, we aim to make the experience smooth for everyone.

- _Date Created_: 30 May 2024
- _Last Modification Date_: 24 Jun 2024
- _Project URL_: <https://tiffinbox-csci5709.netlify.app/>
- _Git URL_: <https://git.cs.dal.ca/rkp/csci-5709-grp-04>

## Authors

- [Raj Kamlesh Patel](rj227488@dal.ca) - _(Full Stack Developer)_
- [Keval Dharmeshbhai Gandevia](keval.gandevia@dal.ca) - _(Full Stack Developer)_
- [Harsh Maisuri](hr786278@dal.ca) - _(Full Stack Developer)_
- [Kunj Hiteshkumar Pathak](kn743706@dal.ca) - _(Full Stack Developer)_
- [Savan Maheshkumar Patel](sv272995@dal.ca) - _(Full Stack Developer)_
- [Bhavya Mukesh Dave](bh392017@dal.ca) - _(Full Stack Developer)_

## Getting Started

### Prerequisites

To have a local copy of this Project up and running on your local machine, you will first need to install the following libraries

- [NodeJS](https://nodejs.org/en) `v20.x`
- [npm](https://www.npmjs.com/) `v6.x`

### Installing

Clone the Repository

```bash
git clone https://git.cs.dal.ca/rkp/csci-5709-grp-04.git
```

OR

```bash
git clone git@git.cs.dal.ca:rkp/csci-5709-grp-04.git
```

Navigate to the frontend directory

```
cd csci-5709-grp-04
cd frontend
```

### Install dependencies

- Run the following command to install frontend dependencies:

```bash
npm install
```

start React APP

- After installing dependencies, start the React.js development server by running:

```bash
npm run dev
```

- Open your web browser and go to [http://localhost:5173](http://localhost:5173) to access the website.

## Deployment

- Deployment to Netlify

#### 1. Login to Netlify: Sign up or log in at Netlify.

#### 2. Create a New Site:

- Click "Add new site".
- Connect your GitHub account and select your repository.

#### 3. Configure Settings:

- Base directory: frontend
- Build Command: npm run build
- Publish Directory: /frontend/dist
- Deploy: Click "Deploy site".

## Built With

- [React](https://react.dev/) - The JavaScript library used for building the user interface.
- [Vite](https://vitejs.dev/) - The build tool used for faster and leaner development.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapidly building modern websites.
- [Daisy UI](https://daisyui.com/) - Tailwind CSS component library.

### Folder Structure

- Command for react boilerplate

```
npm create vite@latest frontend --template react
```

- The command [Create new Vite App](https://vitejs.dev/guide/) is used from official documentation for initializing React app and Vite.

## Sources Used

### Navbar.jsx

_Lines 25 - 119_

```
<nav className="max-w-5xl navbar">
    <div className="gap-2 navbar-start">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
            />
            </svg>
        </div>
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 gap-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
            <li>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Home
            </NavLink>
            </li>
            <li>
            <NavLink
                to="/contact-us"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Contact Us
            </NavLink>
            </li>
            <li>
            <NavLink
                to="/faqs"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                FAQs
            </NavLink>
            </li>
        </ul>
        </div>
        <Link to="/" className="cursor-pointer">
        <img
            src="https://res.cloudinary.com/dk1fim9hl/image/upload/v1719262725/Tiffin%20Box/nldinb3ipt9tegyc2hzs.png"
            alt="tiffin box"
            className="w-10"
        />
        </Link>
    </div>
    <div className="hidden navbar-center lg:flex">
        <ul className="flex gap-8 px-1">
        <li>
            <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-primary transition"
            }
            >
            Home
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/contact-us"
            className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-primary transition"
            }
            >
            Contact Us
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/faqs"
            className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-primary transition"
            }
            >
            FAQs
            </NavLink>
        </li>
        </ul>
    </div>
    <div className="navbar-end">
        <Link className="text-slate-100 btn btn-secondary">Login</Link>
    </div>
</nav>
```

The code above was created by adapting the code in [Navbar - Daisy UI](https://daisyui.com/components/navbar/) as shown below:

```
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
```

### Footer.jsx

_Lines 5-29_

```
<footer className="p-10 rounded footer footer-center bg-secondary text-accent-content">
    <nav className="grid grid-flow-col gap-4 font-medium">
    <Link to="/" className="link link-hover">
        Home
    </Link>
    <Link to="/contact-us" className="link link-hover">
        Contact
    </Link>
    <Link to="/faqs" className="link link-hover">
        FAQ
    </Link>
    </nav>
    <a>
    <img
        src="https://res.cloudinary.com/dk1fim9hl/image/upload/v1719262725/Tiffin%20Box/nldinb3ipt9tegyc2hzs.png"
        alt="tiffin box"
        className="w-10"
    />
    </a>
    <aside>
    <p className="font-medium">
        Copyright © 2024 - All right reserved by Tiffin Box
    </p>
    </aside>
</footer>
```

The code above was created by adapting the code in [Footer - Daisy UI](https://daisyui.com/components/footer/) as shown below:

```
<footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
```

### Hero.jsx

_Lines 7 - 22_

```
<section className="max-w-5xl overflow-hidden rounded-md shadow-md hero h-96 bg-bgHero">
    <div className="hero-overlay bg-opacity-70"></div>
    <div className="text-center hero-content text-neutral-content">
        <div className="max-w-3xl">
        <h1 className="mb-5 text-4xl font-bold md:text-6xl">
            Delicious Home-Cooked Meals
        </h1>
        <h2 className="mb-5 text-2xl font-semibold sm:mb-7 sm:text-2xl">
            Find the best tiffins near you
        </h2>
        <button className="px-8 text-xl text-white btn btn-secondary">
            Explore <BiSolidDish className="w-6 h-6 ml-2" />
        </button>
        </div>
    </div>
</section>
```

The code above was created by adapting the code in [Hero - Daisy UI](https://daisyui.com/components/hero/) as shown below:

```
<div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
```

## Acknowledgments

- React
- Tailwind CSS
- Daisy UI
- Cloudinary
