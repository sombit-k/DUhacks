# DUhacks

Instructions for initial setup

## Cloning the Project

To clone this project from GitHub, run the following command:

````bash
git clone https://github.com/sombit-k/DUhacks.git
## Installing dependencies

Navigate to the project directory and run the following commands to install dependencies and start the development server:

```bash
npm install
````

Do the above for both /backend and /frontend and parent folder. Which means you need to do it 3 times.

## Running the code

To run backend:

```bash
npm run backend
```

To run frontend:

```bash
npm run frontend
```

To run both, make sure you are in the parent folder:

```bash
npm run dev
```

## Pushing Code to GitHub

After making changes to the code, you can push the changes to GitHub with the following commands:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## Pulling Code from GitHub

To pull the latest changes from GitHub and handle incoming changes, use the following command:

```bash
git pull origin main --rebase
```
