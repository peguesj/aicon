import os

def generate_template(name):
    """Generates a template file with the given name."""
    template_file = os.path.join('templates', name + '.html')
    with open(template_file, 'w') as f:
        f.write('This is the template for the {} page.'.format(name))

def generate_javascript(name):
    """Generates a JavaScript file with the given name."""
    javascript_file = os.path.join('static', 'js', name + '.js')
    with open(javascript_file, 'w') as f:
        f.write('This is the JavaScript file for the {} page.'.format(name))

if __name__ == '__main__':
    # Generate the templates.
    generate_template('index')
    generate_template('search')
    generate_template('icon_details')
    generate_template('ratings_and_reviews')
    generate_template('following')

    # Generate the JavaScript files.
    generate_javascript('main')
    generate_javascript('search')
    generate_javascript('icon_details')
    generate_javascript('ratings_and_reviews')
    generate_javascript('following')

