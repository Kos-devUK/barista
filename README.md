From the terminal run the backend (to initialise the database)
directory -> barista/backend
activate the Virtual ENViroment -> source venv/bin/activate
then run the Flask framework application -> python app.py

Opem a new terminal and run the frontend (to visualise the application)
directory -> barista/frontend
then run the React application -> npm run dev

## Maintenance

# FrontEnd
- To check all the outdated packages -> npm outdated
- To update dependencies for the frontend: sudo npx npm-check -u
- To update specific package: sudo npm install <package-name>@latest

# BackEnd
Updates MUST be inside the Virtual ENViroment:
Activate venv first: source venv/bin/activate

- To check all the outdated packages -> pip list --outdated
- To update pip -> pip install --upgrade pip
- To updadte packages -> pip install --upgrade <package name>

