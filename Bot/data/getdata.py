import json
import requests

url = "https://datasets-server.huggingface.co/first-rows"
params = {
    "dataset": "proj-persona/PersonaHub",
    "config": "elite_persona",
    "split": "train"
}

response = requests.get(url, params=params)
data = response.json()

first_col_name = list(data["rows"][0]["row"].keys())[0]
first_col_values = [row["row"][first_col_name] for row in data["rows"]]

with open("personas.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(map(str, first_col_values)))

with open("personas.json", "w", encoding="utf-8") as f:
    json.dump(first_col_values, f, ensure_ascii=False, indent=2)

print("Data saved to personas.txt and personas.json")