from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/schedule_builder')
def schedule_builder():
    return "Coming Soon!"

if __name__ == '__main__':
    app.run(debug=True)