from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/schedule_builder')
def schedule_builder():
    return render_template('schedule_builder.html')

if __name__ == '__main__':
    app.run(debug=True)