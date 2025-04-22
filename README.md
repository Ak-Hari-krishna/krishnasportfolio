# Personal Portfolio Website

A modern and responsive portfolio website built with Django, HTML, CSS, and JavaScript, python.

## Features

- Responsive design
- Smooth scrolling navigation
- Skills showcase
- Project portfolio
- Contact form
- Modern UI with animations

## Sections

1. **Hero Section**: Welcome message and call-to-action
2. **About**: Personal introduction and background
3. **Skills**: Technical skills and expertise
4. **Projects**: Showcase of personal projects
5. **Contact**: Contact form for reaching out

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Create a virtual environment and activate it:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Apply migrations:
```bash
python manage.py migrate
```

5. Create a superuser (optional):
```bash
python manage.py createsuperuser
```

6. Run the development server:
```bash
python manage.py runserver
```

7. Visit http://127.0.0.1:8000/ in your browser

## Customization

1. Replace the profile image in `main/static/main/images/profile.jpg`
2. Update the content in `main/templates/main/index.html`
3. Modify styles in `main/static/main/css/style.css`
4. Add your projects in the Projects section
5. Customize the color scheme in the CSS variables

## Technologies Used

- Django
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- SQLite

## Contributing

Feel free to fork this repository and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE). 