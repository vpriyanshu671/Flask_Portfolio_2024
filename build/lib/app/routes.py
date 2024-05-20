from app import app
from flask import render_template

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/cv')
def cv():
    return render_template('cv.html')