import os
from dotenv import load_dotenv
from google import genai

load_dotenv()
api_key = os.getenv("FLASK_GEMINI_API_KEY")
client = genai.Client(api_key=api_key)


def suggest_image_report(image, context: str = "") -> str:
    """
    Generates a response using Gemini based on the user prompt.
    
    :param context: Optional function that modifies the prompt
    :param user_prompt: The raw prompt from user
    :return: Gemini's response as a string
    """
    # if context and callable(context):
    #     user_prompt = context(user_prompt)

    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=user_prompt
        )
        return response.text
    except Exception as e:
        return f"Error: {str(e)}"
