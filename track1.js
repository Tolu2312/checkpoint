Algorithm: CountWordsAndVowels(sentence)
Input: sentence (a string that ends with a period '.')

Variables:
    wordCount = 1  // Initialize to 1 because there is at least one word in the sentence
    vowelCount = 0
    vowels = "AEIOUaeiou"  // String containing all vowels

For each character c in sentence (excluding the last period):
    If c is a space:
        Increment wordCount by 1
    If c is a letter and is found in the 'vowels' string:
        Increment vowelCount by 1

Output: wordCount, vowelCount

