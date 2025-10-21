import requests
import json

url = "https://datasets-server.huggingface.co/rows"
params = {
    "dataset": "nvidia/Nemotron-Personas",
    "config": "default",
    "split": "train",
    "offset": 0,
    "length": 100 
}

response = requests.get(url, params=params)
data = response.json()

cols = ["persona", "professional_persona", "sports_persona", 
        "arts_persona", "travel_persona", "culinary_persona"]

selected_values = []
for item in data["rows"]:
    row = item["row"]
    parts = [row.get(c, "") for c in cols if row.get(c)]
    joined = " ".join(parts)
    selected_values.append(joined)

with open("nemotron_personas.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(selected_values))

with open("nemotron_personas.json", "w", encoding="utf-8") as f:
    json.dump(selected_values, f, ensure_ascii=False, indent=2)

print("Data saved to nemotron_personas.txt and nemotron_personas.json")
