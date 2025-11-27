# LiveHindustan Clone (Next.js)

A responsive front-end news portal application built with Next.js, mimicking the layout and functionality of [LiveHindustan](https://www.livehindustan.com/). This project focuses on performance, SEO, and modern React patterns.

**[View Live Demo](https://your-vercel-link-here.app)** *(Replace with your Vercel URL)*

---

## 🚀 Features

### Core Functionality
- **Dynamic Routing:** Individual pages for every news article (`/article/[id]`).
- **Next.js Image Optimization:** efficient loading of images with layout shift protection.
- **Responsive Design:** Fully fluid layout that adapts from Desktop (3-column grid) to Mobile (single column).
- **SEO Ready:** Meta tags and dynamic titles for better search engine visibility.

### Technical Implementation
- **Data Fetching:** Uses **Incremental Static Regeneration (ISR)** via `getStaticProps`.
  - *Why?* Allows the site to be ultra-fast (static HTML) but still update content in the background every 60 seconds without rebuilding the whole site.
- **Styling:** Built with **Tailwind CSS** for rapid UI development and consistent design tokens.
- **Mock API:** Simulates a real backend using a structured JSON data model.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Language:** JavaScript (ES6+)

---

## ⚙️ Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/live-hindustan-clone.git](https://github.com/YOUR_USERNAME/live-hindustan-clone.git)
   cd live-hindustan-clone
   
