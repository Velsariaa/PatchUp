import os
from dotenv import load_dotenv
from google import genai

load_dotenv()
api_key = os.getenv("FLASK_GEMINI_API_KEY")

client = genai.Client(api_key=api_key)

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="Explain how AI works in a few words in th emost craziest way"
)

print(response.text)
