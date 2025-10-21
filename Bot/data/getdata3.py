from datasets import load_dataset

ds = load_dataset("fancyzhx/ag_news")

train_texts = [item["text"] for item in ds["train"]]
test_texts = [item["text"] for item in ds["test"]]

with open("ag_news_train.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(train_texts))

with open("ag_news_test.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(test_texts))
