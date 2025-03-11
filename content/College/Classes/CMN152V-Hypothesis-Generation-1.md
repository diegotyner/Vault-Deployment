In the code demo, there is a clear effect: **_automatic translations from some languages were worse than from others._**

Why? Generate two hypotheses for why, two predictions relating to each hypothesis, and two datasets that make each prediction testable. Then relate the content of a peer's post to yours.

To complete this exercise, you will post 1–3 paragraphs of complete, well-written sentences covering the following:
- Restate in your own words the observed effect or phenomenon motivating the exercise.
- Generate at least two hypotheses for why that effect might be occurring. The don't have to be right.
- For each hypothesis, generate a prediction about something observable in the world that would or wouldn't be so if that hypothesis held.
    - A good prediction doesn't have to be right.  In fact, for a prediction to be good, it has to be possible that it's wrong; it has to be the case that it could possibly be shown to be wrong.
    - A good prediction is also selective: it describes something that would happen under one hypothesis but not the other.
- For each prediction, propose an additional dataset that would support or challenge it.
- Respond to another's post (who proposed different data or prediction), with how your data might test or inform their prediction, or how their data would test or inform your prediction.
    - If you are focusing on a proposed prediction that differs from yours, respond with how either of your datasets might or might not also speak to that prediction. 
    - If you are focusing on a proposed dataset that differs from yours, respond with how it might or might not speak to either of your predictions.
    - When picking a peer to respond to, pick one without many responses: no post should have more than four responses total. 
- These will be graded against a rubric by the spot-checking process described in the syllabus.

---

For this assignment, we want to explore the phenomenon that some automatic translations from some languages were worse than from others. There exist a variety of plausible explanations for why this could be. 
One possible explanation for the effect we observed could be a discrepancy in the resources available to develop the translation software that Google uses. This could range from the developers paying closer attention to some languages than others, or that there exists more training data for some language as compared to others. This hypothesis would make the prediction that the quality of translation would correlate to the popularity / spread of a particular language. A dataset that could be used to test this hypothesis is a constructed dataset consisting of the popularity of a language associated with their respective translation quality. This could be evaluated using the heuristic of the accuracies of the back-translations that we tested in our code demo, or some other measure that assesses the quality of translation.
Another possible hypothesis could be that the languages that seemed to show worse automatic translations could be badly associated with English specifically, and be fine otherwise. This would predict that the quality of automatic translations would vary if the backtranslations were tested with a different translation of origin. To test this, we could use a dataset assessing the quality of translations using English as the origin of the backtranslations, and then another using a different language, like Hebrew as the language of origin for the backtranslations. If the automatic translation qualities for the rest of the languages were different for Hebrew compared to English, it would suggest that the automatic translations were at least partially due to the language of origin for the backtranslations. 

---

I agree with your first hypothesis about the translation qualities likely correlating to the resources available to each language. I like your focus on how this hypothesis leads to the prediction of the translations performing better across contexts, with the translation model itself being better trained if more resources are allocated to it. Another factor that could influence the resources that Google puts into improving their models could be the resource of manpower. They might be more likely to improve translation models in countries where they have offices, and people working on the problem in their native languages. 

I hadn't considered that the linguistic differences inherent in each language could be influential to the translation quality between languages, and that seems like a very reasonable hypothesis. Like you highlighted with the Bosnian/Serbian and Spanish/Mandarin examples, the linguistic similarities between the languages might be just a big a factor as the resources spent in training the translation models.

- Reply