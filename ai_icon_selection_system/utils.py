import clip
import numpy as np

def find_matching_icons(brand_abstract):
    # Load the CLIP model.
    model = clip.load("ViT-B/32")

    # Get the text description of the brand abstract.
    text = brand_abstract["description"]

    # Generate the CLIP embedding for the text description.
    embedding = model.encode_text(text)

    # Find the icons that are most similar to the CLIP embedding.
    matching_icons = []
    for icon in icons:
        icon_embedding = model.encode_image(icon)
        similarity = np.dot(embedding, icon_embedding)
        matching_icons.append((similarity, icon))

    # Sort the matching icons by similarity.
    matching_icons.sort(key=lambda x: x[0], reverse=True)

    # Generate the explanation of the icon matches.
    explanations = []
    for similarity, icon in matching_icons:
        explanation = model.generate_explanation(text, icon)
        explanations.append(explanation)

    # Get the top 5 results.
    top_5_matching_icons = matching_icons[:5]

    # Get the confidence scores for the top 5 results.
    top_5_confidence_scores = [similarity for similarity, _ in top_5_matching_icons]

    # Get the tags for the top 5 results.
    top_5_tags = [model.generate_tags(icon) for _, icon in top_5_matching_icons]

    return top_5_matching_icons, top_5_confidence_scores, top_5_tags
