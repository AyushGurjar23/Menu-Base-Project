from flask import Flask, request, render_template, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

# Function to perform Google Search
def google_search(query):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    params = {'q': query, 'num': 10}
    response = requests.get('https://www.google.com/search', headers=headers, params=params)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        results = []

        for item in soup.find_all('div', attrs={'class': 'g'}, limit=10):
            title_element = item.find('h3')
            link_element = item.find('a')
            snippet_element = item.find('div', attrs={'class': 'IsZvec'})

            if title_element and link_element:
                title = title_element.text
                link = link_element['href']
                snippet = snippet_element.text if snippet_element else 'No snippet'
                results.append({
                    'title': title,
                    'link': link,
                    'snippet': snippet
                })

            if len(results) >= 5:
                break

        return results
    else:
        return None

# Route for the homepage
@app.route('/')
def home():
    return render_template('index.html')

# Route for handling the search
@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query')
    if query:
        results = google_search(query)
        return jsonify(results)
    return jsonify({"error": "No query provided"})

if __name__ == "__main__":
    app.run(debug=True)
