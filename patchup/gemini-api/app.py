from flask import Flask, request, jsonify
from text_to_text import generate_text
from image_to_text import suggest_image_report

app = Flask(__name__)



@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    user_prompt = data.get('user_prompt', '')
    use_context = data.get('use_context', '')

    try:
        result = generate_text(use_context, user_prompt)
        return jsonify({'response': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500



@app.route('/suggest_image_report', methods=['POST'])
def suggest_image_report():

    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    image_file = request.files['image']

    use_context = request.form.get('use_context', '')

    try:

        image_bytes = image_file.read()

        extracted_text = suggest_image_report(image_bytes, use_context)

        return jsonify({'response': extracted_text})

    except Exception as e:
        return jsonify({'error': str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True)

