ReactTube – YouTube Search App

A small YouTube-style search application built with Next.js and React Hooks.

This project was originally created as part of a bootcamp walkthrough to learn how to work with external APIs in React. I refactored parts of it to better understand state management and to implement a custom debounce hook.

What This Project Covers

Making HTTP requests to the YouTube Data API
Managing state with useState
Handling side effects with useEffect
Lifting state up between components
Building and using a custom React hook (useDebounce)
Rendering dynamic lists
Basic responsive layout with Bootstrap
Debounce Implementation

One improvement I focused on was implementing a custom debounce hook to prevent unnecessary API calls while typing.

The SearchBar component uses this hook to delay search execution until the user stops typing for 1 second.

This helps:

Reduce API requests
Improve performance
Prevent unnecessary re-renders

How It Works

User types in the search bar
Input updates local state immediately
Debounced value updates after 1 second
Parent component triggers API request
Results populate the video list
First video is auto-selected
Clicking another video updates the detail view

Tech Stack

Next.js (App Router)
React
Axios
Bootstrap
YouTube Data API v3

Notes

This project is mainly for learning and experimentation with API integration and React patterns. It is not intended to be a production-ready application.

Environment Setup

Create a .env file in the root:
NEXT_PUBLIC_YOUTUBE_API_KEY=your_api_key_here

Then run:

npm install
npm run dev
